# Hold'em Cheats

A funny, beginner-friendly Texas Hold'em cheat-sheet site for college students learning to play with friends. Cartoon-supervillain humor, dark poker-table styling with green and gold accents, and a six-question **"Would You Fold?"** quiz.

Everything is static: three files, no dependencies, no CDN, no build step, works fully offline.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All page content: introduction, the ten hand rankings, position guide, eight common mistakes, and the quiz shell. |
| `style.css` | Dark felt-table theme, green/gold palette, responsive layout (phones + desktops), focus states. |
| `script.js` | Quiz data (6 scenarios with stated assumptions) and logic: native radios, submit, explanations, scoring, results, restart. |
| `AGENTS.md` | Constraints for anyone/any agent working in this repo. |
| `REFLECTION.md` | Filled reflection: prompts, observed tool actions, the T→10 fix with check output, quiz explanation, plus deliberately blank/unchecked items. |
| `.gitignore` | Ignores `.env`, `node_modules/`, `.DS_Store`. |

## Prerequisites

- A modern web browser (Safari, Chrome, Firefox, or Edge — current versions).
- **Python 3**, used only as a local static file server. macOS ships with it. Check with:

  ```bash
  python3 --version
  ```

Nothing else to install. No Node, no npm, no packages.

## Get the code

```bash
git clone https://github.com/brianmmaina/holdem-cheats.git
cd holdem-cheats
git checkout assignment-5
```

(SSH alternative: `git clone git@github.com:brianmmaina/holdem-cheats.git`. Already cloned? Just `cd` in and `git checkout assignment-5`.)

## Start the server (localhost only)

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open **http://127.0.0.1:8765/** in your browser.

`--bind 127.0.0.1` keeps the server reachable only from your own machine — it is not exposed to the network.

## Stop the server

1. Go to the terminal running it and press **Ctrl+C**.
2. Confirm it stopped:

   ```bash
   curl -s --max-time 2 http://127.0.0.1:8765/
   ```

   Expected: a connection-refused error (that means it's down).

If a server is ever stuck and Ctrl+C doesn't work:

```bash
lsof -ti tcp:8765 | xargs kill
```

Change `8765` if you used a different port.

## Manual test checklist

- [ ] Renders sensibly on a desktop window and a narrow (~375px) phone-width window.
- [ ] Quiz works keyboard-only: Tab reaches the options, arrow keys move between radios, Enter/Space submits.
- [ ] Explanations appear after each answer; score and restart work at the end.
- [ ] No errors in the browser console.

## Project rules

See `AGENTS.md`. In short: no dependencies, no CDN, no build, serve on `127.0.0.1` only, and no commits/pushes/deploys unless explicitly requested.
