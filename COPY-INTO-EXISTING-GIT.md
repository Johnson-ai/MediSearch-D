# Update the existing MediSearch website without losing Git or Vercel

**Do not create a new Git repository or Vercel project.** You are upgrading the existing one. The downloadable update ZIP contains **project files at its root**, not a replacement `.git` directory.

## Safest workflow on your Mac

1. Open Terminal inside your **existing deployed project's directory** (the folder that already contains `package.json` and `.git`). Run `git status` and make sure you understand any existing edits. Commit or back up unrelated work before proceeding.
2. Optionally create a separate branch before copying the update: `git switch -c feature/abigael-medical-portfolio`.
3. Unzip `Abigael-Akossou-Medical-CV-Update.zip` into a **separate temporary folder**, e.g. `~/Downloads/abigael-update`.
4. Open that temporary folder and copy **all of its contents**, not the containing folder, into your existing project's root. In Finder, choose **Replace** when asked about duplicate *source* files. The ZIP has no `.git`, `.env`, or `.env.local` to overwrite those existing local folders/files.
5. **Do not copy** your old project's `node_modules` folder. In your existing project root run:

   ```bash
   npm install
   npm test
   npm run build
   git status
   git diff --stat
   ```

6. Check there are **no secrets** in the Git change list. In particular, never commit `.env`, `.env.local`, the Supabase service-role key, the Groq key, password hashes, or session secrets. The updated `.gitignore` excludes local environment files. If an environment file was already tracked, the `.gitignore` file does **not** untrack it automatically.
7. Test locally with `npm run dev`, opening `/`, `/about`, `/cv`, `/progress`, `/study/anatomy`, and `/admin/login`. Test the owner login, PDF upload, publishing and the download action after you configure Supabase and admin credentials.
8. Commit the reviewed changes and push to your existing remote. If using a feature branch, merge it to your Vercel production branch after review. Your **existing Vercel project** will use the same repository and can deploy the updated code after the push.

## Alternative: terminal copy (preserves `.git`)

From inside your **existing deployed project root**, after unzipping in a separate directory:

```bash
rsync -av \
  --exclude='.git' \
  --exclude='.env' \
  --exclude='.env.local' \
  --exclude='node_modules' \
  --exclude='dist' \
  "$HOME/Downloads/abigael-update/" ./
```

The source path must end in `/` so you copy its **contents**. The command deliberately has no `--delete` flag. It will overwrite files with matching names while leaving your original `.git`, local environment and other unlisted files alone.

## Existing Vercel project settings

- Keep your original Vercel project and domain. Configure **Framework: Vite**, **Build command: `npm run build`**, **Output directory: `dist`** if they are not already set that way.
- Copy the **server-only** variables from `.env.example` into Vercel **Project Settings → Environment Variables**. Set `SITE_URL` to the exact production origin. Do not give any server secret a `VITE_` prefix.
- Configure Supabase using `scripts/schema.sql` and create a publicly readable Storage bucket (default `portfolio-assets`). The CMS and CV uploads require it.
- The existing content table stores JSON, so **no schema migration is needed for the new monthly journal**. Its `updates` field is added when Abigael first publishes a change. Existing experience/education entries without `month` remain readable.
- `vercel.json` includes rewrites for all new public pages, so reloading `/progress` or `/cv` should not 404.
- The owner editor remains at `/admin/login`. There is no public admin navigation item. Hiding the route is not the security control; server-side sessions protect writes.
- Run a final build and smoke test before deploying to production. If the original Groq key was exposed by the previous site, rotate it.

## CV upload and monthly journal

Sign in at `https://YOUR-DOMAIN/admin/login`:

1. Select **Identity, contact & CV → Upload new PDF CV** (PDF max 2.7 MB). Click **Save & publish**. On the public site, select **Download CV**; the `/api/cv` endpoint serves the PDF as an attachment.
2. Select **Monthly progress journal → + Add monthly update**. Choose the month, category, title and description; upload an optional image. Click **Save & publish**.
3. On `/progress`, the journal is ordered newest-first and separated by full month/year. Visitors can filter by year and category. The homepage shows the latest three updates.

If the old website is live, these new features will not be operational on that domain until your updated code has been pushed/deployed and the backend variables have been set.
