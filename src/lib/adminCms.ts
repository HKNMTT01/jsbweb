import { supabase } from "./supabase";

export type JsonStyle = Record<string, string>;
export type CmsBlock = { id: string; page: string; label: string; type: "text" | "textarea" | "richtext"; value: string; style?: JsonStyle; updated_at?: string };
export type SiteSettings = { primaryColor: string; secondaryColor: string; accentColor: string; darkColor: string; fontFamily: string; navRadius: string; cardRadius: string; buttonRadius: string; heroHeight: string; logoScale: string; motionIntensity: "none" | "soft" | "normal"; backgroundMode: "clean" | "soft-gradient" | "premium-dark" };
export type NewsRecord = { id?: number; title: string; description: string; date: string; day: string; month: string; year: number; type: "gallery" | "videos" | "press-releases" | "announcement"; image_url: string; source_url?: string; is_featured?: boolean; is_published?: boolean; created_at?: string };
export type CareerRecord = { id?: number; title: string; department: string; location: string; type: string; description: string; responsibilities: string[]; requirements: string[]; application_email: string; is_active: boolean; created_at?: string };
export type GalleryRecord = { id?: number; title: string; description?: string; image_url: string; category?: string; is_published?: boolean; created_at?: string };

export const defaultSiteSettings: SiteSettings = { primaryColor: "#005AAA", secondaryColor: "#35B24A", accentColor: "#F5A623", darkColor: "#052B4F", fontFamily: "Poppins, sans-serif", navRadius: "18px", cardRadius: "28px", buttonRadius: "999px", heroHeight: "560px", logoScale: "1", motionIntensity: "normal", backgroundMode: "soft-gradient" };

export const defaultCmsBlocks: CmsBlock[] = [
  { id: "home.hero.title", page: "Home", label: "Hero Title", type: "text", value: "Redefining Water & Energy", style: { fontSize: "64px", fontWeight: "900", lineHeight: "1.05" } },
  { id: "home.hero.subtitle", page: "Home", label: "Hero Subtitle", type: "textarea", value: "Delivering reliable water solutions and sustainable energy initiatives for Sabah.", style: { fontSize: "18px", lineHeight: "1.8" } },
  { id: "about.intro", page: "About", label: "About Introduction", type: "textarea", value: "JETAMA Sdn. Bhd. continues to support treated water supply and strategic infrastructure growth in Sabah.", style: { fontSize: "18px", lineHeight: "1.8" } },
  { id: "services.intro", page: "Services", label: "Services Introduction", type: "textarea", value: "Explore JETAMA Group services across water operations, renewable energy and technical facilities.", style: { fontSize: "18px", lineHeight: "1.8" } },
  { id: "footer.tagline", page: "Footer", label: "Footer Tagline", type: "text", value: "Reliable Water Services For Sabah", style: { fontSize: "18px", fontWeight: "800" } },
];

const draftBlocksKey = "jetama.cms.blocks.draft";
const draftSettingsKey = "jetama.cms.settings.draft";

export function splitLines(value: string) { return value.split("\n").map((x) => x.trim()).filter(Boolean); }
export function joinLines(value?: string[]) { return (value || []).join("\n"); }

export async function listRows<T>(table: string, fallback: T[]): Promise<T[]> {
  if (!supabase) return fallback;
  const { data, error } = await supabase.from(table).select("*").order("id", { ascending: false });
  if (error) { console.error(error); return fallback; }
  return (data || []) as T[];
}

export async function upsertRow<T extends { id?: number }>(table: string, row: T) {
  if (!supabase) throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
  const { error } = await supabase.from(table).upsert(row as never).select().single();
  if (error) throw error;
}

export async function deleteRow(table: string, id: number) {
  if (!supabase) return;
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
}

export async function loadCmsBlocks(opts?: { draft?: boolean }): Promise<CmsBlock[]> {
  if (opts?.draft) {
    const draft = localStorage.getItem(draftBlocksKey);
    if (draft) return JSON.parse(draft);
  }
  if (!supabase) return defaultCmsBlocks;
  const { data, error } = await supabase.from("cms_blocks").select("*").order("page");
  if (error || !data?.length) return defaultCmsBlocks;
  return data as CmsBlock[];
}
export async function saveCmsBlock(block: CmsBlock) {
  if (!supabase) { localStorage.setItem(draftBlocksKey, JSON.stringify(defaultCmsBlocks.map((b) => b.id === block.id ? block : b))); return; }
  const { error } = await supabase.from("cms_blocks").upsert(block as never);
  if (error) throw error;
}
export function saveDraftCmsBlocks(blocks: CmsBlock[]) { localStorage.setItem(draftBlocksKey, JSON.stringify(blocks)); }
export function clearDraftCmsBlocks() { localStorage.removeItem(draftBlocksKey); }

export async function loadSiteSettings(opts?: { draft?: boolean }): Promise<SiteSettings> {
  if (opts?.draft) {
    const draft = localStorage.getItem(draftSettingsKey);
    if (draft) return JSON.parse(draft);
  }
  if (!supabase) return defaultSiteSettings;
  const { data, error } = await supabase.from("site_settings").select("value").eq("id", "global").maybeSingle();
  if (error || !data?.value) return defaultSiteSettings;
  return data.value as SiteSettings;
}
export async function saveSiteSettings(settings: SiteSettings) {
  if (!supabase) { localStorage.setItem(draftSettingsKey, JSON.stringify(settings)); return; }
  const { error } = await supabase.from("site_settings").upsert({ id: "global", value: settings } as never);
  if (error) throw error;
}
export function saveDraftSiteSettings(settings: SiteSettings) { localStorage.setItem(draftSettingsKey, JSON.stringify(settings)); }
export function clearDraftSiteSettings() { localStorage.removeItem(draftSettingsKey); }
