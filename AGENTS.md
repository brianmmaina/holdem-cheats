# AGENTS.md — Constraints for this repository

These rules apply to any AI agent (or human) working on this project. Follow them unless the user explicitly overrides one in the moment.

## Goal

"Hold'em Cheats": a funny, beginner-friendly Texas Hold'em strategy guide for college students playing with friends. Playful cartoon-supervillain humor, cheat-sheet content, dark poker-table styling (green and gold).

## Hard rules

1. **Runtime files:** `index.html`, `style.css`, `script.js`. Supporting docs: `README.md`, `AGENTS.md`, `REFLECTION.md`, `.gitignore`. Do not add other runtime files without asking.
2. **No dependencies:** no npm/yarn/pip installs, no packages, no build step, no frameworks, no bundlers.
3. **No CDN or remote assets:** no external fonts, icons, images, styles, or scripts. Use system fonts, Unicode characters, CSS, and inline SVG only. The page must work fully offline.
4. **Localhost only:** if serving, use a local static server bound to `127.0.0.1` (see README). Never expose the site publicly — no tunnels, no hosts, no deploy targets.
5. **No git automation:** do not commit, push, merge, tag, or deploy unless the user explicitly asks for that exact action in the current turn. Files are meant to be reviewed before any commit.
6. **Quiz accessibility:** use native `<input type="radio">` with `<label>`s and a real `<button>` submit. Do not hand-roll ARIA widget keyboard handling (no custom `role="radiogroup"`/`tabindex` roving logic). The quiz must work with Tab, arrow keys, and Enter/Space.
7. **Content honesty:** never invent observations, test results, verification, or tool output. Report only checks actually run. `REFLECTION.md` blanks stay blank until filled with real, observed facts.
8. **Content rules:**
   - No hand-frequency statistics (no "you'll see this once every N hands" claims).
   - Position and betting guidance must say decisions are context-dependent (position, stack sizes, bet size, opponent tendencies, game format).
   - Each quiz scenario must state its assumptions and explain the best answer *under those stated assumptions* — poker is never presented as absolute.
   - Beginners are the audience: friendly home-game framing, fun stakes, no real-money advice.
9. **Responsive and accessible:** readable on phones and desktops; visible focus states; semantic HTML; images/diagrams need text alternatives.

## Definition of done (manual checks by the user)

- Desktop and narrow-phone rendering reviewed.
- Quiz completed keyboard-only (Tab, arrow keys, Enter/Space).
- No console errors.
- Server started/stopped per README on `127.0.0.1` only.
