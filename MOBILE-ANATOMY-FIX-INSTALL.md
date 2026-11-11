# MediSearch homepage and mobile anatomy preview update

This small patch is designed to be extracted directly into the existing `MediSearch-D-main` Git repository. It does **not** contain `.git`, environment files, admin settings, Supabase migrations, private diary contents, or installed dependencies.

## Changes

- Removes the generic "HEALTHCARE | LEARNING | COMPASSION | PROFESSIONAL GROWTH" homepage strip entirely, including for existing CMS records where the strip is already saved.
- Removes the now-unused strip setting from the admin content editor while preserving its historical database field for compatibility.
- Replaces generic decorative hero labels with section-based labels (Profile, CV, Study).
- Rebuilds the homepage anatomy teaser for phones with a zoomed illustration, larger selectable hotspots, seven labelled touch-friendly buttons, a selected-organ panel immediately below the controls, function and condition details, and a full-atlas link.
- Maintains the existing desktop anatomy appearance and the full Study atlas; only the optional hotspot size and viewport support are added to the shared SVG component.

## Apply on Mac

1. Stop `npm run dev` with **Control+C**.
2. In Terminal, enter your existing project folder (e.g. `cd "$HOME/Desktop/MediSearch-D-main"`).
3. Download and unzip the `MediSearch-Homepage-Mobile-Anatomy-Fix.zip` file. In the project folder, run:

   ```bash
   unzip -o "$HOME/Downloads/MediSearch-Homepage-Mobile-Anatomy-Fix.zip" -d .
   ```

4. Test:

   ```bash
   npm test
   npm run build
   npm run dev
   ```

5. Open `http://127.0.0.1:5173` and use Chrome responsive mode or Safari on an actual phone. Under the anatomy preview, select **Brain**, **Heart**, **Liver** etc. and verify the detail panel updates, then open the full anatomy atlas.

## Deploy to existing Vercel project

If tests and the build pass, stop `npm run dev` and run:

```bash
git status --short
git add src/portfolio/PortfolioHome.jsx src/portfolio/AdminDashboard.jsx src/data/portfolioDefault.js src/anatomy/AnatomyTeaser.jsx src/anatomy/AnatomyIllustration.jsx src/responsive.css tests/homepage-anatomy-preview.test.mjs MOBILE-ANATOMY-FIX-INSTALL.md
git diff --cached --name-only
git commit -m "Remove homepage slogans and fix mobile anatomy preview"
git push origin main
```

This updates your current Vercel deployment via GitHub. Your existing Supabase database, Groq API key, private diary, `.env.local`, and `.git` remain untouched.

## Verification performed in patch workspace

- 38 automated tests passed.
- Modified JavaScript/JSX parsed with the Babel parser; CSS parsed with PostCSS.
- A full Vite build was **not** verified in this Linux workspace because the platform-specific Rollup package was missing. Run `npm run build` on your Mac before pushing.
- Interaction needs a final test in a real mobile browser. If tapping a point still misbehaves on a particular device, report the phone model, browser, and what happens on tap.
