import { Link } from "react-router";

const cards = [
  { title: "Content Editor", desc: "Edit text, alignment, font size, colours and spacing.", to: "/admin/content", icon: "✎" },
  { title: "Design Editor", desc: "Change theme colours, radius, hero height, logo scale and typography.", to: "/admin/design", icon: "◈" },
  { title: "Live Preview", desc: "Preview the real website first before publishing updates.", to: "/admin/preview", icon: "◉" },
  { title: "News & Careers", desc: "Manage latest news, gallery and career posting content.", to: "/admin/news", icon: "📰" },
];

export default function Dashboard() {
  return (
    <div>
      <div className="rounded-[2.5rem] bg-gradient-to-br from-[#073e63] via-[#006b73] to-[#00a884] p-10 text-white shadow-2xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FDB913]">JETAMA complete CMS</p>
        <h1 className="mt-3 text-5xl font-black">Admin Dashboard</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">Manage your website content, design, live draft preview, news, gallery and careers before deployment testing.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link to="/admin/content" className="rounded-2xl bg-white px-6 py-3 font-black text-[#073e63]">Start Editing</Link><Link to="/admin/preview" className="rounded-2xl border border-white/25 px-6 py-3 font-black text-white">Open Preview</Link></div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => <Link key={card.title} to={card.to} className="group rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#005AAA] to-[#35B24A] text-2xl text-white shadow-lg">{card.icon}</div><h2 className="mt-5 text-xl font-black text-[#073e63]">{card.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{card.desc}</p><p className="mt-5 text-sm font-black text-[#00a884]">Open →</p></Link>)}
      </div>
      <div className="mt-8 rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6 text-emerald-800"><h2 className="font-black">How publishing works</h2><p className="mt-2 text-sm leading-6">Changes in Content Editor and Design Editor are saved as draft first and shown inside preview. Click Publish to save into Supabase/local CMS and update the public website in realtime.</p></div>
    </div>
  );
}
