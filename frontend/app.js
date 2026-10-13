:root {
  --bg: #07111f;
  --bg-soft: #0d1d2e;
  --panel: rgba(15, 23, 42, 0.85);
  --panel-strong: rgba(17, 24, 39, 0.9);
  --line: rgba(148, 163, 184, 0.18);
  --text: #e5eefb;
  --muted: #bfd0ea;
  --ava: #8b5cf6;
  --nova: #06b6d4;
  --glow: rgba(148, 163, 184, 0.3);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  background: radial-gradient(circle at top, #0c1729 0%, var(--bg) 55%);
  color: var(--text);
  font-family: Inter, "Segoe UI", sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

button, textarea {
  font: inherit;
}

.app-shell {
  width: min(1100px, 100%);
  background: rgba(10, 14, 20, 0.7);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  padding: 24px;
  backdrop-filter: blur(12px);
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 16px;
}

.eyebrow {
  margin: 0 0 6px 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  color: var(--muted);
}

h1 {
  margin: 0;
  font-size: clamp(2.1rem, 3vw, 3.3rem);
}

button {
  border: 0;
  border-radius: 12px;
  padding: 12px 18px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

button.secondary {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
}

button.ghost {
  background: rgba(148, 163, 184, 0.12);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.bot-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 20px;
}

.bot-card {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px;
  min-height: 360px;
  transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.bot-card.speaking {
  border-color: rgba(255,255,255,0.35);
  box-shadow: 0 0 0 1px rgba(255,255,255,0.12), 0 20px 60px rgba(96, 165, 250, 0.18);
  transform: translateY(-2px);
}

.avatar-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}

.avatar {
  width: 126px;
  height: 126px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04));
  border: 3px solid rgba(255,255,255,0.22);
  box-shadow: inset 0 0 20px rgba(255,255,255,0.06), 0 12px 30px rgba(0,0,0,0.2);
}

.ava .avatar {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.nova .avatar {
  background: linear-gradient(135deg, #06b6d4, #0ea5e9);
}

.name-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.signal {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.75;
  color: var(--muted);
}

.persona {
  margin: 0 0 18px 0;
  color: var(--muted);
}

.speech-box {
  min-height: 120px;
  border-radius: 18px;
  padding: 16px;
  background: rgba(2, 6, 23, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.14);
  line-height: 1.6;
  color: var(--text);
}

.controls-panel {
  margin-top: 24px;
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.7);
  border-radius: 20px;
  padding: 18px;
}

textarea {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(2, 6, 23, 0.7);
  color: var(--text);
  resize: vertical;
  padding: 14px 16px;
}

.action-row {
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.status-panel {
  margin-top: 18px;
  border-radius: 12px;
  padding: 12px 14px;
  background: rgba(2, 6, 23, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.14);
  color: var(--muted);
}

#status-text {
  margin: 0;
}

@media (max-width: 760px) {
  body {
    padding: 16px;
  }

  .bot-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
