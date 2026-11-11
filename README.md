# Abigael Akossou — Medical CV, Monthly Progress + Study

A white-and-blue professional healthcare portfolio with a separately organised nursing study library. Built from the original MediSearch-D React/Vite application, with the original study utilities retained at `/study/*`.

## Latest redesign: separate pages, CV download and monthly progress

The homepage is a white-and-medical-blue portfolio overview, with animated clinical graphics, dimensional cards, an anatomy preview, and **links to real individual pages**. It does not use single-page anchor navigation.

| Public URL | Purpose |
|---|---|
| `/` | Welcome page, medical hero, preview cards, recent progress |
| `/about` | Biography, personal values and portrait |
| `/cv` | CV overview with a PDF download action |
| `/experience` | Work and clinical experience |
| `/education` | Education and training |
| `/certifications` | Verified credentials |
| `/skills` | Skills and capabilities |
| `/projects` | Research and projects |
| `/achievements` | Milestones |
| `/progress` | **Monthly activity journal**, sorted newest first with year/category filters |
| `/contact` | Contact details and professional links |
| `/study` | Separate educational tools hub |
| `/study/anatomy` | Interactive labelled anatomical diagram; select structures for functions and common conditions |
| `/admin/login` | Private owner-only dashboard; never linked in public navigation |

**CMS monthly progress:** Open `/admin/login` and select **Monthly progress journal**. Add an entry, choose a `YYYY-MM` month using the month picker, select a category, and provide a verified title/description. Optionally attach a photo or HTTPS reference. Save & publish. Entries automatically appear under their month/year on `/progress`, and the latest three appear on `/`.

**CV upload:** Open **Identity, contact & CV** in the same dashboard. Select **Upload new PDF CV** (2.7 MB maximum), then click **Save & publish**. Public Download CV controls on the homepage, CV page, and header activate and link to `/api/cv`, which streams a CMS-uploaded PDF with an attachment header. The controls are visibly disabled until a PDF is published. Externally hosted HTTPS PDF URLs also work but may be displayed rather than downloaded, depending on their host.

### Updating your existing Vercel/Git project — do not create a new repository

See **`COPY-INTO-EXISTING-GIT.md`** for a tested-safe *procedure* (the copy action has not been run on your machine). The ZIP contains the website's **project files at the archive root**, without `.git`, `.env`, `.env.local`, `node_modules`, or `dist`. Copy the **contents** into the root of your current Git project, overwrite matching source files, and **do not delete or replace your existing `.git` directory**. The existing Git remote and Vercel Git integration stay attached to that repository. You must still review the diff, install dependencies, run tests/build, and push the update to deploy it.

## What has changed

- **`/`** — public medical-style portfolio *overview* for **Abigael Akossou**. All CV areas are now separate pages, accessible through the navbar, section cards, and footer.
- **`/study`** — independent nursing study landing page; all original clinical, drug, quiz, mock exam and reference tools now use `/study/<slug>` URLs.
- **`/admin/login`** — private owner CMS. This route is deliberately absent from public navigation. Logging in requires server-side password verification; simply hiding a URL is **not** the security control.
- **Editor** — add/edit/delete/reorder dated monthly journal updates, experience, education, certifications, core values, skills, projects and achievements; edit all major portfolio copy, metadata, images, CV, contact details and the Study landing heading/description. It publishes to Supabase, without code changes.
- **AI** — all Groq calls use a server API (`/api/ai`) and a **server-only** `GROQ_API_KEY`; no browser-side API secret. Requests are limited by a database-backed per-IP limit and validated.
- **Security** — scrypt-hashed admin password, HMAC-signed 8-hour HTTP-only sessions, SameSite=Strict cookie, same-origin write checks, protected database/media APIs, safe React-text model output, restricted media types, privacy-minded defaults, basic security headers.
- **Progress** — while the owner is signed in, clinical search history, quiz results and mock exam scores are saved to the database and shown in `My study progress` in the CMS. Public visitors do not have user accounts or cross-device history.
- **Medical safeguards** — educational-use warnings, safer AI system prompt, fewer unvalidated clinical calculations. The content is **not** a validated medical decision-support system and does not have independently verified clinical citations.

