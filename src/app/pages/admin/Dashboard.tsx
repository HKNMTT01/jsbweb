import { Link } from "react-router";

const cards = [
  { title: "Content Editor", desc: "Edit actual public website wording and section text.", to: "/admin/content", icon: "✎" },
  { title: "Design Editor", desc: "Adjust colors, radius, typography, spacing and motion.", to: "/admin/design", icon: "◈" },
  { title: "Live Preview", desc: "Open the real website inside admin before publishing.", to: "/admin/preview", icon: "◉" },
  { title: "News & Events", desc: "Add latest updates, event posts and press releases.", to: "/admin/news", icon: "📰" },
  { title: "Gallery", desc: "Manage event images, videos and corporate gallery items.", to: "/admin/gallery", icon: "▧" },
  { title: "Careers", desc: "Create jobs, internships and application email links.", to: "/admin/careers", icon: "↗" },
];

export default function Dashboard() {
  return (
    <div>
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#052b4f] via-[#005AAA] to-[#35B24A] p-10 text-white shadow-2xl">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-[#F5A623]/20 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F5A623]">JETAMA CMS Control Center</p>
          <h1 className="mt-3 text-5xl font-black">Admin Dashboard</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/85">
            Manage the public website, update page content, publish gallery events, create career posts and preview everything before it goes live.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admin/content" className="rounded-2xl bg-white px-6 py-3 font-black text-[#073e63]">Start Editing</Link>
            <Link to="/admin/preview" className="rounded-2xl border border-white/25 px-6 py-3 font-black text-white">Open Preview</Link>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.title} to={card.to} className="group rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#005AAA] to-[#35B24A] text-2xl text-white shadow-lg">{card.icon}</div>
            <h2 className="mt-5 text-xl font-black text-[#073e63]">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{card.desc}</p>
            <p className="mt-5 text-sm font-black text-[#00a884]">Open →</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6 text-emerald-800">
          <h2 className="font-black">1. Edit</h2>
          <p className="mt-2 text-sm leading-6">Use admin forms to create or update content.</p>
        </div>
        <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-6 text-blue-800">
          <h2 className="font-black">2. Preview</h2>
          <p className="mt-2 text-sm leading-6">Check actual pages in desktop, tablet and mobile view.</p>
        </div>
        <div className="rounded-[2rem] border border-amber-100 bg-amber-50 p-6 text-amber-800">
          <h2 className="font-black">3. Publish</h2>
          <p className="mt-2 text-sm leading-6">Published data updates Supabase or local CMS fallback.</p>
        </div>
      </div>
    </div>
  );
}
