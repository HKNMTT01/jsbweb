import { useEffect, useState } from "react";
import {
  CareerApplicationRecord,
  CareerRecord,
  ContactInquiryRecord,
  GalleryRecord,
  listRows,
  NewsRecord,
} from "../../../lib/adminCms";
import { isSupabaseConfigured } from "../../../lib/supabase";

function StatCard({ label, value, tone }: { label: string; value: number | string; tone: string }) {
  return (
    <div className="rounded-[1.7rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
      <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: tone }}>{label}</p>
      <p className="mt-3 text-4xl font-black text-[#073e63]">{value}</p>
    </div>
  );
}

export default function Dashboard() {
  const [news, setNews] = useState<NewsRecord[]>([]);
  const [careers, setCareers] = useState<CareerRecord[]>([]);
  const [gallery, setGallery] = useState<GalleryRecord[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiryRecord[]>([]);
  const [applications, setApplications] = useState<CareerApplicationRecord[]>([]);

  function loadDashboard() {
    listRows<NewsRecord>("news", []).then(setNews);
    listRows<CareerRecord>("careers", []).then(setCareers);
    listRows<GalleryRecord>("gallery", []).then(setGallery);
    listRows<ContactInquiryRecord>("contact_inquiries", []).then(setInquiries);
    listRows<CareerApplicationRecord>("career_applications", []).then(setApplications);
  }

  useEffect(() => {
    loadDashboard();
    const timer = window.setInterval(loadDashboard, 15000);
    return () => window.clearInterval(timer);
  }, []);

  const publishedNews = news.filter((item) => item.is_published !== false).length;
  const activeCareers = careers.filter((item) => item.is_active !== false).length;
  const publishedGallery = gallery.filter((item) => item.is_published !== false).length;
  const newInquiries = inquiries.filter((item) => (item.status || "new") === "new").length;
  const newApplications = applications.filter((item) => (item.status || "new") === "new").length;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Website control centre</p>
          <h1 className="mt-2 text-4xl font-black">Dashboard</h1>
        </div>
        <a href="/" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#073e63] px-5 py-3 font-black text-white shadow-lg">Open Website</a>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Database" value={isSupabaseConfigured ? "Live" : "Local"} tone="#005AAA" />
        <StatCard label="Published News" value={publishedNews} tone="#35B24A" />
        <StatCard label="Gallery Items" value={publishedGallery} tone="#F5A623" />
        <StatCard label="Active Careers" value={activeCareers} tone="#005AAA" />
        <StatCard label="New Inquiries" value={newInquiries} tone="#D97706" />
        <StatCard label="New Applications" value={newApplications} tone="#DC2626" />
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-black text-[#073e63]">Recent Inquiries</h2>
            <a href="/admin/inquiries" className="text-sm font-black text-[#005AAA]">View All</a>
          </div>
          <div className="mt-5 space-y-4">
            {inquiries.slice(0, 5).map((item) => (
              <div key={item.id || item.email} className="rounded-2xl bg-[#f8fbff] p-4">
                <p className="text-sm font-black text-[#005AAA]">{item.subject || "Website Inquiry"}</p>
                <p className="mt-1 text-xs text-slate-500">{item.name} / {item.email}</p>
                <p className="mt-2 line-clamp-2 text-sm text-slate-500">{item.message}</p>
              </div>
            ))}
            {!inquiries.length && <p className="text-sm text-slate-500">No inquiries yet.</p>}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-black text-[#073e63]">Recent Applications</h2>
            <a href="/admin/applications" className="text-sm font-black text-[#005AAA]">View All</a>
          </div>
          <div className="mt-5 space-y-4">
            {applications.slice(0, 5).map((item) => (
              <div key={item.id || item.applicant_email} className="rounded-2xl bg-[#f8fbff] p-4">
                <p className="text-sm font-black text-[#005AAA]">{item.applicant_name}</p>
                <p className="mt-1 text-xs text-slate-500">{item.career_title} / {item.status || "new"}</p>
              </div>
            ))}
            {!applications.length && <p className="text-sm text-slate-500">No applications yet.</p>}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
          <h2 className="text-xl font-black text-[#073e63]">Open Career Posts</h2>
          <div className="mt-5 space-y-4">
            {careers.slice(0, 5).map((item) => (
              <div key={item.id || item.title} className="rounded-2xl bg-[#f8fbff] p-4">
                <p className="text-sm font-black text-[#005AAA]">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.department} / {item.is_active === false ? "Hidden" : "Active"}</p>
              </div>
            ))}
            {!careers.length && <p className="text-sm text-slate-500">No careers yet. The public careers page will show the no-opening message.</p>}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
          <h2 className="text-xl font-black text-[#073e63]">Recent News / Events</h2>
          <div className="mt-5 space-y-4">
            {news.slice(0, 5).map((item) => (
              <div key={item.id || item.title} className="rounded-2xl bg-[#f8fbff] p-4">
                <p className="text-sm font-black text-[#005AAA]">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.type} / {item.date || item.year}</p>
              </div>
            ))}
            {!news.length && <p className="text-sm text-slate-500">No news yet.</p>}
          </div>
        </section>
      </div>
    </div>
  );
}
