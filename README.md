# Basic Web App

This is a minimal static site starter created in the workspace.

Files added:
- `index.html` — main page (loads `styles.css` and `script.js`)
- `styles.css` — small theme
- `script.js` — demo client-side script that tries to fetch `/api/hello` (will fail on static-only server)

How to run (PowerShell):

```powershell
npm install
npm start
# open http://localhost:8080
```

Notes:
- The project already lists `express` as a dependency in `package.json` but for the static site we use `http-server` via `npx` in the `start` script.
- If you want a small Node server instead (to serve `/api/hello`), tell me and I will scaffold it.
