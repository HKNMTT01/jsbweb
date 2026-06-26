import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  Image as ImageIcon,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  Play,
  Search,
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
    description: "Warm festive wishes from JETAMA to all staff, partners and communities.",
    image: ulangTahunImage,
  },
  {
    title: "Selamat Hari Kaamatan",
    date: "Dummy Poster 2025",
    day: "30",
    month: "MAY",
    year: 2025,
    type: "gallery",
    description: "Celebrating harmony, culture and togetherness with the community.",
    image: perbarisanImage,
  },
  {
    title: "JETAMA Mobile Water Desalination Modular - 23092024",
    date: "Monday, 23 September 2024",
    day: "23",
    month: "SEP",
    year: 2024,
    type: "videos",
    description: "Video update showcasing JETAMA's mobile water desalination modular initiative.",
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
    description: "Media coverage on JETAMA's seawater desalination system to support water supply solutions in Sabah.",
    image: newspaperImage,
  },
  {
    title: "Jetama plans to build Sabah's first floating solar power plant at Babagon Dam",
    date: "29 April 2024, Monday",
    day: "29",
    month: "APR",
    year: 2024,
    type: "press-releases",
    description: "Media coverage on JETAMA's plan to develop floating solar power at Babagon Dam.",
    image: babagonImage,
  },
  {
    title: "Perbarisan Sempena Sambutan Hari Kebangsaan Peringkat Negeri Sabah 2023",
    date: "Thursday, 31 August 2023",
    day: "31",
    month: "AUG",
    year: 2023,
    type: "gallery",
    description: "JETAMA participation in the Sabah state-level National Day parade celebration.",
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
    description: "Celebration of JETAMA's 30th anniversary together with Hari Raya Aidilfitri gathering.",
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
    description: "Annual appreciation night recognising teamwork, service and contribution across JETAMA Group.",
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
    description: "Integrity and anti-corruption programme held as part of corporate governance commitment.",
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
    description: "Gallery update for the electrochlorination system at Papar Water Treatment Plant.",
    image: paparImage,
  },
];

const typeOptions: Array<{ value: FilterType; label: string }> = [
  { value: "all", label: "All" },
  { value: "gallery", label: "Events" },
  { value: "videos", label: "Videos" },
  { value: "press-releases", label: "News" },
];

