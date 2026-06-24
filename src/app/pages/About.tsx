import { Link } from "react-router";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Droplets,
  Landmark,
  Leaf,
  MapPinned,
  ShieldCheck,
  Target,
  UsersRound,
  Waves,
  CheckCircle2,
} from "lucide-react";

import jetamaHero from "../../assets/jetama-dam-hero.jpg";
import moyogPlant from "../../assets/solarlaunching.png";

function OceanWaveDivider() {
  return (
    <div className="pointer-events-none relative -mt-20 h-44 overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-transparent via-white/25 to-white/70" />
      <div className="absolute left-[-5%] top-8 h-10 w-[110%] rounded-[50%] bg-white/55 blur-2xl" />
      <div className="absolute left-[-10%] top-14 h-12 w-[120%] rounded-[50%] bg-white/60 blur-xl" />

      <svg
        className="absolute -bottom-4 left-0 h-44 w-full"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path d="M0,45 C180,10 320,90 520,55 C720,20 900,95 1100,45 C1280,10 1360,25 1440,20 L1440,260 L0,260 Z" fill="rgba(255,255,255,1)" />
        <path d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z" fill="rgba(248,255,250,.98)" />
        <path d="M0,105 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z" fill="rgba(103,214,111,.50)" />
        <path d="M0,130 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z" fill="rgba(65,182,80,.72)" />
        <path d="M0,160 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z" fill="rgba(0,84,166,.80)" />
        <path d="M0,190 C260,140 530,205 770,175 C990,145 1190,205 1380,175 C1410,170 1430,168 1440,166 L1440,260 L0,260 Z" fill="rgba(0,70,145,.90)" />
        <path d="M0,215 C300,170 560,225 820,200 C1080,175 1260,220 1440,195 L1440,260 L0,260 Z" fill="rgba(0,59,122,.96)" />
      </svg>

      <div className="absolute bottom-24 left-[8%] h-8 w-5 animate-bounce rounded-full bg-white/80 blur-[1px]" />
      <div className="absolute bottom-36 left-[10%] h-4 w-4 animate-ping rounded-full bg-[#67D66F]/90" />
      <div className="absolute bottom-28 left-[48%] h-10 w-6 animate-bounce rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,.8)]" />
      <div className="absolute bottom-40 left-[50%] h-4 w-4 animate-ping rounded-full bg-[#41B650]" />
      <div className="absolute bottom-26 right-[12%] h-9 w-5 animate-bounce rounded-full bg-white/80" />
      <div className="absolute bottom-38 right-[10%] h-5 w-5 animate-ping rounded-full bg-[#67D66F]/90" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#41B650]/20 via-white/50 to-[#0054A6]/20 blur-xl" />
    </div>
  );
}

