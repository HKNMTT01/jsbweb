import { useEffect, useMemo, useState } from "react";
import { clearDraftSiteSettings, defaultSiteSettings, loadSiteSettings, saveDraftSiteSettings, saveSiteSettings, SiteSettings } from "../../../lib/cms";

const presets = [
  { name: "JETAMA Corporate", primaryColor: "#005AAA", secondaryColor: "#35B24A", accentColor: "#FDB913" },
  { name: "Premium Deep Blue", primaryColor: "#073e63", secondaryColor: "#00a884", accentColor: "#f7c948" },
  { name: "Clean Government", primaryColor: "#084c61", secondaryColor: "#2fbf71", accentColor: "#ffb703" },
];

export default function DesignAdmin() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);
  const [status, setStatus] = useState("");
  const [path, setPath] = useState("/");
  const previewSrc = useMemo(() => `${path}?cmsPreview=1&design=${Date.now()}`, [path, settings]);

  useEffect(() => { loadSiteSettings({ draft: true }).then(setSettings); }, []);
  useEffect(() => { saveDraftSiteSettings(settings); }, [settings]);

  async function publish() {
    await saveSiteSettings(settings);
    clearDraftSiteSettings();
    setStatus("Design published. Public website updates in realtime.");
    setTimeout(() => setStatus(""), 2500);
  }

  const fields: Array<[keyof SiteSettings, string, string, string]> = [
    ["primaryColor", "Primary colour", "#005AAA", "color"], ["secondaryColor", "Secondary colour", "#35B24A", "color"], ["accentColor", "Accent colour", "#FDB913", "color"],
    ["fontFamily", "Font family", "Poppins, Arial, sans-serif", "text"], ["navRadius", "Navigation radius", "2.4rem", "text"], ["pageHeroHeight", "Hero height", "520px", "text"],
    ["buttonRadius", "Button radius", "999px", "text"], ["contentMaxWidth", "Content max width", "80rem", "text"], ["logoScale", "Logo scale", "1", "text"],
  ];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Draft design studio</p><h1 className="mt-2 text-4xl font-black">Website Design Editor</h1><p className="mt-2 max-w-3xl text-slate-500">Adjust the design, preview first, then publish only after it looks correct.</p></div>
        <div className="flex gap-3"><a href={`${path}?cmsPreview=1`} target="_blank" className="rounded-2xl bg-white px-6 py-3 font-black text-[#073e63] shadow-lg">Preview Tab</a><button onClick={publish} className="rounded-2xl bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-3 font-black text-white shadow-lg">Publish Design</button></div>
      </div>
      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
          <h2 className="text-xl font-black">Theme presets</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {presets.map((p) => <button key={p.name} onClick={() => setSettings({ ...settings, ...p })} className="rounded-2xl border p-4 text-left font-black hover:border-[#00a884]"><div className="mb-3 flex gap-1"><span className="h-6 w-6 rounded-full" style={{background:p.primaryColor}}/><span className="h-6 w-6 rounded-full" style={{background:p.secondaryColor}}/><span className="h-6 w-6 rounded-full" style={{background:p.accentColor}}/></div>{p.name}</button>)}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {fields.map(([key, label, placeholder, type]) => <label key={key} className="text-sm font-bold text-slate-600">{label}<input type={type} className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-[#35B24A]" placeholder={placeholder} value={String(settings[key] || "")} onChange={(e) => setSettings({ ...settings, [key]: e.target.value })} /></label>)}
            <label className="text-sm font-bold text-slate-600">Motion intensity<select className="mt-2 w-full rounded-xl border px-4 py-3" value={settings.motionIntensity} onChange={(e) => setSettings({ ...settings, motionIntensity: e.target.value as SiteSettings["motionIntensity"] })}><option value="none">None</option><option value="soft">Soft</option><option value="normal">Normal</option></select></label>
            <label className="text-sm font-bold text-slate-600">Background mode<select className="mt-2 w-full rounded-xl border px-4 py-3" value={settings.backgroundMode || "soft-gradient"} onChange={(e) => setSettings({ ...settings, backgroundMode: e.target.value as any })}><option value="clean">Clean</option><option value="soft-gradient">Soft Gradient</option><option value="premium-dark">Premium Dark</option></select></label>
          </div>
          <div className="mt-6 rounded-[2rem] p-8 text-white" style={{ background: `linear-gradient(135deg, ${settings.primaryColor}, ${settings.secondaryColor})`, borderRadius: settings.navRadius, fontFamily: settings.fontFamily }}><h2 className="text-4xl font-black">JETAMA Preview</h2><p className="mt-3 leading-7">This small preview follows your selected settings.</p><button className="mt-6 px-6 py-3 font-black text-slate-900" style={{ background: settings.accentColor, borderRadius: settings.buttonRadius }}>Sample Button</button></div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3"><h2 className="font-black">Full webpage preview</h2><div className="flex gap-2">{[["/","Home"],["/about","About"],["/services","Services"],["/contact","Contact"]].map(([p,l])=><button key={p} onClick={()=>setPath(p)} className={`rounded-xl px-3 py-2 text-sm font-black ${path===p?'bg-[#073e63] text-white':'bg-slate-100'}`}>{l}</button>)}</div></div>
          <iframe key={previewSrc} src={previewSrc} title="Design preview" className="h-[760px] w-full rounded-2xl border bg-white" />
        </section>
      </div>
    </div>
  );
}
