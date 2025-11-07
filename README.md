# AI Model Chat — Demo Website

This is a minimal React (Vite) single-page app to demo an interactive AI chat UI.

What you get
- A simple chat UI (mock AI replies by default).
- Option to provide a server URL to call a real model: the app will POST { message } and expects a JSON { reply }

Run locally

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

Connecting to a real model
- For security, don't call hosted model provider APIs directly from the browser with a secret key. Instead make a small backend endpoint that accepts POST { message } and returns { reply }.
- Enter that backend URL in the "Server URL" input and uncheck "Use mock".

Example server (Node/Express) endpoint shape:

```js
// POST /api/chat
// body { message: 'hello' }
// returns { reply: '...' }
```

Assumptions and notes
- This repo is intentionally front-end only so you can host static files easily.
- The mock replies simply reverse the user message to demonstrate interactivity.

Next steps (optional)
- Add server example to proxy to OpenAI or your model.
- Add streaming responses, typing indicator, and message persistence.