> **Important:** Default professional copy is deliberately non-specific. Complete and verify Abigael's qualifications, employment history, certifications and contact details before publishing. The site does not assume a nursing licence or degree.

## Stack

- Vite 7, React 18, React Router 6, Tailwind 3
- Vercel static hosting + Node.js serverless API functions (`api/`)
- Supabase Postgres REST API and Supabase Storage (no client-side access keys)
- Groq API (optional; required for AI-based Study features)
- Node.js built-ins for authentication and cryptographic functions (no extra auth package)

## 1. Install dependencies

Node.js 20+ and npm are required. On macOS, **do not reuse the uploaded `node_modules` folder**; install new platform-specific dependencies:

```bash
unzip Abigael-Akossou-Medical-CV-Update.zip -d abigael-update
cd abigael-update
npm install
```

This distribution intentionally excludes `.env`, `.git`, `node_modules` and `dist`.

## 2. Create the Supabase project

1. Create a new Supabase project at https://supabase.com/dashboard.
2. Go to **SQL Editor** and execute the entire `scripts/schema.sql` file. This creates the content table, rate-limiter function, and owner progress tables; RLS is enabled and `anon`/`authenticated` roles cannot directly access them.
3. Go to **Storage** and create a bucket named `portfolio-assets`, set it **public for read access**, and **do not** grant unauthenticated write privileges. Only the server API uses the `service_role` key to upload images and PDFs.
4. Under **Project Settings / API**, copy your project's HTTPS URL and the **service_role secret** (not the anonymous `anon` key). Keep this value *server-side only*. Do not put it into any `VITE_` variable or browser code.

The public site can show its starter content without Supabase. **CMS publishing, owner login, AI rate limits and cloud progress require Supabase configured.**

## 3. Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values. **Do not commit `.env.local`.**

| Variable | Required | Description |
|---|---|---|
| `SITE_URL` | Recommended | Exact canonical origin (e.g. `https://your-domain.com`); local default is `http://localhost:5173` |
| `SUPABASE_URL` | Yes for CMS | `https://<project>.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes for CMS | Server-side Supabase service_role secret |
| `SUPABASE_STORAGE_BUCKET` | For uploads | `portfolio-assets` |
| `ADMIN_EMAIL` | Yes for CMS | Unique email used to sign into the editor |
| `ADMIN_PASSWORD_SCRYPT` | Yes for CMS | Generated with `npm run hash-password -- "long secret password"` |
| `SESSION_SECRET` | Yes for CMS | At least 32 unpredictable characters. Generate with `node -e "console.log(require('node:crypto').randomBytes(48).toString('hex'))"` |
| `ADMIN_SESSION_VERSION` | Optional | `1`; increment to invalidate existing sessions |
| `GROQ_API_KEY` | For AI | Your **server-only** Groq API key; rotate any key previously shipped in a frontend `.env` |
| `GROQ_MODEL` | Optional | Default: `openai/gpt-oss-20b`. Set to a model supported by your Groq account |

**Password setup:**

```bash
npm run hash-password -- 'AUniqueLongPasswordWithNumbersAndSymbols!'
```

Paste the generated entire `ADMIN_PASSWORD_SCRYPT=scrypt$...` value into `.env.local` and Vercel's server-side environment variables. Do not put the plain password in the repository. Use a password manager.

## 4. Run locally

```bash
npm run dev
```

Visit:

- `http://localhost:5173/` — portfolio
- `http://localhost:5173/study` — Study landing page
- `http://localhost:5173/study/search` — original clinical search
- `http://localhost:5173/admin/login` — admin CMS (private URL; do not link publicly)

`npm run dev` starts the Vite UI and a small built-in Node API server (port **8787**) so `/api/*` calls work without installing the Vercel CLI. Running `npm run dev:ui` alone only runs the frontend and will not enable CMS/AI endpoints unless a separate API server is running.

Once your CMS credentials and Supabase are configured, sign in, enter verified CV details, upload the portrait and PDF CV, and select **Save & publish**. Public content is loaded from the database.

## 5. Deploy to Vercel

