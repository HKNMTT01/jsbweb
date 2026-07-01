import { useEffect, useMemo, useState } from "react";
import { listRows, type ContactInquiryRecord, upsertRow, deleteRow } from "../../../lib/adminCms";

const statusOptions: ContactInquiryRecord["status"][] = ["new", "read", "replied", "closed"];

export default function InquiriesAdmin() {
  const [items, setItems] = useState<ContactInquiryRecord[]>([]);
  const [selected, setSelected] = useState<ContactInquiryRecord | null>(null);
  const [reply, setReply] = useState("");
  const [filter, setFilter] = useState("all");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function load() {
    listRows<ContactInquiryRecord>("contact_inquiries", []).then(setItems);
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

  async function updateInquiry(item: ContactInquiryRecord, patch: Partial<ContactInquiryRecord>) {
    setError("");
    try {
      await upsertRow<ContactInquiryRecord>("contact_inquiries", { ...item, ...patch });
      setStatus("Inquiry updated.");
      setSelected((current) => current?.id === item.id ? { ...item, ...patch } : current);
      load();
      setTimeout(() => setStatus(""), 2200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update inquiry.");
    }
  }

  async function saveReply() {
    if (!selected) return;
    await updateInquiry(selected, {
      status: "replied",
      reply_message: reply,
      replied_at: new Date().toISOString(),
    });
  }

  async function removeInquiry(id?: number) {
    if (!id || !window.confirm("Delete this inquiry?")) return;
    await deleteRow("contact_inquiries", id);
    if (selected?.id === id) setSelected(null);
    load();
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Contact form inbox</p>
          <h1 className="mt-2 text-4xl font-black">Website Inquiries</h1>
          <p className="mt-2 text-slate-500">View contact form submissions and record replies from the admin dashboard.</p>
        </div>
        <a href="/contact" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#073e63] px-5 py-3 font-black text-white shadow-lg">Open Contact Page</a>
      </div>

      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}
      {error && <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-600">{error}</div>}

      <div className="mt-7 flex flex-wrap gap-2">
        {["all", ...statusOptions].map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm font-black capitalize ${filter === item ? "bg-[#073e63] text-white" : "bg-white text-[#073e63] shadow-sm"}`}>{item}</button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-4">
          {filtered.map((item) => (
            <article key={item.id} className={`rounded-[1.7rem] border bg-white/90 p-5 shadow-lg ${selected?.id === item.id ? "border-[#005AAA]" : "border-white/70"}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-black uppercase ${item.status === "replied" ? "bg-emerald-50 text-emerald-700" : item.status === "closed" ? "bg-slate-100 text-slate-600" : "bg-yellow-50 text-yellow-700"}`}>{item.status || "new"}</span>
                    <span className="rounded-full bg-[#eef8ff] px-3 py-1 text-xs font-black uppercase text-[#005AAA]">{new Date(item.created_at || Date.now()).toLocaleString()}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-black text-[#073e63]">{item.subject || "Website Inquiry"}</h2>
                  <p className="mt-1 text-sm font-bold text-[#00a884]">{item.name} / {item.email}</p>
                  <p className="mt-3 line-clamp-2 max-w-3xl text-slate-500">{item.message}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => { setSelected(item); setReply(item.reply_message || ""); updateInquiry(item, { status: item.status === "new" ? "read" : item.status }); }} className="rounded-xl bg-[#005AAA] px-4 py-2 font-bold text-white">Open</button>
                  <button onClick={() => removeInquiry(item.id)} className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white">Delete</button>
                </div>
              </div>
            </article>
          ))}
          {!filtered.length && <div className="rounded-[1.7rem] bg-white/85 p-8 text-center font-bold text-slate-500 shadow-lg">No inquiries found.</div>}
        </section>

        <section className="sticky top-8 h-fit rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-xl backdrop-blur">
          {selected ? (
            <>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00a884]">Selected Inquiry</p>
                  <h2 className="mt-2 text-2xl font-black text-[#073e63]">{selected.subject || "Website Inquiry"}</h2>
                </div>
                <select value={selected.status || "new"} onChange={(e) => updateInquiry(selected, { status: e.target.value as ContactInquiryRecord["status"] })} className="rounded-xl border px-4 py-2 font-bold">
                  {statusOptions.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <div className="mt-6 rounded-2xl bg-[#f8fbff] p-5">
                <p className="font-black text-[#073e63]">{selected.name}</p>
                <p className="mt-1 text-sm font-bold text-[#005AAA]">{selected.email}</p>
                {selected.phone && <p className="mt-1 text-sm text-slate-500">{selected.phone}</p>}
                <p className="mt-5 whitespace-pre-wrap text-sm leading-7 text-slate-700">{selected.message}</p>
              </div>

              <div className="mt-6">
                <label className="text-sm font-black text-[#073e63]">Reply note / message</label>
                <textarea value={reply} onChange={(e) => setReply(e.target.value)} rows={7} className="mt-3 w-full rounded-xl border px-4 py-3" placeholder="Write reply message here..." />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button onClick={saveReply} className="rounded-xl bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-5 py-3 font-black text-white">Save Reply Status</button>
                <a href={`mailto:${selected.email}?subject=${encodeURIComponent(`RE: ${selected.subject || "Website Inquiry"}`)}&body=${encodeURIComponent(reply || "Dear " + selected.name + ",\n\n")}`} className="rounded-xl bg-[#F5A623] px-5 py-3 font-black text-white">Open Email Reply</a>
              </div>
              <p className="mt-4 text-xs font-semibold leading-6 text-slate-500">Note: browser apps cannot send email directly without an email service. This saves the reply record and opens your email client.</p>
            </>
          ) : (
            <div className="py-20 text-center text-slate-500">
              <p className="text-xl font-black text-[#073e63]">Select an inquiry</p>
              <p className="mt-2 text-sm">Open a message to view full details and reply.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
