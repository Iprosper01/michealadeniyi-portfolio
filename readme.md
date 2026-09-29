# Micheal Adeniyi — Portfolio Site

A single-page portfolio: plain HTML, CSS, and a small bit of JavaScript for the mobile menu. No build step, no framework, no dependencies — just files. Vercel serves this kind of static site with zero configuration.

## Files

- `index.html` — all page content and structure
- `styles.css` — all styling
- `script.js` — mobile nav toggle
- `assets/headshot.jpg` — your photo
- `assets/favicon.svg` — small "MA" browser-tab icon

## How to host this for free on Vercel

There are two ways to do this. **Option A** is faster if you're comfortable typing a few commands. **Option B** needs no command line at all, but requires putting the code on GitHub first.

---

### Option A — Vercel CLI (fastest)

**1. Install Node.js**, if you don't already have it: nodejs.org, download the LTS version, run the installer.

**2. Open a terminal** in this `portfolio` folder (on Mac/Linux: right-click the folder → "Open Terminal here," or `cd` into it; on Windows: Shift+right-click → "Open PowerShell window here").

**3. Run:**
```
npx vercel
```
This downloads Vercel's CLI on the fly (no separate install needed) and starts the deploy wizard.

**4. Follow the prompts:**
- It will ask you to log in — choose "Continue with GitHub" or "Continue with Email," whichever you prefer. It opens your browser to confirm.
- "Set up and deploy?" → **Yes**
- "Which scope?" → pick your account
- "Link to existing project?" → **No**
- "What's your project's name?" → press Enter to accept the default, or type your own
- "In which directory is your code located?" → press Enter (it's already the current folder)
- It will detect there's no build step needed and deploy as-is.

**5. Done.** Vercel prints a live URL right in the terminal, something like `https://your-project-name.vercel.app`. That's your site, live immediately.

**6. Future updates:** edit any file, then run `npx vercel --prod` again from the same folder to push the update live.

---

### Option B — GitHub + Vercel dashboard (auto-redeploys on every change, no CLI)

**1. Push this folder to a GitHub repository.** (If you'd like the exact steps for that part, just ask — it's the same upload process regardless of where you host afterward: create a repo on github.com, use "Add file → Upload files," drag in `index.html`, `styles.css`, `script.js`, and the `assets` folder, then commit.)

**2. Go to vercel.com and sign up** (the "Continue with GitHub" option is easiest — it links your accounts in one step).

**3. Click "Add New... → Project."**

**4. Import your GitHub repository** from the list Vercel shows you.

**5. Leave all settings as default** — Vercel will detect this is a static site with no build command needed. Click **Deploy**.

**6. Done.** Vercel gives you a live URL immediately, and from now on, every time you commit a change to that GitHub repo, Vercel automatically redeploys the update within seconds. This is the more convenient long-term setup if you'll be editing often.

---

### Custom domain (optional, later)
If you buy a domain (e.g., michealadeniyi.com), go to your project on vercel.com → **Settings → Domains**, add it, and Vercel shows you the DNS records to add at your registrar.

## Editing content yourself

Everything text-related lives directly in `index.html` as plain readable text between HTML tags. Look for the section comments like `<!-- PROJECTS -->` to find where to edit.

### Adding or editing a project card

Each project is one `<article class="card">` block inside `<div class="cards">`. Copy an existing block and change:

- the status pill: `<span class="badge">Prototype</span>` (add `badge--live` for green, `badge--award` for amber)
- `card-title` and `card-tagline`
- the short paragraph, and the tags in the `<ul class="tags">` list
- the footer: organisation name, and a `card-link` if there is a public link (delete that line if not)
- the optional `<details class="story">` block for a longer personal story (delete it if not needed)

Add `card--featured` to the article's class to make a card span the full width.
