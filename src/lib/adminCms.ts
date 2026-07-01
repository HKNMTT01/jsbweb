import { supabase } from "./supabase";

export type JsonStyle = Record<string, string>;

export type CmsBlock = {
  id: string;
  page: string;
  label: string;
  type: "text" | "textarea" | "image" | "html";
  value: string;
  style?: JsonStyle;
  is_published?: boolean;
  created_at?: string;
};

export type SiteSettings = {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  darkColor: string;
  fontFamily: string;
  navRadius: string;
  cardRadius: string;
  buttonRadius: string;
  heroHeight: string;
  logoScale: string;
  motionIntensity: "none" | "soft" | "normal";
  backgroundMode: "clean" | "soft-gradient" | "premium-dark";
};

export type NewsRecord = {
  id?: number;
  title: string;
  description: string;
  date: string;
  day: string;
  month: string;
  year: number;
  type: "gallery" | "videos" | "press-releases" | "announcement";
  image_url: string;
  source_url?: string;
  is_featured?: boolean;
  is_published?: boolean;
  sort_order?: number;
  created_at?: string;
};

export type CareerRecord = {
  id?: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  application_email: string;
  closing_date?: string;
  is_active: boolean;
  sort_order?: number;
  created_at?: string;
};

export type GalleryRecord = {
  id?: number;
  title: string;
  description?: string;
  caption?: string;
  image_url: string;
  category?: string;
  date?: string;
  is_published?: boolean;
  sort_order?: number;
  created_at?: string;
};

export type ContactInquiryRecord = {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status?: "new" | "read" | "replied" | "closed";
  reply_message?: string;
  replied_at?: string;
  created_at?: string;
};

export type CareerApplicationRecord = {
  id?: number;
  career_id?: number;
  career_title: string;
  applicant_name: string;
  applicant_email: string;
  applicant_phone?: string;
  cover_message?: string;
  resume_url?: string;
  status?: "new" | "reviewing" | "shortlisted" | "rejected" | "hired";
  created_at?: string;
};

export const defaultSiteSettings: SiteSettings = {
  primaryColor: "#005AAA",
  secondaryColor: "#35B24A",
  accentColor: "#F5A623",
  darkColor: "#052B4F",
  fontFamily: "Poppins, sans-serif",
  navRadius: "18px",
  cardRadius: "28px",
  buttonRadius: "999px",
  heroHeight: "560px",
  logoScale: "1",
  motionIntensity: "normal",
  backgroundMode: "soft-gradient",
};

export const defaultCmsBlocks: CmsBlock[] = [
  {
    id: "home.hero.title",
    page: "Home",
    label: "Hero Title",
    type: "text",
    value: "Redefining Water & Energy",
    style: { fontSize: "64px", fontWeight: "900", lineHeight: "1.05" },
    is_published: true,
  },
  {
    id: "home.hero.subtitle",
    page: "Home",
    label: "Hero Subtitle",
    type: "textarea",
    value: "Delivering reliable water solutions and sustainable energy initiatives for Sabah.",
    style: { fontSize: "18px", lineHeight: "1.8" },
    is_published: true,
  },
  {
    id: "careers.empty.message",
    page: "Careers",
    label: "No Opening Message",
    type: "textarea",
    value: "There are no available opening positions at the moment. Please check back soon for future opportunities.",
    style: { fontSize: "16px", lineHeight: "1.8" },
    is_published: true,
  },
  {
    id: "contact.intro",
    page: "Contact",
    label: "Contact Introduction",
    type: "textarea",
    value: "Send us your inquiry and our team will get back to you as soon as possible.",
    style: { fontSize: "16px", lineHeight: "1.8" },
    is_published: true,
  },
  {
    id: "footer.tagline",
    page: "Footer",
    label: "Footer Tagline",
    type: "text",
    value: "Reliable Water Services For Sabah",
    style: { fontSize: "18px", fontWeight: "800" },
    is_published: true,
  },
];

const draftBlocksKey = "jetama.cms.blocks.draft";
const draftSettingsKey = "jetama.cms.settings.draft";

export function splitLines(value: string) {
  return value.split("\n").map((item) => item.trim()).filter(Boolean);
}

