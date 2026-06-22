import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  Image as ImageIcon,
  Newspaper,
  Play,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { listRows, type NewsRecord } from "../../lib/adminCms";

import galleryImage from "@/assets/jetama-about-3.jpg";
import videoImage from "@/assets/DJI_0298.jpg";
import newspaperImage from "@/assets/jetama-about-4.jpg";
import babagonImage from "@/assets/MOYOG.jpg";
import paparImage from "@/assets/PAPAR.jpg";
import perbarisanImage from "@/assets/prbarisanjetama.jpg";
import bebasRasuahImage from "@/assets/prgmbbasrasuah.jpg";
import annualDinnerImage from "@/assets/annualdinner jetama.jpg";
import ulangTahunImage from "@/assets/ulang thun jetama.jpg";

type NewsType = "gallery" | "videos" | "press-releases" | "announcement";
type FilterType = "all" | NewsType;

type NewsItem = {
  title: string;
  date: string;
  day: string;
  month: string;
  year: number;
  type: NewsType;
  description: string;
  image: string;
  sourceUrl?: string;
};

const newsItems: NewsItem[] = [
  {
    title: "Selamat Hari Raya Aidilfitri",
    date: "Dummy Poster 2025",
    day: "01",
    month: "MAY",
    year: 2025,
    type: "gallery",
    description:
      "Warm festive wishes from JETAMA to all staff, partners and communities.",
    image: ulangTahunImage,
  },
  {
    title: "Selamat Hari Kaamatan",
    date: "Dummy Poster 2025",
    day: "30",
    month: "MAY",
    year: 2025,
    type: "gallery",
    description:
      "Celebrating harmony, culture and togetherness with the community.",
    image: perbarisanImage,
  },
  {
    title: "JETAMA Mobile Water Desalination Modular - 23092024",
    date: "Monday, 23 September 2024",
    day: "23",
    month: "SEP",
    year: 2024,
    type: "videos",
    description:
      "Video update showcasing JETAMA's mobile water desalination modular initiative.",
    image: videoImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/videos",
  },
  {
    title: "Seawater desalination system to address water supply issues in Sabah",
    date: "23 October 2024, Wednesday",
    day: "23",
    month: "OCT",
    year: 2024,
    type: "press-releases",
    description:
      "Media coverage on JETAMA's seawater desalination system to support water supply solutions in Sabah.",
    image: newspaperImage,
  },
  {
    title:
      "Jetama plans to build Sabah's first floating solar power plant at Babagon Dam",
    date: "29 April 2024, Monday",
    day: "29",
    month: "APR",
    year: 2024,
    type: "press-releases",
    description:
      "Media coverage on JETAMA's plan to develop floating solar power at Babagon Dam.",
    image: babagonImage,
  },
  {
    title:
      "Perbarisan Sempena Sambutan Hari Kebangsaan Peringkat Negeri Sabah 2023",
    date: "Thursday, 31 August 2023",
    day: "31",
    month: "AUG",
    year: 2023,
    type: "gallery",
    description:
      "JETAMA participation in the Sabah state-level National Day parade celebration.",
    image: perbarisanImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/gallery",
  },
  {
    title: "Ulang Tahun Ke-30 Jetama Sdn Bhd & Sambutan Hari Raya Aidilfitri",
    date: "Friday, 19 May 2023",
    day: "19",
    month: "MAY",
    year: 2023,
    type: "gallery",
    description:
      "Celebration of JETAMA's 30th anniversary together with Hari Raya Aidilfitri gathering.",
    image: ulangTahunImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/gallery",
  },
  {
    title: "Jetama Group Annual Dinner & Appreciation Night 2022",
    date: "Friday, 13 January 2023",
    day: "13",
    month: "JAN",
    year: 2023,
    type: "gallery",
    description:
      "Annual appreciation night recognising teamwork, service and contribution across JETAMA Group.",
    image: annualDinnerImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/gallery",
  },
  {
    title: "Program Bebas Rasuah 2022",
    date: "Thursday, 07 July 2022",
    day: "07",
    month: "JUL",
    year: 2022,
    type: "gallery",
    description:
      "Integrity and anti-corruption programme held as part of corporate governance commitment.",
    image: bebasRasuahImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/gallery",
  },
  {
    title: "Jamuan Raya Aidilfitri Jetama 2022",
    date: "Sunday, 22 May 2022",
    day: "22",
    month: "MAY",
    year: 2022,
    type: "gallery",
    description: "Hari Raya Aidilfitri gathering for staff, partners and guests.",
    image: galleryImage,
  },
  {
    title: "Electrochlorination System at Papar Water Treatment Plant",
    date: "Thursday, 11 March 2021",
    day: "11",
    month: "MAR",
    year: 2021,
    type: "gallery",
    description:
      "Gallery update for the electrochlorination system at Papar Water Treatment Plant.",
    image: paparImage,
  },
];

const typeOptions: Array<{ value: FilterType; label: string }> = [
  { value: "all", label: "All" },
  { value: "gallery", label: "Gallery" },
  { value: "videos", label: "Videos" },
  { value: "press-releases", label: "News" },
];

