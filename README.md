# Personal Website

A desktop-themed personal site built with React 19, Vite, and Tailwind CSS. Includes a portfolio, blog, and various widgets styled after a desktop environment.

---

## Design

Figma was used for layout and design planning before development.

**→ [View the Figma design](https://www.figma.com/design/q5ouRlX1hcWwjRGEm1uGcS/Personal-Website?node-id=0-1&t=undrbwN6lCzLIHwg-1)**

---

## Running locally

```bash
cd desktop
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project structure

| Folder     | Description                         |
| ---------- | ----------------------------------- |
| `desktop/` | Main site (React + Vite + Tailwind) |
| `legacy/`  | Previous Create React App version   |
| `docs/`    | Built output for GitHub Pages       |

---

## Deployment

From the `desktop` folder:

```bash
npm run deploy
```

Builds the project, copies output to `docs/`, and pushes to GitHub Pages.
