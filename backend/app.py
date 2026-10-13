import os
import json
from typing import List, Dict

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

app = FastAPI(title="REAI", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key) if api_key else None

class ConversationAgent:
    def __init__(self, name: str, voice: str, personality: str):
        self.name = name
        self.voice = voice
        self.personality = personality

    def build_system_prompt(self) -> str:
        return (
            f"You are {self.name}, a conversational AI assistant. "
            f"Voice style: {self.voice}. Personality: {self.personality}. "
            "Speak naturally, stay concise, be energetic, and keep the dialogue moving. "
            "Use spoken-language cadence and short, clear sentences."
        )

class ConversationManager:
    def __init__(self):
        self.history: List[Dict[str, str]] = []
        self.agents = [
            ConversationAgent("Ava", "friendly and warm", "curious, upbeat, natural, engaging"),
            ConversationAgent("Nova", "calm and thoughtful", "witty, precise, confident, poetic"),
        ]

    def next_agent(self, current_name: str) -> ConversationAgent:
        for agent in self.agents:
            if agent.name != current_name:
                return agent
        return self.agents[0]

    def generate_reply(self, speaker: str, text: str) -> Dict[str, str]:
        if not client:
            return {
                "speaker": self.next_agent(speaker).name,
                "text": "I’m ready to talk. Please add your OpenAI API key so I can generate replies.",
            }

        next_agent = self.next_agent(speaker)
        history_text = "\n".join(f"{item['speaker']}: {item['text']}" for item in self.history[-8:])

        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": next_agent.build_system_prompt()},
                {"role": "user", "content": f"Conversation history:\n{history_text}\n\nLast message: {text}\n\nReply as {next_agent.name}."},
            ],
            temperature=0.9,
            max_tokens=220,
        )

        reply_text = completion.choices[0].message.content.strip()
        self.history.append({"speaker": next_agent.name, "text": reply_text})
        return {"speaker": next_agent.name, "text": reply_text}

manager = ConversationManager()

@app.get("/health")
def health():
    return {"status": "ok", "service": "REAI backend"}

@app.post("/api/conversation")
def start_conversation(payload: dict):
    prompt = payload.get("prompt") or payload.get("text") or "Let’s start a conversation about AI and creativity."
    current_speaker = payload.get("speaker") or "User"

    reply = manager.generate_reply(current_speaker, prompt)
    return {
        "speaker": reply["speaker"],
        "text": reply["text"],
        "voice": "default",
    }

@app.post("/api/chat")
def chat(payload: dict):
    prompt = payload.get("text") or payload.get("prompt")
    if not prompt:
        raise HTTPException(status_code=400, detail="Missing text input")

    response = manager.generate_reply("User", prompt)
    return {
        "speaker": response["speaker"],
        "text": response["text"],
    }

@app.get("/")
def root():
    return {"message": "REAI backend is running"}