function getTypeLabel(type: NewsType) {
  if (type === "videos") return "Video";
  if (type === "press-releases") return "News";
  if (type === "announcement") return "Announcement";
  return "Gallery";
}

function mapBackendNews(item: NewsRecord): NewsItem {
  return {
    title: item.title,
    date: item.date || String(item.year || new Date().getFullYear()),
    day: item.day || "--",
    month: item.month || "JETAMA",
    year: Number(item.year || new Date().getFullYear()),
    type: item.type === "announcement" ? "press-releases" : item.type,
    description: item.description,
    image: item.image_url || galleryImage,
    sourceUrl: item.source_url || undefined,
  };
}

function getTypeIcon(type: NewsType) {
  if (type === "videos") return <Play size={13} fill="currentColor" />;
  if (type === "press-releases") return <Newspaper size={13} />;
  return <ImageIcon size={13} />;
}

function OceanWaveDivider() {
  return (
    <div className="pointer-events-none relative -mt-16 h-40 overflow-hidden bg-transparent">
      <svg className="absolute bottom-0 left-0 h-40 w-full" viewBox="0 0 1440 260" preserveAspectRatio="none">
        <path d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z" fill="rgba(255,255,255,1)" />
        <path d="M0,125 C240,80 480,155 720,120 C960,85 1170,155 1440,115 L1440,260 L0,260 Z" fill="rgba(65,182,80,.35)" />
        <path d="M0,160 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z" fill="rgba(0,84,166,.72)" />
        <path d="M0,205 C300,160 560,220 820,195 C1080,170 1260,215 1440,190 L1440,260 L0,260 Z" fill="rgba(0,59,122,.94)" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#f7fbfd] via-[#f7fbfd]/45 to-transparent" />
    </div>
  );
}

