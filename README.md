# KS TechX — Main Website (kstechx.com)

A Next.js 14 hub site for **kstechx.com**. It acts as the front door that links
out to every KS TechX product on its own subdomain:

- `mdc.kstechx.com` — Mera Digi Card
- `localkart.kstechx.com` — LocalKart
- `partners.kstechx.com` — Mera Partners

---

## Run it locally (optional, to preview first)

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll see the site. Edit `app/page.js` to change
the products/content and `app/globals.css` for the design.

---

## Deploy to Hostinger — step by step

### STEP 1 — Put this code on GitHub
1. Create a new repo on GitHub named `kstechx-web` (keep it Public or Private).
2. In this folder run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — kstechx.com main site"
   git branch -M main
   git remote add origin https://github.com/chintaravikumar94/kstechx-web.git
   git push -u origin main
   ```

### STEP 2 — Deploy on Hostinger
1. hpanel.hostinger.com → **Websites** → kstechx.com → **Manage**.
2. Open the **Node.js app / Git deploy** screen (Select Git repository to import).
3. Find **kstechx-web** → click **Deploy**.

### STEP 3 — Deploy settings
- **Branch:** `main`
- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Start command:** `npm start`
- **Node version:** 18 or higher
- **Target domain:** **kstechx.com** (the main domain, not a subdomain)

### STEP 4 — Environment variables
If you add any secrets later, put them in Hostinger's **Environment variables**
panel (see `.env.example` for the format). Never commit real secrets to GitHub.

### STEP 5 — Enable auto-deploy
In the app settings, turn on **Auto-deployment / Webhook**. After that, every
`git push` to `main` updates kstechx.com automatically.

### STEP 6 — Verify
Open **https://kstechx.com** — you should see the site with a 🔒 (free SSL).

---

## Add a new product later
1. Duplicate a card object in the `projects` array inside `app/page.js`.
2. Point its `url` to the new subdomain, e.g. `https://newapp.kstechx.com`.
3. `git push` — the main site updates itself.