function getTypeLabel(type: NewsType) {
  if (type === "videos") return "Video";
  if (type === "press-releases") return "News";
  if (type === "announcement") return "Announcement";
  return "Event";
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

function EventDarkTheme() {
  return (
    <style>{`
      @keyframes newsGlowMove {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .55; }
        50% { transform: translate3d(24px,-18px,0) rotate(2deg); opacity: .95; }
      }
      @keyframes newsFadeUp {
        from { opacity: 0; transform: translateY(28px); filter: blur(8px); }
        to { opacity: 1; transform: translateY(0); filter: blur(0); }
      }
      @keyframes newsSpotlight {
        0%, 100% { transform: rotate(-10deg) translateX(-4%); opacity: .35; }
        50% { transform: rotate(-7deg) translateX(8%); opacity: .72; }
      }
      .event-dark-page { background: #120d0b; color: #fff7ea; }
      .event-hero-title { animation: newsFadeUp .8s cubic-bezier(.2,.8,.2,1) both; }
      .event-fade-up { animation: newsFadeUp .8s cubic-bezier(.2,.8,.2,1) both; }
      .event-spotlight { animation: newsSpotlight 8s ease-in-out infinite; }
      .event-glow { animation: newsGlowMove 10s ease-in-out infinite; }
      .event-gold-text { color: #f7b552; text-shadow: 0 0 24px rgba(247,181,82,.28); }
      .event-card-border { box-shadow: 0 0 0 1px rgba(214,132,45,.75), 0 18px 52px rgba(0,0,0,.48); }
      .event-card-border:hover { box-shadow: 0 0 0 1px rgba(255,198,101,.95), 0 24px 70px rgba(214,132,45,.24); }
      .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    `}</style>
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

  const currentSlide = featuredNews[activeSlide] || allNewsItems[0];
  const eventItems = visibleItems.filter((item) => item.type === "gallery").slice(0, 4);
  const newsList = visibleItems.filter((item) => item.type !== "gallery").slice(0, 4);
  const archiveItems = visibleItems.slice(0, 6);

  return (
    <main className="event-dark-page min-h-screen overflow-hidden text-[#fff7ea]">
      <EventDarkTheme />

      <section className="relative min-h-[680px] overflow-hidden bg-[#120d0b] pt-28">
        <img
          key={currentSlide.title}
          src={currentSlide.image}
          alt={currentSlide.title}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#120d0b]/70 to-[#120d0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,190,85,.18),transparent_34%)]" />
        <div className="event-spotlight absolute left-[18%] top-0 h-[560px] w-[120px] origin-top bg-gradient-to-b from-[#ffd16a]/50 via-[#d7832d]/18 to-transparent blur-xl" />
        <div className="event-spotlight absolute right-[19%] top-0 h-[560px] w-[120px] origin-top bg-gradient-to-b from-[#ffd16a]/45 via-[#d7832d]/16 to-transparent blur-xl [animation-delay:1.4s]" />
        <div className="event-glow absolute -left-28 bottom-24 h-72 w-72 rounded-full bg-[#d7832d]/22 blur-3xl" />
        <div className="event-glow absolute -right-24 top-32 h-80 w-80 rounded-full bg-[#f5a623]/18 blur-3xl [animation-delay:2s]" />

        <div className="relative mx-auto flex min-h-[552px] max-w-7xl flex-col justify-center px-4 pb-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 flex items-center justify-center gap-2 text-sm font-semibold text-white/74">
            <Link to="/" className="transition hover:text-[#f7b552]">Home</Link>
            <ChevronRight size={16} />
            <span className="text-[#f7b552]">News & Events</span>
          </div>

          <p className="event-fade-up mx-auto mb-5 w-fit rounded-full border border-[#d7832d]/50 bg-black/35 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#f7b552] backdrop-blur">
            Jetama Updates
          </p>

          <h1 className="event-hero-title mx-auto max-w-5xl font-serif text-5xl font-semibold italic leading-tight text-[#f7b552] sm:text-6xl lg:text-7xl">
            Discover Our News &<br /> Memorable Events
          </h1>

          <p className="event-fade-up mx-auto mt-7 max-w-3xl text-sm font-medium leading-7 text-white/82 sm:text-base">
            Follow JETAMA's latest events, media updates, corporate activities and community highlights through a clean editorial showcase.
          </p>

          <div className="event-fade-up mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#events"
              className="rounded-md bg-gradient-to-b from-[#f5c26a] to-[#b66a2d] px-8 py-3 text-sm font-black text-white shadow-[0_16px_35px_rgba(214,132,45,.28)] transition hover:-translate-y-1"
            >
              Explore Events
            </a>
            <a
              href="#news-archive"
              className="rounded-md border border-[#d7832d]/60 bg-black/35 px-8 py-3 text-sm font-black text-[#f7b552] backdrop-blur transition hover:-translate-y-1 hover:bg-[#d7832d] hover:text-white"
            >
              View News
            </a>
          </div>
        </div>
      </section>

      <section id="events" className="relative bg-[#120d0b] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-semibold text-[#f7b552]">Events</h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/72">
              Browse recent gallery moments and corporate activities from JETAMA.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(eventItems.length ? eventItems : allNewsItems.slice(0, 4)).map((item) => (
              <article key={`${item.title}-${item.date}`} className="group text-center">
                <div className="event-card-border overflow-hidden rounded-md bg-[#1b1411] p-[2px] transition duration-500 group-hover:-translate-y-2">
                  <div className="h-40 overflow-hidden rounded-[5px] bg-black">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="mt-4 line-clamp-2 text-lg font-black text-[#d98534]">{item.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">{item.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#120d0b] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-semibold text-[#f7b552]">Services</h2>
            <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-white/70">
              Our news and events platform brings together media coverage, image galleries, video highlights and corporate announcements in one curated space.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Gallery", "Corporate events, celebrations, programmes and community moments.", ImageIcon],
              ["Videos", "Video coverage, project highlights and multimedia updates.", Play],
              ["News", "Press releases, media stories and key corporate announcements.", Newspaper],
            ].map(([title, text, Icon]) => {
              const ServiceIcon = Icon as typeof ImageIcon;
              return (
                <div key={title as string} className="rounded-md border border-[#8a542b]/45 bg-[#1a1310] p-7 text-center shadow-[0_18px_55px_rgba(0,0,0,.35)] transition hover:-translate-y-2 hover:border-[#d98534]">
                  <ServiceIcon className="mx-auto mb-5 text-[#f7b552]" size={36} />
                  <h3 className="text-xl font-black text-[#d98534]">{title as string}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">{text as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="news-archive" className="bg-[#17110f] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <h2 className="font-serif text-4xl font-semibold text-[#f7b552]">Latest News</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/68">
                Search and filter updates by event, video or news category.
              </p>

              <div className="mt-8 rounded-md border border-[#8a542b]/50 bg-[#120d0b] p-5 shadow-[0_18px_55px_rgba(0,0,0,.35)]">
                <label className="relative block">
                  <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d98534]" />
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search news, event or year..."
                    className="h-12 w-full rounded-md border border-[#8a542b]/40 bg-[#211815] pl-11 pr-4 text-sm font-semibold text-white outline-none placeholder:text-white/35 focus:border-[#f7b552]"
                  />
                </label>

                <div className="mt-4 flex flex-wrap gap-3">
                  {typeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedType(option.value)}
                      className={`rounded-md px-4 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
                        selectedType === option.value
                          ? "bg-[#d98534] text-white"
                          : "bg-[#211815] text-white/65 hover:bg-[#d98534] hover:text-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {(newsList.length ? newsList : archiveItems.slice(0, 4)).map((item) => (
                <article key={`${item.title}-${item.date}`} className="group rounded-md border border-[#8a542b]/45 bg-[#120d0b] p-5 shadow-[0_18px_55px_rgba(0,0,0,.35)] transition hover:-translate-y-2 hover:border-[#d98534]">
                  <div className="flex gap-4">
                    <div className="h-24 w-28 shrink-0 overflow-hidden rounded-md border border-[#d98534]/50">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    </div>
                    <div className="min-w-0">
                      <div className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#d98534]">
                        {getTypeIcon(item.type)}
                        {getTypeLabel(item.type)} · {item.day} {item.month} {item.year}
                      </div>
                      <h3 className="line-clamp-2 text-lg font-black leading-snug text-white">{item.title}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/58">{item.description}</p>
                    </div>
                  </div>

                  {item.sourceUrl ? (
                    <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#f7b552] transition hover:text-white">
                      Read More <ExternalLink size={14} />
                    </a>
                  ) : (
                    <button className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#f7b552] transition hover:text-white">
                      View Update <ArrowRight size={14} />
                    </button>
                  )}
                </article>
              ))}
            </div>
          </div>

          {visibleItems.length === 0 && (
            <div className="mt-10 rounded-md border border-[#8a542b]/50 bg-[#120d0b] p-10 text-center">
              <p className="text-xl font-black text-[#f7b552]">No update found.</p>
              <p className="mt-2 text-white/55">Try another keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#120d0b] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-4xl font-semibold text-[#f7b552]">Gallery</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {archiveItems.map((item) => (
              <article key={`${item.title}-gallery-${item.date}`} className="group overflow-hidden rounded-md border border-[#8a542b]/50 bg-[#1a1310] shadow-[0_18px_55px_rgba(0,0,0,.35)] transition hover:-translate-y-2 hover:border-[#d98534]">
                <div className="relative h-60 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-md bg-[#d98534] px-3 py-2 text-center text-white shadow-lg">
                    <p className="text-2xl font-black leading-none">{item.day}</p>
                    <p className="text-[10px] font-black uppercase">{item.month}</p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#f7b552] backdrop-blur">
                      {getTypeIcon(item.type)} {getTypeLabel(item.type)}
                    </p>
                    <h3 className="line-clamp-2 text-xl font-black leading-tight text-white">{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
