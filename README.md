# A tiny surprise for Favour ♡

A small, responsive, static website made with HTML, CSS, and vanilla JavaScript. No backend, database, tracking, or analytics. Choices made on the final screen are not transmitted or stored.

## Preview locally

Open `index.html` in a browser. For a local server, run this from the project directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to Vercel

1. Create a new GitHub repository and upload the files in this folder (`index.html`, `style.css`, `script.js`, and optionally this README).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Use the default settings for a static site. No build command is needed; the project root is the folder containing `index.html`.
4. Deploy. Vercel will give you a URL to share.

You can also deploy with the Vercel CLI from this directory:

```bash
npx vercel
```

## Before sharing

Read the message and jokes out loud and adjust them so they sound like you. The page is deliberately gentle and gives Favour room to answer honestly. The final choices only display a response on her device; they do not notify you. If she selects a choice, she'll need to tell you or send you the suggested reply herself.

The fonts are loaded from Google Fonts when online; system fallbacks are included.
