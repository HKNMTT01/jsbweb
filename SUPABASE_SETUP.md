# JETAMA Website Admin + Supabase Setup

## Where to open admin page

After this update, the public website navigation has an **Admin** button.

You can also open it directly:

```txt
/admin/login
```

Example local URL:

```txt
http://localhost:5173/admin/login
```

## Supabase setup

1. Go to Supabase and create a new project.
2. Open **SQL Editor**.
3. Copy everything from `supabase-schema.sql`.
4. Paste and run it. This creates:
   - `news`
   - `gallery`
   - `careers`
5. Go to **Project Settings > API**.
6. Copy:
   - Project URL
   - anon public key
7. Copy `.env.example` and rename the copy to `.env.local`.
8. Paste your keys:

```txt
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_public_key
```

9. Restart the website:

```bash
npm run dev
```

## Create admin login account

1. In Supabase, open **Authentication > Users**.
2. Click **Add user**.
3. Add your admin email and password.
4. Use the same email/password at `/admin/login`.

## What files were updated

- `src/app/components/Navigation.tsx` — added visible Admin button.
- `src/app/pages/admin/Login.tsx` — added setup helper and clearer Supabase error.
- `src/app/pages/admin/AdminLayout.tsx` — added session check, active menu, and View Website button.
- `src/app/pages/admin/Dashboard.tsx` — added admin location helper.
- `src/lib/supabase.ts` — added Supabase configured check.
- `.env.example` — environment variable template.
- `supabase-schema.sql` — database tables and policies.
- `SUPABASE_SETUP.md` — step-by-step guide.