export function joinLines(value?: string[]) {
  return (value || []).join("\n");
}

export function getMonthName(value: string | number | Date = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  return date.toLocaleString("en-US", { month: "short" }).toUpperCase();
}

export async function listRows<T>(table: string, fallback: T[] = []): Promise<T[]> {
  if (!supabase) return fallback;

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(`[${table}]`, error);
    return fallback;
  }

  return (data || []) as T[];
}

export async function upsertRow<T extends { id?: number | string }>(table: string, row: T) {
  if (!supabase) {
    throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
  }

  const cleanRow = Object.fromEntries(Object.entries(row).filter(([, value]) => value !== undefined));
  const { data, error } = await supabase.from(table).upsert(cleanRow as never).select().single();
  if (error) throw error;
  return data as T;
}

export async function insertRow<T extends Record<string, unknown>>(table: string, row: T) {
  if (!supabase) {
    throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
  }

  const cleanRow = Object.fromEntries(Object.entries(row).filter(([, value]) => value !== undefined));
  const { data, error } = await supabase.from(table).insert(cleanRow as never).select().single();
  if (error) throw error;
  return data as T;
}

export async function deleteRow(table: string, id: number) {
  if (!supabase) return;
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
}

export async function uploadCmsFile(file: File, folder = "cms") {
  if (!supabase) throw new Error("Supabase is not configured.");

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const path = `${folder}/${Date.now()}-${safeName}`;
  const { error } = await supabase.storage.from("cms-assets").upload(path, file, { upsert: true });
  if (error) throw error;

  const { data } = supabase.storage.from("cms-assets").getPublicUrl(path);
  return data.publicUrl;
}

export async function loadCmsBlocks(opts?: { draft?: boolean }): Promise<CmsBlock[]> {
  if (opts?.draft) {
    const draft = localStorage.getItem(draftBlocksKey);
    if (draft) return JSON.parse(draft) as CmsBlock[];
  }

  if (!supabase) return defaultCmsBlocks;
  const { data, error } = await supabase.from("cms_blocks").select("*").order("page", { ascending: true });
  if (error || !data?.length) return defaultCmsBlocks;
  return data as CmsBlock[];
}

export async function saveCmsBlock(block: CmsBlock) {
  if (!supabase) {
    const savedDraft = localStorage.getItem(draftBlocksKey);
    const currentBlocks = savedDraft ? (JSON.parse(savedDraft) as CmsBlock[]) : defaultCmsBlocks;
    const exists = currentBlocks.some((item) => item.id === block.id);
    const nextBlocks = exists ? currentBlocks.map((item) => (item.id === block.id ? block : item)) : [block, ...currentBlocks];
    localStorage.setItem(draftBlocksKey, JSON.stringify(nextBlocks));
    return;
  }

  const { error } = await supabase.from("cms_blocks").upsert(block as never);
  if (error) throw error;
}

export function saveDraftCmsBlocks(blocks: CmsBlock[]) {
  localStorage.setItem(draftBlocksKey, JSON.stringify(blocks));
}

export function clearDraftCmsBlocks() {
  localStorage.removeItem(draftBlocksKey);
}

export async function loadSiteSettings(opts?: { draft?: boolean }): Promise<SiteSettings> {
  if (opts?.draft) {
    const draft = localStorage.getItem(draftSettingsKey);
    if (draft) return JSON.parse(draft) as SiteSettings;
  }

  if (!supabase) return defaultSiteSettings;
  const { data, error } = await supabase.from("site_settings").select("value").eq("id", "global").maybeSingle();
  if (error || !data?.value) return defaultSiteSettings;
  return data.value as SiteSettings;
}

export async function saveSiteSettings(settings: SiteSettings) {
  if (!supabase) {
    localStorage.setItem(draftSettingsKey, JSON.stringify(settings));
    return;
  }

  const { error } = await supabase.from("site_settings").upsert({ id: "global", value: settings } as never);
  if (error) throw error;
}

export function saveDraftSiteSettings(settings: SiteSettings) {
  localStorage.setItem(draftSettingsKey, JSON.stringify(settings));
}

export function clearDraftSiteSettings() {
  localStorage.removeItem(draftSettingsKey);
}
