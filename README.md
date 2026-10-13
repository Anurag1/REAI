# REAI

REAI is a browser-based demo app for a real-time conversation between two AI bots with distinct avatars, personalities, and voices.

What this project includes:
- FastAPI backend for AI conversation orchestration
- Real-time WebRTC signaling layer in the browser
- Two animated bot cards with avatars
- OpenAI-backed conversation generation
- Browser TTS to give each bot a voice
- Docker support for quick local setup

Repository URL:
- https://github.com/Anurag1/REAI

## Features
- Two AI personalities: Ava and Nova
- Conversation orchestration between bots
- WebRTC-ready signaling hook for future media pipelines
- Browser speech synthesis for voice output
- Clean UI for local demos

## Quick start

1. Clone the repo

```bash
git clone https://github.com/Anurag1/REAI.git
cd REAI
```

2. Create a Python environment and install dependencies

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
```

3. Create an environment file

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` and add your OpenAI API key:

```bash
OPENAI_API_KEY=your_key_here
```

4. Run the backend

```bash
uvicorn backend.app:app --host 0.0.0.0 --port 8000 --reload
```

5. Open the frontend

Open `frontend/index.html` in a browser, or serve the folder:

```bash
cd frontend
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Docker

```bash
docker compose up --build
```

This starts the app with the backend and static front-end.

## Architecture

- `backend/app.py` — FastAPI server and AI orchestration logic
- `frontend/index.html` — avatar UI and browser logic
- `frontend/app.js` — conversation flow and WebRTC signaling hooks
- `frontend/styles.css` — UI styling

## Notes

This is a prototype built for demo purposes. It is structured for real-time WebRTC usage, and the current browser voice output uses the platform speech engine to keep the demo lightweight and easy to run.

## License

MIT
