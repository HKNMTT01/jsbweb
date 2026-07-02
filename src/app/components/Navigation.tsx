import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import logoImage from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";

type NavItem = {
  path: string;
  label: string;
  sub?: NavItem[];
};

type SearchResult = {
  path: string;
  label: string;
  parent?: string;
  category?: string;
  description?: string;
  keywords: string;
};

type SearchSuggestion = {
  label: string;
  path: string;
  parent?: string;
  category: string;
  description: string;
  aliases: string[];
};

const keywordSuggestions: SearchSuggestion[] = [
  {
    label: "Datuk Ahmad Naim Bin Uddang, PGDK",
    path: "/about/ceo-message",
    parent: "CEO's Message",
    category: "Leadership",
    description: "Chief Executive Officer profile and leadership message.",
    aliases: ["ceo", "chief executive officer", "datuk ahmad naim", "ahmad naim", "pgdk", "leadership message"],
  },
  {
    label: "Board of Directors",
    path: "/about/board-of-directors",
    parent: "About Us",
    category: "Leadership",
    description: "Board chairman and directors information.",
    aliases: ["bod", "board", "directors", "chairman", "datuk faisyal", "datuk sofian", "datuk peter", "dr akian"],
  },
  {
    label: "Top Level Management",
    path: "/about/top-level-management",
    parent: "About Us",
    category: "Leadership",
    description: "Senior General Managers and General Managers.",
    aliases: ["management", "gm", "sgm", "ir lo ho min", "wah keng yang", "ag ahmad zaki", "junidi", "jude abel"],
  },
  {
    label: "Company Profile",
    path: "/about/company-profile",
    parent: "About Us",
    category: "Corporate",
    description: "JETAMA background, concession and company overview.",
    aliases: ["company", "profile", "incorporated", "pcca", "history", "corporate overview"],
  },
  {
    label: "Concession Area",
    path: "/services/concession-area",
    parent: "Services & Facilities",
    category: "Coverage",
    description: "Kota Kinabalu, Tuaran, Telibong, Tamparuli, Moyog, Kasigui and Papar service coverage.",
    aliases: ["map", "coverage", "service area", "concession", "kota kinabalu", "tuaran", "telibong", "tamparuli", "moyog", "kasigui", "papar", "pipeline", "reservoir"],
  },
  {
    label: "Vision, Mission & Core Values",
    path: "/about/vision-mission-core-values",
    parent: "About Us",
    category: "Corporate",
    description: "W.A.T.E.R values and corporate direction.",
    aliases: ["vision", "mission", "core values", "water values", "well-being", "accountability", "teamwork", "excellence", "respect"],
  },
  {
    label: "Jetama Water Sdn. Bhd.",
    path: "/subsidiary/water",
    parent: "Subsidiaries",
    category: "Subsidiary",
    description: "Water operations, plants and facilities.",
    aliases: ["jetama water", "jwsb", "water subsidiary", "moyog wtp", "telibong wtp", "kasigui wtp", "treatment plant"],
  },
  {
    label: "Jetama Energy Sdn. Bhd.",
    path: "/subsidiary/energy",
    parent: "Subsidiaries",
    category: "Subsidiary",
    description: "Renewable energy subsidiary and clean energy direction.",
    aliases: ["jetama energy", "jesb", "energy subsidiary", "renewable", "solar", "clean energy"],
  },
  {
    label: "Jetama Alpine Pipe (Sabah) Sdn. Bhd.",
    path: "/jointventure/jetama-alpine-pipe",
    parent: "Joint Ventures",
    category: "Joint Venture",
    description: "Pipe manufacturing joint venture and certifications.",
    aliases: ["alpine", "pipe", "jetama alpine", "certification", "ssaw", "erw", "steel pipe"],
  },
  {
    label: "Solar PV Power Sdn. Bhd.",
    path: "/jointventure/solar-pv-power",
    parent: "Joint Ventures",
    category: "Joint Venture",
    description: "Large scale solar PV project in Labuan.",
    aliases: ["solar pv", "labuan", "large scale solar", "10mw", "photovoltaic", "solar power"],
  },
  {
    label: "Babagon Floating Solar",
    path: "/jointventure/jetama-babagon-floating-solar",
    parent: "Joint Ventures",
    category: "Joint Venture",
    description: "Floating solar development at Babagon Dam.",
    aliases: ["babagon", "floating solar", "dam solar", "13.21mw"],
  },
  {
    label: "Batu Sapi Solar",
    path: "/jointventure/jetama-batu-sapi-solar",
    parent: "Joint Ventures",
    category: "Joint Venture",
    description: "Batu Sapi solar joint venture information.",
    aliases: ["batu sapi", "sandakan", "15mw", "solar sandakan"],
  },
  {
    label: "Water Projects",
    path: "/projects/water-project/concession-project",
    parent: "Projects",
    category: "Projects",
    description: "Water infrastructure timeline and concession projects.",
    aliases: ["water project", "concession project", "babagon dam", "moyog", "reservoir", "uwss", "desalination", "water timeline"],
  },
  {
    label: "Industrial Water Project",
    path: "/projects/water-project/industrial-project",
    parent: "Projects",
    category: "Projects",
    description: "Solar-powered nano-filtration drinking water system.",
    aliases: ["industrial", "nano filtration", "drinking water", "remote area", "pulau berhala", "sukau", "kinabatangan"],
  },
  {
    label: "Commercial Water Project",
    path: "/projects/water-project/commercial-project",
    parent: "Projects",
    category: "Projects",
    description: "Bottled water factory and WAIG commercial updates.",
    aliases: ["commercial", "waig", "bottled water", "factory", "kkip", "sabah fc", "sponsorship"],
  },
  {
    label: "Renewable Energy Projects",
    path: "/projects/renewable-energy-project",
    parent: "Projects",
    category: "Projects",
    description: "Solar PV and renewable energy project timeline.",
    aliases: ["renewable energy project", "solar project", "labuan solar", "poic", "floating solar", "batu sapi"],
  },
  {
    label: "Sustainability",
    path: "/sustainability",
    parent: "Main Page",
    category: "ESG",
    description: "Environment, Social and Governance initiatives.",
    aliases: ["esg", "environment", "social", "governance", "sustainable", "sustainability report"],
  },
  {
    label: "News & Events",
    path: "/news",
    parent: "Main Page",
    category: "Updates",
    description: "Latest news, events, videos and gallery updates.",
    aliases: ["news", "events", "gallery", "video", "press release", "announcement", "kaamatan", "raya"],
  },
  {
    label: "Careers",
    path: "/careers",
    parent: "Main Page",
    category: "Jobs",
    description: "Career opportunities and vacancies.",
    aliases: ["career", "careers", "job", "jobs", "vacancy", "internship", "apply"],
  },
  {
    label: "Contact Us",
    path: "/contact",
    parent: "Main Page",
    category: "Contact",
    description: "Address, contact details and enquiry information.",
    aliases: ["contact", "address", "email", "phone", "location", "office"],
  },
];

