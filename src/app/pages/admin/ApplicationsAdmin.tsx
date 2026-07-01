import { useEffect, useMemo, useState } from "react";
import { deleteRow, listRows, type CareerApplicationRecord, upsertRow } from "../../../lib/adminCms";

const statusOptions: CareerApplicationRecord["status"][] = ["new", "reviewing", "shortlisted", "rejected", "hired"];

export default function ApplicationsAdmin() {
  const [items, setItems] = useState<CareerApplicationRecord[]>([]);
  const [filter, setFilter] = useState("all");
  const [status, setStatus] = useState("");

  function load() {
    listRows<CareerApplicationRecord>("career_applications", []).then(setItems);
  }

  useEffect(() => {
    load();
    const timer = window.setInterval(load, 15000);
    return () => window.clearInterval(timer);
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((item) => (item.status || "new") === filter);
  }, [items, filter]);

  async function updateStatus(item: CareerApplicationRecord, nextStatus: CareerApplicationRecord["status"]) {
    await upsertRow<CareerApplicationRecord>("career_applications", { ...item, status: nextStatus });
    setStatus("Application updated.");
    load();
    setTimeout(() => setStatus(""), 2200);
  }

  async function removeApplication(id?: number) {
    if (!id || !window.confirm("Delete this application?")) return;
    await deleteRow("career_applications", id);
    load();
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Career applications</p>
          <h1 className="mt-2 text-4xl font-black">Applications Inbox</h1>
          <p className="mt-2 text-slate-500">View online applications submitted from the Careers page.</p>
        </div>
        <a href="/careers" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#073e63] px-5 py-3 font-black text-white shadow-lg">Open Careers Page</a>
      </div>

      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}

      <div className="mt-7 flex flex-wrap gap-2">
        {["all", ...statusOptions].map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm font-black capitalize ${filter === item ? "bg-[#073e63] text-white" : "bg-white text-[#073e63] shadow-sm"}`}>{item}</button>
        ))}
      </div>

      <div className="mt-8 grid gap-5">
        {filtered.map((item) => (
          <article key={item.id} className="rounded-[1.7rem] border border-white/70 bg-white/90 p-5 shadow-lg">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#eef8ff] px-3 py-1 text-xs font-black uppercase text-[#005AAA]">{item.career_title}</span>
                  <span className="rounded-full bg-[#ecfbef] px-3 py-1 text-xs font-black uppercase text-[#12813b]">{item.status || "new"}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase text-slate-500">{new Date(item.created_at || Date.now()).toLocaleString()}</span>
                </div>
                <h2 className="mt-3 text-xl font-black text-[#073e63]">{item.applicant_name}</h2>
                <p className="mt-1 text-sm font-bold text-[#00a884]">{item.applicant_email} {item.applicant_phone ? `/ ${item.applicant_phone}` : ""}</p>
                <p className="mt-3 whitespace-pre-wrap text-slate-500">{item.cover_message}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <select value={item.status || "new"} onChange={(e) => updateStatus(item, e.target.value as CareerApplicationRecord["status"])} className="rounded-xl border px-4 py-2 font-bold">
                  {statusOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                <a href={`mailto:${item.applicant_email}?subject=${encodeURIComponent(`Application: ${item.career_title}`)}`} className="rounded-xl bg-[#005AAA] px-4 py-2 font-bold text-white">Email</a>
                <button onClick={() => removeApplication(item.id)} className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white">Delete</button>
              </div>
            </div>
          </article>
        ))}
        {!filtered.length && <div className="rounded-[1.7rem] bg-white/85 p-8 text-center font-bold text-slate-500 shadow-lg">No applications found.</div>}
      </div>
    </div>
  );
}
