# JETAMA Admin CMS Setup
This project now includes an admin CMS under `/admin/login`.

Admin can manage:
- News & Events
- Gallery photo/video URLs
- Careers vacancies and internship posts

The public website pages `/news` and `/careers` now read Supabase data when configured. If Supabase is not configured, the site still works using existing fallback content.

## Steps to connect Supabase

1. Create a Supabase project.
2. Open Supabase SQL Editor.
3. Run the SQL inside `supabase_schema.sql`.
4. Go to Project Settings > API.
5. Copy Project URL and anon public key.
6. Create `.env` based on `.env.example`:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

7. Install dependencies:

```bash
npm install
```

8. Run locally:

```bash
npm run dev
```

9. Open:

```txt
/admin/login
```

## Important
Before deploying, create an admin user inside Supabase:
Authentication > Users > Add user.

Use that email and password to login to `/admin/login`.
