# Abigael Akossou — Mobile CMS & Private Diary Update

This is a **small update for the existing MediSearch-D-main project**, not a replacement application.

## What changed

- Mobile admin pages use **normal page scrolling**, not the previous fixed-height nested scroll container that often traps scrolling/keyboard focus on phones.
- The CMS section selector stays accessible at the top on phones. Public-content sections have a bottom Save & publish button with iPhone safe-area spacing.
- The diary is a separate **Private diary** section inside the authenticated admin CMS. It supports date, title, private text (up to 24,000 characters), optional mood, up to 8 private photos, search, month filtering, older-entry loading, editing, and deletion.
- Diary entries are stored in a separate Supabase table and pictures are stored in a new **private** bucket. They are never included in public CV/Study content or returned by public APIs.
- Photos are delivered through an authenticated no-store server endpoint rather than a public or long-lived signed URL.
- There is no global Save & publish button on the diary screen; **Save private entry** only saves that entry and never publishes it publicly.

## 1. Install the patch locally (do not touch `.git` or `.env.local`)

On your Mac, stop `npm run dev` using Control+C. Open Terminal in your existing `MediSearch-D-main` folder and run:

```bash
unzip -o "$HOME/Downloads/MediSearch-Private-Diary-Mobile-CMS-Patch.zip" -d .
```

This adds or replaces **only** these files:

- `src/portfolio/AdminDashboard.jsx`, `DiaryEditor.jsx`, `diary.css`, `admin-mobile.css`
- `src/main.jsx`
- `api/admin/diary.js`, `api/admin/diary/media.js`
- `lib/diary.js`
- `scripts/dev-api.mjs`, `scripts/diary-migration.sql`
- `tests/diary.test.mjs`
- This instruction file

No existing credentials or Supabase content are modified by copying the patch.

## 2. Run the NEW Supabase migration before testing the diary

Use your **existing** Supabase project (`abigael-medical-portfolio`), not a new database.

1. In your Mac Terminal inside `MediSearch-D-main`, run:
   ```bash
   cat scripts/diary-migration.sql | pbcopy
   ```
2. Open https://supabase.com/dashboard → `abigael-medical-portfolio` → **SQL Editor** → **New Query**.
3. Press **Command+V** and click **Run**.
4. `Success. No rows returned` is normal.
5. In Supabase **Storage**, verify a new bucket called **private-diary** exists and its status is **Private**. Leave the existing **portfolio-assets** bucket alone. Do **not** make `private-diary` public.

The migration is idempotent: it creates `private_diary_entries` if absent, turns on row-level security, revokes public/anon/authenticated table access, and creates a private bucket for diary photos. No existing CV or Study database rows are deleted.

**No additional environment variables are required.** The new feature uses your existing server-side Supabase service-role credentials and admin session.

## 3. Test locally

```bash
npm test
npm run build
npm run dev
```

Open `http://127.0.0.1:5173/admin` (or `http://localhost:5173/admin` if that's the site address in your `SITE_URL`). Sign in using the existing admin credentials, choose **Private diary**, and test:

1. Create a short entry with today's date and a photo, then tap **Save private entry**.
2. Refresh and confirm the entry and its photo remain.
3. Edit the entry and save again; confirm the edit persists.
4. Sign out and verify the entry and photo **cannot** be read from the admin dashboard without signing in.
5. On your phone, open the editor, use the keyboard, scroll through long forms, switch sections, and save a public About-page change. Check that no buttons are trapped behind the mobile browser toolbar.

The existing public **Monthly progress journal** is separate and unchanged.

## 4. Deploy to the SAME GitHub/Vercel project

After local tests pass:

```bash
git add src/main.jsx src/portfolio/AdminDashboard.jsx src/portfolio/DiaryEditor.jsx src/portfolio/diary.css src/portfolio/admin-mobile.css api/admin/diary.js api/admin/diary/media.js lib/diary.js scripts/dev-api.mjs scripts/diary-migration.sql tests/diary.test.mjs PRIVATE-DIARY-MOBILE-INSTALL.md
git status --short
git commit -m "Fix mobile CMS and add private diary"
git push origin main
```

Your existing Vercel project deploys from that `main` branch. The current `SITE_URL`, Groq key, model selection, Supabase URL, public media bucket and admin password do not change.

## Privacy and limitations

- **Website privacy:** Users without the CMS admin session are denied access to all diary APIs; the photos are never served from the public Storage URL. Only the configured admin login grants access inside the website. If you share that login, those people can also read the diary.
- **Infrastructure access:** Anyone with privileged access to the Supabase project or Vercel server secrets may still access underlying records or files. This is **not end-to-end encryption**; use separate accounts and keep service-role keys private.
- **Deletion:** Deleting a diary entry or removing a stored photo attempts to remove its file from private Storage through the Storage API. If cleanup fails (for example, a temporary storage outage), an orphan file can remain in the private bucket and should be removed from Supabase Storage manually.
- **Size limit:** Each photo is capped at 2.5 MB; maximum 8 photos per entry. Images upload through the server, and the owner has to be signed in.
- **Testing:** Security and syntax tests passed in the source workspace. A full Vite production build could not be performed here because the required Linux-specific Rollup binary is absent. Run the build on your Mac before pushing.

**Never paste `.env.local`, database keys, admin password hashes, session secrets, or private diary contents into chat or GitHub.**