export default function About() {
  const quickLinks = [
    { title: "CEO's Message", text: "Leadership message and strategic direction.", href: "/about/ceo-message", icon: UsersRound },
    { title: "Company Profile", text: "Background, role and corporate information.", href: "/about/company-profile", icon: Building2 },
    { title: "Board of Directors", text: "The board guiding JETAMA's governance.", href: "/about/board-of-directors", icon: Landmark },
    { title: "Top Level Management", text: "Management team behind operations.", href: "/about/top-level-management", icon: ShieldCheck },
    { title: "Vision, Mission & Core Values", text: "Purpose, direction and W.A.T.E.R values.", href: "/about/vision-mission-core-values", icon: Target },
    { title: "Shareholders & Concession Area", text: "Ownership and service coverage area.", href: "/about/shareholders", icon: MapPinned },
  ];

  const overview = [
    {
      label: "Who We Are",
      title: "A Sabah-owned water utility company.",
      text: "JETAMA Sdn. Bhd. was incorporated on 31 May 1988 and is wholly owned by the State Government of Sabah through Sabah Development Berhad under the Ministry of Finance, Sabah.",
      icon: Building2,
    },
    {
      label: "What We Do",
      title: "Reliable treated water services.",
      text: "The company supports treated water supply through water treatment operations, infrastructure development, technical capability and continuous service improvement.",
      icon: Droplets,
    },
    {
      label: "Our Direction",
      title: "Sustainable service excellence.",
      text: "JETAMA focuses on operational reliability, strong governance, safety, environmental responsibility and long-term value for communities and stakeholders.",
      icon: Leaf,
    },
  ];

  const values = [
    ["W", "Well-Being", "Prioritising people, safety and service responsibility."],
    ["A", "Accountability", "Taking ownership of decisions, outcomes and performance."],
    ["T", "Teamwork", "Working together across functions to deliver better results."],
    ["E", "Excellence", "Striving for quality, reliability and continuous improvement."],
    ["R", "Respect", "Building trust through professionalism and integrity."],
  ];

  const stats = [
    ["1988", "Incorporated"],
    ["1992", "PCCA Signed"],
    ["165 MLD", "Moyog Capacity"],
    ["70 km", "Pipeline Works"],
  ];

  const facilities = [
    "Moyog Water Treatment Plant",
    "Telibong Water Treatment Plant",
    "Kasigui Water Treatment Plant",
    "Papar Water Treatment Plant",
    "Tamparuli Water Treatment Plant",
    "Tuaran Water Treatment Plant",
  ];

  return (
    <div className="bg-[#F4F8FC] text-slate-900">
      <section className="relative overflow-hidden bg-[#062A44] pt-32 text-white">
        <img src={jetamaHero} alt="JETAMA" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(4,31,55,0.92)_0%,rgba(0,82,154,0.72)_56%,rgba(65,182,80,0.50)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/75">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={16} />
            <span className="text-white">About Us</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                About JETAMA Sdn. Bhd.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-9 text-white/90 sm:text-xl">
                A Sabah-based water utility organisation dedicated to reliable treated water supply,
                operational excellence and sustainable infrastructure development.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md shadow-[0_24px_70px_rgba(0,0,0,0.20)]">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#005AAA]">
                  <Waves size={28} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#B8FF6A]">
                    Corporate Slogan
                  </p>
                  <h2 className="mt-3 text-3xl font-black leading-tight">
                    Reliable Water Services For Sabah
                  </h2>
                  <p className="mt-4 leading-7 text-white/78">
                    Built on service reliability, technical capability and responsibility to the people we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-16 grid overflow-hidden rounded-[34px] bg-white text-[#062A44] shadow-[0_26px_80px_rgba(0,0,0,0.18)] md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="border-b border-slate-100 px-7 py-8 last:border-none md:border-b-0 md:border-r">
                <h3 className="text-4xl font-black text-[#005AAA] lg:text-5xl">{value}</h3>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.26em] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative z-10 -mt-10 overflow-hidden bg-white">
        <div className="grid min-h-[520px] lg:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[560px]">
            <img
              src={moyogPlant}
              alt="JETAMA Facility"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052b4f]/75 via-[#052b4f]/15 to-transparent" />
          </div>

          <div className="flex items-center bg-white px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-[#00A878]">
                What We Do
              </p>

              <h2 className="text-4xl font-black leading-tight text-[#073b69] md:text-5xl">
                Strengthening Sabah’s water services through capability, governance and innovation.
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                JETAMA plays an important role in supporting treated water supply in Sabah
                through reliable facilities, operational expertise and continuous improvement.
                The organisation is committed to building stronger water infrastructure and
                delivering dependable services for communities, industries and development areas.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                    Vision
                  </div>
                  <p className="mt-2 text-slate-700">
                    To be a regional water treatment company of choice.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                    Mission
                  </div>
                  <p className="mt-2 text-slate-700">
                    Reliable water supply of good quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-8 lg:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#042B4D] via-[#063B66] to-[#085A8C] p-8 shadow-[0_24px_80px_rgba(0,44,85,0.08)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <h2 className="mt-6 text-5xl font-black leading-[1.05] md:text-6xl">
                  <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]">
                    Explore
                  </span>

                  <span className="block bg-gradient-to-r from-white via-[#D8F7FF] to-[#8DFF9B] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(141,255,155,0.25)]">
                    JETAMA
                  </span>

                  <span className="block text-white/95">
                    in Detail.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">
                  Discover our leadership, corporate governance, strategic direction and organisational structure
                  through dedicated information pages.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-1.5 w-16 rounded-full bg-[#41B650]" />
                  <div className="h-1.5 w-8 rounded-full bg-[#00AEEF]" />
                  <div className="h-1.5 w-4 rounded-full bg-white/70" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#EAF7FF] via-[#F4FFFA] to-[#E8FFF0] p-6 shadow-[0_10px_30px_rgba(0,90,170,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#41B650]/30 hover:shadow-[0_20px_50px_rgba(0,90,170,0.18)]"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005AAA] to-[#41B650] text-white shadow-lg">
                          <Icon size={22} />
                        </div>

                        <ArrowRight
                          className="text-[#005AAA] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#41B650]"
                          size={20}
                        />
                      </div>

                      <h3 className="text-lg font-extrabold text-[#043A63] transition-colors group-hover:text-[#005AAA]">
                        {link.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {link.text}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}