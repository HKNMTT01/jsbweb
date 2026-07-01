import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { isSupabaseConfigured, supabase } from "../../../lib/supabase";

const menu = [
  { label: "Dashboard", path: "/MiraJSB80/dashboard", icon: "✦" },
  { label: "Live Preview", path: "/MiraJSB80/preview", icon: "◉" },
  { label: "Page Content", path: "/MiraJSB80/content", icon: "✎" },
  { label: "Design", path: "/MiraJSB80/design", icon: "◈" },
  { label: "News & Events", path: "/MiraJSB80/news", icon: "📰" },
  { label: "Gallery", path: "/MiraJSB80/gallery", icon: "▧" },
  { label: "Careers", path: "/MiraJSB80/careers", icon: "↗" },
  { label: "Applications", path: "/MiraJSB80/applications", icon: "☑" },
  { label: "Inquiries", path: "/MiraJSB80/inquiries", icon: "✉" },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [realtime, setRealtime] = useState("Checking...");

  useEffect(() => {
    async function checkAdminSession() {
      if (!isSupabaseConfigured) {
        setRealtime("Local mode");
        setChecking(false);
        return;
      }
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/MiraJSB80/login");
        return;
      }
      setChecking(false);
    }
    checkAdminSession();
  }, [navigate]);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    const channel = supabase.channel("jetama-admin-live").subscribe((status) => {
      setRealtime(status === "SUBSCRIBED" ? "Realtime connected" : "Connecting...");
    });
    return () => { supabase.removeChannel(channel); };
  }, []);

  async function logout() {
    if (isSupabaseConfigured) await supabase.auth.signOut();
    navigate("/MiraJSB80/login");
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#eef7f8] text-[#073e63]">
        <div className="rounded-[2rem] bg-white p-8 text-center shadow-xl">
          <h1 className="text-2xl font-black">Checking admin session...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dff8ec,transparent_35%),linear-gradient(135deg,#f5fbff,#edf7f2)] text-[#073e63]">
      <aside className="fixed left-0 top-0 z-40 h-full w-80 overflow-hidden bg-gradient-to-b from-[#052b4f] via-[#005AAA] to-[#35B24A] p-6 text-white shadow-2xl">
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 left-8 h-56 w-56 rounded-full bg-[#F5A623]/25 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5A623]">Website CMS</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight">JETAMA Admin</h1>
          <p className="mt-1 text-sm text-white/75">Manage pages, news, gallery, careers and website design.</p>
          <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-3 text-xs font-bold text-white/85 backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300" />{realtime}
          </div>
        </div>

        <nav className="relative mt-8 space-y-2">
          {menu.map((item) => {
            const active = location.pathname === item.path || (item.path === "/MiraJSB80/dashboard" && location.pathname === "/MiraJSB80");
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-black transition ${
                  active ? "bg-white text-[#073e63] shadow-xl" : "text-white/90 hover:bg-white/15"
                }`}
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/15">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 space-y-3">
          <Link to="/" target="_blank" className="block rounded-2xl border border-white/25 px-4 py-3 text-center font-black text-white transition hover:bg-white/15">
            View Public Website
          </Link>
          <button onClick={logout} className="w-full rounded-2xl bg-white px-4 py-3 font-black text-[#073e63] shadow-lg">
            Logout
          </button>
        </div>
      </aside>

      <section className="ml-80 min-h-screen p-8">
        <Outlet />
      </section>
    </main>
  );
}