1. Push the cleaned project to a **private** Git repository, or deploy with Vercel CLI.
2. Import it to Vercel. Use **Framework: Vite**, **Build command: `npm run build`**, **Output: `dist`**.
3. Add every environment variable from section 3 to **Vercel → Project Settings → Environment Variables**. Do not prefix secrets with `VITE_`. Use the **exact production domain** for `SITE_URL` including `https://`.
4. Deploy and test `/`, `/about`, `/cv`, `/progress`, `/study`, `/study/search`, `/api/content` and `/admin/login`.
5. Sign in through `/admin/login`. Add content and confirm publishing persists after browser refresh. Confirm logout invalidates the cookie. Test file upload and Study AI using valid Groq credentials.
6. Add a custom domain. After changing the domain, update `SITE_URL` and redeploy. HTTPS is mandatory for the secure admin cookie.

`vercel.json` preserves the `api/` serverless functions and rewrites the known SPA routes (`/about`, `/cv`, `/progress`, other CV pages, `/study*`, `/admin*`) to the React app. It also sets security headers and an HTTP Content Security Policy. Confirm that any new third-party service domains are permitted by the policy before integrating them.

## 6. Editing content without code

After signing in at `/admin/login`, use the CMS sidebar to edit:

- **Identity, contact & CV:** name, summary, biography, all major contact text, professional values strip, portrait image, uploaded CV, social links, SEO metadata, and whether Study/Contact are shown.
- **Monthly progress journal:** add month/year-dated milestones, a category, explanatory text, optional images and HTTPS links. Public entries group by month and filter by year/category.
- **Core values:** add, reorder or remove value statements.
- **Experience, Education, Certifications, Projects, Achievements, Skills:** create or reorder entries, including optional individual YYYY-MM dates, and save details.
- **Study landing page:** edit its header, title and introductory description.
- **My study progress:** view your saved search history and exam attempts from authenticated Study sessions.

Default education/experience sections remain invisible until you add real entries. File uploads accept JPEG/PNG/WebP **up to 2.5 MB** and PDF **up to 2.7 MB** because Vercel imposes serverless request-body limits. For larger files, host the asset externally and paste an HTTPS URL.

**Scope:** The existing Study tools remain code-driven. Their educational datasets, formulas, question banks, and individual tool interfaces are not yet editable in this CMS. Changing those requires a dedicated content schema and editorial safeguards. Public visitor accounts have not been added.

## 7. Verification and tests

```bash
npm test
npm run build
```

The included tests cover hashed-password verification, cookie signatures, origin checks, CMS validation, no leaked Groq client key, and safe AI-result rendering. The PHP-free API server can also be tested locally with `curl`.

**Environment limitation during development:** Source parsing and server-unit tests were run successfully, as were direct HTTP smoke tests for the local API. The production build could not be completed in this offline environment: the available dependency set lacks the Linux Rollup native binary (`@rollup/rollup-linux-x64-gnu`), and the package registry is unreachable. JavaScript/JSX source parsing, import checks and Node tests passed. A fresh install on the deployment machine is still required. Run `npm install` on the actual deployment machine to restore the correct native packages and run `npm run build` before production.

## Security and operations notes

- **Rotate the old Groq key** if it was ever included in a public or shared build (the original ZIP contained `.env`). Removing the key from source does not revoke it.
- No privileged Supabase key, password hash or session secret should ever be placed in `src/`, `public/` or a `VITE_` variable.
- Rotate `SESSION_SECRET` / increase `ADMIN_SESSION_VERSION` after a suspected session leak. To change the admin password, generate a new hash, change the environment variable and redeploy.
- Secure cookies, same-origin checks and rate limits protect the CMS, but independent penetration testing is still advisable before launching.
- The medical AI layer does not verify citations, clinical currency, dosage formularies, patient suitability or reference text. It is an educational aid only. Do not input identifiable patient data or use output for direct treatment decisions.
- Keep Supabase, Vercel and the developer dependencies updated. Consider MFA via a managed identity provider if additional editors are later added.
- For production traffic, run automated endpoint tests and a human mobile/accessibility review before launch.