export default function News() {
  const [backendItems, setBackendItems] = useState<NewsItem[]>([]);
  const [selectedType, setSelectedType] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    listRows<NewsRecord>("news", []).then((rows) => {
      setBackendItems(rows.filter((item) => item.is_published !== false).map(mapBackendNews));
    });
  }, []);

  const allNewsItems = backendItems.length ? backendItems : newsItems;
  const featuredNews = allNewsItems.slice(0, 5);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) =>
        current === featuredNews.length - 1 ? 0 : current + 1,
      );
    }, 5200);

    return () => window.clearInterval(timer);
  }, [featuredNews.length]);

  const visibleItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return allNewsItems
      .filter((item) => {
        const matchType = selectedType === "all" || item.type === selectedType;
        const matchSearch =
          !query ||
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.date.toLowerCase().includes(query) ||
          String(item.year).includes(query);

        return matchType && matchSearch;
      })
      .sort((a, b) => b.year - a.year);
  }, [selectedType, searchTerm, allNewsItems]);

  const currentSlide = featuredNews[activeSlide];
  const mainFeature = visibleItems[0];
  const archiveItems = visibleItems.slice(1);

  return (
    <main className="overflow-hidden bg-[#f7fbfd] text-[#062f4e]">
      <section className="relative min-h-[650px] overflow-hidden bg-[#061f33] pt-28 text-white">
        <div className="absolute inset-0">
          <img
            key={currentSlide.title}
            src={currentSlide.image}
            alt={currentSlide.title}
            className="h-full w-full scale-105 object-cover opacity-65 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031c30] via-[#052b4f]/90 to-[#005aaa]/35" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f7fbfd] to-transparent" />
          <div className="absolute -right-20 top-28 h-72 w-72 rounded-full bg-[#41b650]/20 blur-3xl" />
          <div className="absolute left-[-80px] bottom-24 h-72 w-72 rounded-full bg-[#f5a623]/15 blur-3xl" />
        </div>

        <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_440px] lg:px-8">
          <div>
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/75">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight size={16} />
              <span className="text-white">News & Events</span>
            </div>

            <h1 className="mt-7 text-5xl font-black leading-tight md:text-7xl">
              News & Events
            </h1>

            <div className="mt-7 h-1.5 w-24 rounded-full bg-[#f5a623]" />

            <p className="mt-8 max-w-2xl text-xl font-semibold leading-9 text-white">
              {currentSlide.title}
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-white/75">
              {currentSlide.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#f5a623] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#062f4e]">
                {getTypeLabel(currentSlide.type)}
              </span>
              <span className="rounded-full bg-white/15 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                {currentSlide.date}
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <div className="absolute -left-4 top-10 h-24 w-2 rounded-full bg-[#41b650]" />
              <div className="overflow-hidden rounded-[1.5rem]">
                <img src={currentSlide.image} alt={currentSlide.title} className="h-[330px] w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-[#005aaa]">
                  {getTypeIcon(currentSlide.type)}
                  Latest Highlight
                </div>
                <h2 className="line-clamp-2 text-2xl font-black leading-tight text-white">{currentSlide.title}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {featuredNews.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index
                  ? "w-10 bg-[#f5a623]"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
      </section>

      <OceanWaveDivider />

      <section className="relative -mt-28 z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white bg-white/95 p-5 shadow-[0_25px_80px_rgba(0,70,145,0.14)] backdrop-blur">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search news, activity or year..."
                className="h-14 w-full rounded-2xl border border-[#d9e7ee] bg-[#f8fbfd] pl-12 pr-5 text-sm font-semibold text-[#062f4e] outline-none transition focus:border-[#41b650] focus:ring-4 focus:ring-[#41b650]/15"
              />
            </label>

            <div className="flex flex-wrap gap-3">
              {typeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedType(option.value)}
                  className={`rounded-2xl px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition ${
                    selectedType === option.value
                      ? "bg-[#005aaa] text-white shadow-lg shadow-[#005aaa]/20"
                      : "bg-[#eef5f7] text-[#062f4e] hover:bg-[#41b650] hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Latest Events", allNewsItems.filter((item) => item.type === "gallery").length],
            ["Media Updates", allNewsItems.filter((item) => item.type === "press-releases").length],
            ["Video Highlights", allNewsItems.filter((item) => item.type === "videos").length],
          ].map(([label, value]) => (
            <div key={label as string} className="group rounded-[2rem] border border-[#dcebf3] bg-white p-6 shadow-[0_18px_55px_rgba(0,70,145,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_75px_rgba(0,70,145,0.14)]">
              <TrendingUp className="mb-5 text-[#41b650]" size={30} />
              <p className="text-4xl font-black text-[#005aaa]">{value as number}</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500">{label as string}</p>
            </div>
          ))}
        </section>

        <div className="mb-10 mt-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#41b650]">
              Corporate Archive
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#062f4e]">
              Latest Updates
            </h2>
          </div>

          <p className="font-bold text-slate-500">
            Showing {visibleItems.length} update{visibleItems.length === 1 ? "" : "s"}
          </p>
        </div>

        {visibleItems.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-[#cddde6] bg-white p-12 text-center">
            <p className="text-xl font-black text-[#062f4e]">No update found.</p>
            <p className="mt-2 text-slate-500">Try another keyword or category.</p>
          </div>
        ) : (
          <>
            {mainFeature && (
              <article className="group grid overflow-hidden rounded-[2.4rem] border border-white bg-white shadow-[0_25px_90px_rgba(0,70,145,0.12)] lg:grid-cols-[1.05fr_.95fr]">
                <div className="relative min-h-[380px] overflow-hidden">
                  <img src={mainFeature.image} alt={mainFeature.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031c30]/65 via-transparent to-transparent" />

                  <div className="absolute left-7 top-7 rounded-2xl bg-white px-5 py-4 text-center shadow-xl">
                    <p className="text-4xl font-black leading-none text-[#005aaa]">{mainFeature.day}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-wider text-[#41b650]">{mainFeature.month}</p>
                    <p className="mt-1 text-xs font-black text-slate-400">{mainFeature.year}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#eef8f1] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#12813b]">
                    {getTypeIcon(mainFeature.type)}
                    Featured {getTypeLabel(mainFeature.type)}
                  </div>

                  <h3 className="text-3xl font-black leading-tight text-[#062f4e] md:text-4xl">
                    {mainFeature.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">{mainFeature.description}</p>

                  <div className="mt-7 flex flex-wrap items-center gap-4 text-sm font-bold text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={17} />
                      {mainFeature.date}
                    </span>
                  </div>

                  {mainFeature.sourceUrl && (
                    <a
                      href={mainFeature.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#005aaa] to-[#41b650] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#005aaa]/20 transition hover:-translate-y-0.5"
                    >
                      Read More
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </article>
            )}

            <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {archiveItems.map((item, index) => (
                <article
                  key={`${item.title}-${item.date}`}
                  className="group overflow-hidden rounded-[2rem] border border-[#e3eef3] bg-white shadow-[0_18px_60px_rgba(0,70,145,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,70,145,0.15)]"
                  style={{ transitionDelay: `${index * 35}ms` }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031c30]/68 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 rounded-xl bg-white px-4 py-3 text-center shadow-lg">
                      <p className="text-3xl font-black leading-none text-[#005aaa]">{item.day}</p>
                      <p className="mt-1 text-[11px] font-black uppercase text-[#41b650]">{item.month}</p>
                    </div>

                    <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#005aaa] shadow">
                      {getTypeIcon(item.type)}
                      {getTypeLabel(item.type)}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="mb-4 flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CalendarDays size={15} />
                      {item.date}
                    </div>

                    <h3 className="line-clamp-2 min-h-[58px] text-xl font-black leading-snug text-[#062f4e]">
                      {item.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 min-h-[78px] leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-6">
                      {item.sourceUrl ? (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#005aaa] transition hover:text-[#41b650]"
                        >
                          Read More
                          <ExternalLink size={15} />
                        </a>
                      ) : (
                        <button className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#005aaa] transition hover:text-[#41b650]">
                          View Update
                          <ArrowRight size={15} />
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
