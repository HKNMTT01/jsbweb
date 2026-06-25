import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";

type NavItem = {
  path: string;
  label: string;
  sub?: NavItem[];
};

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
  const location = useLocation();

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
        { label: "Concession Area", path: "/about/concession-area" },
      ],
    },
    {
      path: "/services",
      label: "SERVICES & FACILITIES",
      sub: [
        { label: "Overview", path: "/services/overview" },
        { label: "Our Facilities", path: "/services/our-facilities" },
        { label: "Total Capability", path: "/services/total-capability" },
      ],
    },
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

      <div className="relative mx-auto flex h-[108px] max-w-[1720px] items-center gap-6 px-8">
        <Link to="/" className="flex w-[260px] shrink-0 items-center">
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

        <nav className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          {navItems.map((item) => (
            <div key={item.path} className="group/item relative">
              <Link
                to={item.path}
                className={`relative flex items-center gap-1.5 whitespace-nowrap py-3 text-[13.5px] font-extrabold uppercase tracking-tight transition duration-300 ${
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
                  <div className="overflow-visible rounded-b-xl bg-[#2f3337]/95 py-2 shadow-[0_22px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    {item.sub.map((sub) => (
                      <div key={sub.label} className="group/sub relative">
                        <Link
                          to={sub.path}
                          className="flex items-center justify-between gap-3 px-5 py-3 text-sm font-bold text-white transition hover:bg-[#005AAA] hover:text-white"
                        >
                          <span>{sub.label}</span>
                          {sub.sub && <ChevronDown size={13} className="-rotate-90" strokeWidth={3} />}
                        </Link>

                        {sub.sub && (
                          <div className="invisible absolute left-full top-0 z-[80] w-64 translate-x-2 opacity-0 transition-all duration-300 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                            <div className="overflow-hidden rounded-r-xl bg-[#2f3337]/95 py-2 shadow-[0_22px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                              {sub.sub.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.path}
                                  className="block px-5 py-3 text-sm font-bold text-white transition hover:bg-[#005AAA] hover:text-white"
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

          <div className="ml-2 flex h-11 w-[210px] items-center gap-2 rounded-sm bg-white/20 px-4 shadow-[0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur-md transition group-hover:bg-white/90">
            <Search size={18} className="text-white transition group-hover:text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/80 transition group-hover:text-gray-700 group-hover:placeholder:text-gray-400"
            />
          </div>
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
        <nav className="relative border-t border-white/10 bg-[#2f3337]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <div key={item.path} className="mb-2">
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-bold uppercase ${
                  isActive(item.path) ? "bg-[#005AAA] text-white" : "text-white hover:bg-white/10"
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
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
                      >
                        {sub.label}
                      </Link>

                      {sub.sub && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-white/15 pl-3">
                          {sub.sub.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block rounded-lg px-4 py-2 text-sm font-semibold text-white/65 hover:bg-white/10 hover:text-white"
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
        </nav>
      )}
    </header>
  );
}