function buildSearchKeywords(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ").toLowerCase();
}

function flattenNavItems(items: NavItem[], parent?: string): SearchResult[] {
  return items.flatMap((item) => {
    const current: SearchResult = {
      path: item.path,
      label: item.label,
      parent,
      category: parent ? "Navigation" : "Page",
      description: parent ? `Open ${item.label} under ${parent}.` : `Open ${item.label}.`,
      keywords: buildSearchKeywords(item.label, parent, item.path),
    };

    return [current, ...(item.sub ? flattenNavItems(item.sub, item.label) : [])];
  });
}

function normaliseSearch(value: string) {
  return value.trim().toLowerCase();
}

function scoreSearchResult(item: SearchResult, query: string) {
  if (!query) return 1;
  const label = item.label.toLowerCase();
  const parent = item.parent?.toLowerCase() ?? "";

  if (label === query) return 100;
  if (label.startsWith(query)) return 82;
  if (label.includes(query)) return 70;
  if (parent.includes(query)) return 48;
  if (item.keywords.includes(query)) return 40;

  const queryWords = query.split(/\s+/).filter(Boolean);
  const matchedWords = queryWords.filter((word) => item.keywords.includes(word)).length;
  return matchedWords ? matchedWords * 12 : 0;
}

function mergeSearchResults(results: SearchResult[]) {
  const map = new Map<string, SearchResult>();

  results.forEach((item) => {
    const key = `${item.path}-${item.label}`;
    if (!map.has(key)) map.set(key, item);
  });

  return Array.from(map.values());
}

function NavOceanWaveBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[122px] overflow-hidden bg-transparent opacity-100 transition-opacity duration-700 group-hover:opacity-0">
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/15 to-transparent" />

      <svg
        className="absolute -top-10 left-0 h-[150px] w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path
          d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z"
          fill="#F6A623"
          opacity="0.75"
        />
        <path
          d="M0,100 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z"
          fill="rgba(0, 63, 235, 0.75)"
        />
        <path
          d="M0,100 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z"
          fill="rgba(0, 255, 76, 0.66)"
        />
        <path
          d="M0,155 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z"
          fill="rgba(255, 255, 255, 0.24)"
        />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-white/35 to-white/85" />
      <div className="absolute left-[8%] top-4 h-5 w-5 animate-bounce rounded-full bg-white/70 blur-[1px]" />
      <div className="absolute left-[54%] top-1 h-7 w-5 animate-bounce rounded-full bg-white/60 blur-[1px]" />
      <div className="absolute right-[12%] top-8 h-4 w-4 animate-ping rounded-full bg-[#67D66F]/60" />
      <div className="absolute right-[5%] top-0 h-5 w-5 animate-bounce rounded-full bg-white/65 blur-[1px]" />

    </div>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { path: "/", label: "HOME" },
    {
      path: "/about",
      label: "ABOUT US",
      sub: [
        { label: "CEO's Message", path: "/about/ceo-message" },
        { label: "Company Profile", path: "/about/company-profile" },
        { label: "Board of Directors", path: "/about/board-of-directors" },
        { label: "Top Level Management", path: "/about/top-level-management" },
        { label: "Vision, Mission & Core Values", path: "/about/vision-mission-core-values" },
        { label: "Shareholders", path: "/about/shareholders" },
      ],
    },
    {
      path: "/services",
      label: "SERVICES & FACILITIES",
      sub: [
        { label: "Overview", path: "/services/overview" },
        { label: "Our Facilities", path: "/services/our-facilities" },
        { label: "Total Capability", path: "/services/total-capability" },
        { label: "Concession Area", path: "/services/concession-area" },
      ],
    },
    { path: "/sustainability", label: "SUSTAINABILITY" },
    {
      path: "/subsidiary",
      label: "SUBSIDIARIES",
      sub: [
        { label: "Jetama Water Sdn. Bhd.", path: "/subsidiary/water" },
        { label: "Jetama Energy Sdn. Bhd.", path: "/subsidiary/energy" },
      ],
    },
    {
      path: "/jointventure",
      label: "JOINT VENTURES",
      sub: [
        { label: "Jetama Alpine Pipe (Sabah) Sdn. Bhd.", path: "/jointventure/jetama-alpine-pipe" },
        { label: "Solar PV Power Sdn. Bhd.", path: "/jointventure/solar-pv-power" },
        { label: "Jetama Batu Sapi Solar Sdn. Bhd.", path: "/jointventure/jetama-batu-sapi-solar" },
        { label: "Jetama Babagon Floating Solar Sdn. Bhd.", path: "/jointventure/jetama-babagon-floating-solar" },
      ],
    },
    {
      path: "/projects",
      label: "PROJECTS",
      sub: [
        {
          label: "Water Project",
          path: "/projects/water-project/concession-project",
          sub: [
            { label: "Industrial Project", path: "/projects/water-project/industrial-project" },
            { label: "Commercial Project", path: "/projects/water-project/commercial-project" },
            { label: "Concession Project", path: "/projects/water-project/concession-project" },
          ],
        },
        { label: "Renewable Energy Project", path: "/projects/renewable-energy-project" },
      ],
    },
    { path: "/news", label: "NEWS & EVENTS" },
    { path: "/careers", label: "CAREERS" },
    { path: "/contact", label: "CONTACT US" },
  ];

  const searchIndex = useMemo(() => {
    const navResults = flattenNavItems(navItems);
    const keywordResults: SearchResult[] = keywordSuggestions.map((item) => ({
      path: item.path,
      label: item.label,
      parent: item.parent,
      category: item.category,
      description: item.description,
      keywords: buildSearchKeywords(item.label, item.parent, item.category, item.description, item.path, item.aliases.join(" ")),
    }));

    return mergeSearchResults([...keywordResults, ...navResults]);
  }, [navItems]);

  const cleanSearchQuery = normaliseSearch(searchQuery);

  const searchResults = useMemo(() => {
    if (!cleanSearchQuery) {
      return searchIndex
        .filter((item) => ["Leadership", "Projects", "Subsidiary", "Updates", "Jobs"].includes(item.category ?? ""))
        .slice(0, 8);
    }

    return searchIndex
      .map((item) => ({ item, score: scoreSearchResult(item, cleanSearchQuery) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label))
      .map(({ item }) => item)
      .slice(0, 10);
  }, [cleanSearchQuery, searchIndex]);

  function goToSearchResult(path?: string) {
    const targetPath = path ?? searchResults[0]?.path;
    if (!targetPath) return;

    navigate(targetPath);
    setSearchQuery("");
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  }

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    goToSearchResult();
  }

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="group fixed left-0 right-0 top-0 z-50">
      <NavOceanWaveBackground />

      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isMenuOpen
            ? "bg-gradient-to-r from-[#005AAA]/95 via-[#0077C8]/95 to-[#35B24A]/95 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "bg-transparent shadow-none backdrop-blur-0 group-hover:bg-gradient-to-r group-hover:from-[#005AAA]/95 group-hover:via-[#0077C8]/95 group-hover:to-[#35B24A]/95 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] group-hover:backdrop-blur-xl"
        }`}
      />

      <div className="pointer-events-none absolute left-0 top-0 h-[130px] w-[430px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_45%,rgba(255,255,255,.80),rgba(255,255,255,.34)_38%,transparent_78%)]" />
        <div className="absolute left-20 top-7 h-20 w-64 rounded-full bg-white/50 blur-[60px]" />
      </div>

      <div className="relative mx-auto flex h-[108px] max-w-[1680px] items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="flex w-[235px] shrink-0 items-center xl:w-[248px] 2xl:w-[255px]">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-24 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[60px]" />
            <div className="absolute left-1/2 top-1/2 h-20 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7dd3fc]/30 blur-[38px]" />
            <img
              src={logoImage}
              alt="JETAMA SDN BHD"
              className="relative z-10 h-[138px] w-auto object-contain drop-shadow-[0_10px_28px_rgba(255,255,255,0.75)] transition duration-300 hover:scale-145"
            />
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-4 xl:gap-5 2xl:gap-5 lg:flex">
          {navItems.map((item) => (
            <div key={item.path} className="group/item relative">
              <Link
                to={item.path}
                className={`relative flex items-center gap-1.5 whitespace-nowrap py-3 text-[12.5px] xl:text-[13px] 2xl:text-[13px] font-extrabold uppercase tracking-tight transition duration-300 ${
                  isActive(item.path)
                    ? "text-[#ffe04b]"
                    : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] hover:text-[#ffe04b]"
                }`}
              >
                {item.label}
                {item.sub && <ChevronDown size={14} strokeWidth={3} />}
                <span
                  className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#ffe04b] transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "w-0 group-hover/item:w-full"
                  }`}
                />
              </Link>

              {item.sub && (
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100">
                  <div className="overflow-visible rounded-b-2xl border border-white/70 bg-white/95 py-2 shadow-[0_24px_70px_rgba(0,90,170,0.22)] ring-1 ring-[#005AAA]/10 backdrop-blur-xl">
                    {item.sub.map((sub) => (
                      <div key={sub.label} className="group/sub relative">
                        <Link
                          to={sub.path}
                          className="flex items-center justify-between gap-3 px-5 py-3 text-sm font-extrabold text-[#052b4f] transition hover:bg-gradient-to-r hover:from-[#005AAA] hover:to-[#35B24A] hover:text-white"
                        >
                          <span>{sub.label}</span>
                          {sub.sub && <ChevronDown size={13} className="-rotate-90" strokeWidth={3} />}
                        </Link>

                        {sub.sub && (
                          <div className="invisible absolute left-full top-0 z-[80] w-64 translate-x-2 opacity-0 transition-all duration-300 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                            <div className="overflow-hidden rounded-r-2xl border border-white/70 bg-white/95 py-2 shadow-[0_24px_70px_rgba(0,90,170,0.22)] ring-1 ring-[#005AAA]/10 backdrop-blur-xl">
                              {sub.sub.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.path}
                                  className="block px-5 py-3 text-sm font-extrabold text-[#052b4f] transition hover:bg-gradient-to-r hover:from-[#005AAA] hover:to-[#35B24A] hover:text-white"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <form
            onSubmit={handleSearchSubmit}
            className="relative ml-2 mr-3 hidden shrink-0 2xl:block"
          >
            <div className="flex h-10 w-[150px] items-center gap-2 rounded-xl bg-white/20 px-3 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md transition group-hover:bg-white/90">
              <Search size={18} className="text-white transition group-hover:text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/80 transition group-hover:text-gray-700 group-hover:placeholder:text-gray-400"
              />
            </div>

            {isSearchOpen && (searchQuery || searchResults.length > 0) && (
              <div className="absolute right-0 top-12 z-[90] w-[310px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_70px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
                <div className="border-b border-slate-100 px-4 py-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#35B24A]">
                    Quick Search
                  </p>
                </div>

                {searchResults.length > 0 ? (
                  <div className="max-h-[360px] overflow-y-auto py-2">
                    {searchResults.map((result) => (
                      <button
                        key={`${result.parent ?? "main"}-${result.path}-${result.label}`}
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => goToSearchResult(result.path)}
                        className="block w-full px-4 py-3 text-left transition hover:bg-[#eef8ff]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-black text-[#052b4f]">
                              {result.label}
                            </p>
                            {result.description && (
                              <p className="mt-1 truncate text-xs font-semibold leading-5 text-slate-500">
                                {result.description}
                              </p>
                            )}
                            {result.parent && (
                              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#005AAA]">
                                {result.parent}
                              </p>
                            )}
                          </div>
                          {result.category && (
                            <span className="shrink-0 rounded-full bg-[#eaf8ef] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#17803a]">
                              {result.category}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-5 text-sm font-semibold text-slate-500">
                    No page found. Try “about”, “projects”, “careers” or “news”.
                  </div>
                )}
              </div>
            )}
          </form>
        </nav>

        <button
          className="ml-auto rounded-md bg-[#005AAA]/90 p-3 text-white shadow-lg lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="relative max-h-[calc(100vh-108px)] overflow-y-auto overscroll-contain border-t border-white/20 bg-[linear-gradient(135deg,rgba(0,90,170,.98)_0%,rgba(0,116,170,.96)_46%,rgba(53,178,74,.92)_100%)] p-5 pb-10 shadow-[0_30px_90px_rgba(0,40,90,.35)] backdrop-blur-2xl lg:hidden">
          <div className="pointer-events-none absolute -left-20 top-12 h-52 w-52 rounded-full bg-white/18 blur-3xl" />
          <div className="pointer-events-none absolute right-[-80px] top-56 h-60 w-60 rounded-full bg-[#F6A623]/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/18 to-transparent" />

          <form onSubmit={handleSearchSubmit} className="relative z-10 mb-5">
            <div className="flex h-12 items-center gap-3 rounded-2xl border border-white/25 bg-white/18 px-4 shadow-[0_14px_35px_rgba(0,30,80,.18)] ring-1 ring-white/20 backdrop-blur-md">
              <Search size={18} className="text-[#ffe04b]" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search website..."
                className="w-full bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/60"
              />
            </div>

            {searchQuery && (
              <div className="mt-3 max-h-[48vh] overflow-y-auto rounded-2xl bg-white/95 shadow-xl">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <button
                      key={`mobile-${result.parent ?? "main"}-${result.path}-${result.label}`}
                      type="button"
                      onClick={() => goToSearchResult(result.path)}
                      className="block w-full border-b border-slate-100 px-4 py-3 text-left last:border-b-0"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-black text-[#052b4f]">{result.label}</p>
                          {result.description && (
                            <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                              {result.description}
                            </p>
                          )}
                          {result.parent && (
                            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#005AAA]">
                              {result.parent}
                            </p>
                          )}
                        </div>
                        {result.category && (
                          <span className="rounded-full bg-[#eaf8ef] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#17803a]">
                            {result.category}
                          </span>
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-4 text-sm font-semibold text-slate-500">
                    No page found.
                  </p>
                )}
              </div>
            )}
          </form>

          <div className="relative z-10 space-y-2">
          {navItems.map((item) => (
            <div key={item.path} className="mb-2">
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.06em] transition ${
                  isActive(item.path)
                    ? "bg-white text-[#005AAA] shadow-[0_14px_35px_rgba(0,40,90,.18)]"
                    : "border border-white/10 bg-white/[.07] text-white hover:border-white/25 hover:bg-white/[.16]"
                }`}
              >
                {item.label}
              </Link>

              {item.sub && (
                <div className="mt-1 space-y-1 pl-4">
                  {item.sub.map((sub) => (
                    <div key={sub.label}>
                      <Link
                        to={sub.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-xl border border-white/0 bg-white/[.04] px-4 py-2.5 text-sm font-semibold text-white/86 transition hover:border-white/20 hover:bg-white/[.14] hover:text-white"
                      >
                        {sub.label}
                      </Link>

                      {sub.sub && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-white/25 pl-3">
                          {sub.sub.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block rounded-xl px-4 py-2 text-sm font-semibold text-white/72 transition hover:bg-white/[.14] hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          </div>
        </nav>
      )}
    </header>
  );
}