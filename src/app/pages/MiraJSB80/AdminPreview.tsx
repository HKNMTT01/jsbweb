import { useMemo, useState } from "react";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Subsidiaries", path: "/subsidiary" },
  { label: "Joint Ventures", path: "/jointventure" },
  { label: "Projects", path: "/projects" },
  { label: "News", path: "/news" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export default function AdminPreview() {
  const [path, setPath] = useState("/");
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const src = useMemo(() => `${path}?cmsPreview=1&v=${Date.now()}`, [path]);
  const width = device === "desktop" ? "100%" : device === "tablet" ? "820px" : "390px";

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Actual website preview</p>
          <h1 className="mt-2 text-4xl font-black">Live Website Preview</h1>
          <p className="mt-2 text-slate-500">Preview public pages with the latest CMS data before publishing.</p>
        </div>
        <a href={`${path}?cmsPreview=1`} target="_blank" rel="noreferrer" className="rounded-2xl bg-[#073e63] px-5 py-3 font-black text-white shadow-lg">Open Preview Tab</a>
      </div>

      <div className="mt-6 rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-xl backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {pages.map((p) => (
              <button key={p.path} onClick={() => setPath(p.path)} className={`rounded-full px-4 py-2 text-sm font-black ${path === p.path ? "bg-[#00a884] text-white" : "bg-slate-100 text-[#073e63]"}`}>
                {p.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {(["desktop", "tablet", "mobile"] as const).map((d) => (
              <button key={d} onClick={() => setDevice(d)} className={`rounded-xl px-4 py-2 text-sm font-black capitalize ${device === d ? "bg-[#073e63] text-white" : "bg-slate-100"}`}>
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 overflow-auto rounded-[1.5rem] bg-slate-900 p-4">
          <iframe key={src + device} src={src} className="mx-auto min-h-[760px] rounded-xl bg-white shadow-2xl" style={{ width, border: 0 }} title="Website preview" />
        </div>
      </div>
    </div>
  );
}
