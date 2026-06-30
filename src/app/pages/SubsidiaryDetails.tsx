import { useEffect, type ReactNode } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Droplets,
  Zap,
} from "lucide-react";

import energyHero from "@/assets/DJI_0298.jpg";
import waterHero from "@/assets/jetama-dam-hero.jpg";
import jesbLogo from "@/assets/jetama_energy.png";
import waterLogo from "@/assets/JETAMA WATER - 2.png";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";

import moyogPlant from "@/assets/MOYOG.jpg";
import telibongPlant from "@/assets/TELIBONG.jpg";
import kasiguiPlant from "@/assets/KASIGUI.jpg";
import solarPlantImage from "@/assets/pvplant.png";

type SubsidiaryKey = "water" | "energy";

type SubsidiaryPage = {
  key: SubsidiaryKey;
  title: string;
  shortTitle: string;
  subtitle: string;
  eyebrow: string;
  logo: string;
  hero: string;
  icon: typeof Building2;
  accent: string;
  secondAccent: string;
  path: string;
};

const subsidiaryPages: Record<SubsidiaryKey, SubsidiaryPage> = {
  water: {
    key: "water",
    title: "Jetama Water Sdn. Bhd.",
    shortTitle: "Jetama Water",
    subtitle:
      "A water operations subsidiary supporting potable water treatment, service reliability and infrastructure operation in Sabah.",
    eyebrow: "Water Operations",
    logo: waterLogo,
    hero: waterHero,
    icon: Droplets,
    accent: "#005AAA",
    secondAccent: "#35B24A",
    path: "/subsidiary/water",
  },
  energy: {
    key: "energy",
    title: "Jetama Energy Sdn. Bhd.",
    shortTitle: "Jetama Energy",
    subtitle:
      "A renewable energy subsidiary supporting sustainable energy development and low-carbon initiatives in Sabah.",
    eyebrow: "Renewable Energy",
    logo: jesbLogo,
    hero: energyHero,
    icon: Zap,
    accent: "#F5A623",
    secondAccent: "#005AAA",
    path: "/subsidiary/energy",
  },
};

const subsidiariesNavigation = Object.values(subsidiaryPages).map((page) => ({
  label: page.shortTitle,
  path: page.path,
}));

function DetailBreadcrumb({ page }: { page: SubsidiaryPage }) {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
      <Link to="/" className="transition hover:text-[#005AAA]">
        Home
      </Link>
      <ChevronRight size={15} className="text-slate-400" />
      <Link to="/subsidiary" className="transition hover:text-[#005AAA]">
        Subsidiaries
      </Link>
      <ChevronRight size={15} className="text-slate-400" />
      <span className="font-bold text-[#005AAA]">{page.shortTitle}</span>
    </div>
  );
}

function AccentRule() {
  return (
    <div className="my-6 flex items-center justify-center gap-3">
      <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
      <span className="h-[3px] w-10 rounded-full bg-[#41B650]" />
      <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
    </div>
  );
}

function SectionHero({ page }: { page: SubsidiaryPage }) {
  return (
    <section className="relative isolate overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={page.hero}
          alt={page.title}
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-[#f7fbff]" />
      </div>

      <div
        className="subsidiary-float-one absolute left-[-150px] top-20 -z-10 h-56 w-[520px] bg-[#005AAA]/[.07]"
        style={{ clipPath: "polygon(0 25%, 84% 0, 100% 70%, 12% 100%)" }}
      />
      <div
        className="subsidiary-float-two absolute right-[-150px] top-24 -z-10 h-60 w-[560px] bg-[#35B24A]/[.08]"
        style={{ clipPath: "polygon(9% 0, 100% 24%, 82% 100%, 0 72%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <DetailBreadcrumb page={page} />

        <div className="scroll-reveal flex min-h-[320px] flex-col items-center justify-center text-center">
          <img
            src={page.logo}
            alt={page.title}
            className="max-h-[170px] w-auto max-w-[620px] object-contain drop-shadow-[0_24px_45px_rgba(0,68,130,0.18)]"
          />

          <AccentRule />

          <p className="max-w-3xl font-serif text-[16px] italic leading-8 text-slate-700">
            {page.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="service-side-nav scroll-reveal relative -mt-3 h-fit bg-transparent px-4 py-0 lg:sticky lg:top-28">
      <div className="mb-1 flex justify-start">
        <img
          src={jetamaLogo}
          alt="JETAMA"
          className="h-[88px] w-auto object-contain"
        />
      </div>

      <nav className="-mt-2 space-y-1">
        {subsidiariesNavigation.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`subsidiary-card-shine flex items-center px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "active-link bg-white text-[#005AAA] shadow-sm"
                  : "text-slate-800 hover:bg-white hover:text-[#005AAA]"
              }`}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
  accent = "#35B24A",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  accent?: string;
}) {
  return (
    <div className="mb-8">
      <p
        className="text-xs font-black uppercase tracking-[0.28em]"
        style={{ color: accent }}
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-semibold italic leading-tight text-[#005AAA] sm:text-4xl">
        {title}
      </h2>
      <AccentRule />
      {text && (
        <p className="max-w-4xl text-justify text-base leading-8 text-slate-600">
          {text}
        </p>
      )}
    </div>
  );
}

function IntroBlock({
  page,
  children,
}: {
  page: SubsidiaryPage;
  children: ReactNode;
}) {
  return (
    <article className="scroll-reveal relative">
      <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-4 h-72 w-72 rounded-full bg-[#41B650]/8 blur-3xl" />

      <section className="relative">
        <div className="max-w-4xl">
          <p
            className="text-xs font-black uppercase tracking-[0.28em]"
            style={{ color: page.accent }}
          >
            {page.eyebrow}
          </p>

          <img
            src={page.logo}
            alt={page.title}
            className="mt-5 max-h-[118px] w-auto max-w-full object-contain drop-shadow-[0_18px_38px_rgba(0,68,130,0.14)]"
          />

          <AccentRule />

          <p className="max-w-4xl font-serif text-[16px] italic leading-8 text-slate-700 sm:text-[17px] sm:leading-9">
            {page.subtitle}
          </p>

          <div className="mt-8 max-w-4xl space-y-5 font-serif italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
            {children}
          </div>
        </div>
      </section>
    </article>
  );
}

function EditorialPoint({
  children,
  accent = "#005AAA",
}: {
  children: ReactNode;
  accent?: string;
}) {
  return (
    <p className="relative pl-5 text-justify text-[15px] leading-8 text-slate-700 sm:text-base">
      <span
        className="absolute left-0 top-3 h-10 w-[3px] rounded-full"
        style={{ background: `linear-gradient(180deg, ${accent}, #41B650)` }}
      />
      {children}
    </p>
  );
}

function JetamaWaterDetail() {
  const page = subsidiaryPages.water;

  const plants = [
    { title: "Moyog WTP", capacity: "165 MLD", image: moyogPlant },
    { title: "Telibong WTP", capacity: "64 MLD", image: telibongPlant },
    { title: "Kasigui WTP", capacity: "50 MLD", image: kasiguiPlant },
  ];

  return (
    <div className="space-y-20">
      <IntroBlock page={page}>
        <EditorialPoint accent={page.accent}>
          Jetama Water Sdn. Bhd. supports water treatment operations and potable
          water supply services for Kota Kinabalu and selected West Coast areas.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          The company operates key water treatment facilities, transmission
          mains, service reservoirs and related water supply infrastructure.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          Its role is focused on reliable treated water production, operational
          maintenance and service continuity.
        </EditorialPoint>
      </IntroBlock>

      <section>
        <div className="mb-10">
          <SectionTitle
            eyebrow="Key Facilities"
            title="Main Water Treatment Plants"
            text="Simple preview of important facilities under the water operations portfolio."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plants.map((plant) => (
            <article
              key={plant.title}
              className="scroll-reveal subsidiary-card-shine group relative overflow-hidden rounded-[30px] bg-white shadow-[0_18px_50px_rgba(15,60,110,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,90,170,.16)]"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-black text-[#052b4f]">
                  {plant.title}
                </h4>
                <p className="mt-3 inline-flex rounded-full bg-[#eaf8ef] px-4 py-2 text-sm font-black text-[#087629]">
                  {plant.capacity}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function JetamaEnergyDetail() {
  const page = subsidiaryPages.energy;

  const values = [
    {
      title: "Renewable Energy Development",
      text: "Expanding practical clean energy initiatives and solar opportunities.",
    },
    {
      title: "Low-Carbon Direction",
      text: "Supporting Sabah’s transition toward more sustainable energy growth.",
    },
    {
      title: "Sustainable Growth",
      text: "Building energy projects with long-term operational value.",
    },
    {
      title: "Clean Partnerships",
      text: "Strengthening strategic collaborations for renewable energy delivery.",
    },
  ];

  return (
    <div className="space-y-20">
      <IntroBlock page={page}>
        <EditorialPoint accent={page.accent}>
          Jetama Energy Sdn. Bhd. supports renewable energy development and
          sustainable power initiatives for Sabah.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          The subsidiary focuses on solar energy opportunities, clean energy
          partnerships and practical low-carbon project delivery.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          Its direction supports Sabah’s transition towards sustainable energy
          and reduced carbon footprint.
        </EditorialPoint>
      </IntroBlock>

      <section>
        <div className="mb-10">
          <SectionTitle
            eyebrow="Energy Focus"
            title="Clean Energy Direction"
            text="Jetama Energy helps expand the group’s renewable energy presence through focused project planning and sustainable development."
            accent="#F5A623"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((item) => (
            <article
              key={item.title}
              className="scroll-reveal subsidiary-card-shine group rounded-[26px] border border-[#F5A623]/10 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,60,110,.08)] backdrop-blur transition hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(245,166,35,.16)]"
            >
              <h3 className="font-serif text-2xl font-semibold italic leading-tight text-[#052b4f] transition group-hover:text-[#005AAA]">
                {item.title}
              </h3>
              <p className="mt-3 text-justify text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <SolarProjectSection />
    </div>
  );
}

function SolarProjectSection() {
  const milestones = [
    "Letter of Acceptance of Offer from ST received on 28 November 2017.",
    "Power Purchase Agreement signed on 15 December 2021.",
    "Commercial operations achieved on 9 February 2024.",
  ];

  return (
    <section className="scroll-reveal">
      <div className="grid gap-10 lg:grid-cols-[1fr_.95fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F5A623]">
            Solar Project
          </p>

          <h3 className="mt-4 text-4xl font-black uppercase leading-tight text-[#005AAA] md:text-5xl">
            10MWac Large Scale Solar PV Project
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Large Scale Solar Photovoltaic Plant located at Kg Bukit Kalam,
            Federal Territory Labuan, developed to support clean energy
            generation.
          </p>

          <div className="mt-7 space-y-3">
            {milestones.map((item) => (
              <div
                key={item}
                className="subsidiary-card-shine group flex gap-3 rounded-2xl border border-[#F5A623]/10 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(245,166,35,.12)]"
              >
                <span className="mt-2 h-10 w-[3px] shrink-0 rounded-full bg-gradient-to-b from-[#F5A623] to-[#41B650]" />
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[34px] bg-white shadow-[0_28px_80px_rgba(15,60,110,.16)]">
          <img
            src={solarPlantImage}
            alt="10MWac Large Scale Solar PV Plant"
            className="h-[380px] w-full object-cover"
          />
          <div className="flex items-center justify-between bg-[#005AAA] px-6 py-5 text-white">
            <span className="text-sm font-black uppercase tracking-wide">
              F.T. Labuan Solar PV Plant
            </span>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CurrentContent({ selected }: { selected: SubsidiaryKey }) {
  if (selected === "water") return <JetamaWaterDetail />;
  if (selected === "energy") return <JetamaEnergyDetail />;
  return null;
}

function CleanCorporateTheme() {
  return (
    <style>{`
      @keyframes jetamaFadeUp {
        from { opacity: 0; transform: translateY(28px); filter: blur(8px); }
        to { opacity: 1; transform: translateY(0); filter: blur(0); }
      }

      @keyframes jetamaSoftFloat {
        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: .55; }
        50% { transform: translate3d(18px, -14px, 0) rotate(2deg); opacity: .82; }
      }

      @keyframes jetamaShine {
        0% { transform: translateX(-150%) skewX(-18deg); opacity: 0; }
        28% { opacity: .45; }
        100% { transform: translateX(190%) skewX(-18deg); opacity: 0; }
      }

      .subsidiary-sustainable-page {
        background: #f7fbff;
      }

      .scroll-reveal {
        opacity: 0;
        transform: translateY(28px);
      }

      .scroll-reveal.scroll-visible {
        animation: jetamaFadeUp .82s cubic-bezier(.2,.8,.2,1) both;
      }

      .subsidiary-float-one {
        animation: jetamaSoftFloat 12s ease-in-out infinite;
      }

      .subsidiary-float-two {
        animation: jetamaSoftFloat 15s ease-in-out infinite reverse;
      }

      .subsidiary-card-shine {
        position: relative;
        overflow: hidden;
      }

      .subsidiary-card-shine::before {
        content: "";
        position: absolute;
        top: -50%;
        bottom: -50%;
        left: -35%;
        width: 28%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.42), transparent);
        transform: translateX(-150%) skewX(-18deg);
        pointer-events: none;
      }

      .subsidiary-card-shine:hover::before {
        animation: jetamaShine 1.9s ease;
      }

      .service-like-page {
        background: linear-gradient(135deg,#f8fbff 0%,#ffffff 42%,#eefaf3 100%);
        color: #0f2f44;
      }

      .service-like-shell {
        position: relative;
        isolation: isolate;
      }

      .service-like-shell::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 1px 1px, rgba(0,90,170,.055) 1px, transparent 0);
        background-size: 28px 28px;
        opacity: .42;
        pointer-events: none;
        z-index: -1;
      }

      .service-like-glow-blue {
        position: absolute;
        left: -8rem;
        top: 5rem;
        height: 24rem;
        width: 24rem;
        border-radius: 999px;
        background: rgba(0,90,170,.08);
        filter: blur(70px);
        pointer-events: none;
        z-index: -1;
      }

      .service-like-glow-green {
        position: absolute;
        right: -9rem;
        top: 8rem;
        height: 28rem;
        width: 28rem;
        border-radius: 999px;
        background: rgba(65,182,80,.10);
        filter: blur(80px);
        pointer-events: none;
        z-index: -1;
      }

      .service-like-glow-gold {
        position: absolute;
        left: 35%;
        top: 4rem;
        height: 12rem;
        width: 12rem;
        border-radius: 999px;
        background: rgba(245,166,35,.09);
        filter: blur(55px);
        pointer-events: none;
        z-index: -1;
      }

      .service-like-content {
        width: 100%;
        min-width: 0;
      }

      .service-like-content article,
      .service-like-content section {
        background: transparent !important;
        border-color: transparent !important;
        box-shadow: none !important;
      }

      .service-like-content article {
        overflow: visible !important;
      }

      .service-like-content h2,
      .service-like-content h3 {
        letter-spacing: -0.025em;
      }

      .service-like-content p {
        max-width: 72rem;
      }

      .service-like-content [class*="border"][class*="bg-white"],
      .service-like-content [class*="ring-1"] {
        border-color: rgba(0,90,170,.10) !important;
      }

      .service-like-content [class*="shadow-"] {
        box-shadow: 0 20px 65px rgba(0,90,170,.09) !important;
      }

      .service-side-nav {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        padding: 0 1rem !important;
      }

      .service-side-nav a {
        border-radius: 0 !important;
      }

      .service-side-nav a.active-link {
        background: #ffffff !important;
        color: #005AAA !important;
        box-shadow: 0 8px 24px rgba(0,90,170,.08) !important;
      }

      .service-side-nav a:not(.active-link) {
        color: #1e293b !important;
      }

      .service-side-nav a:not(.active-link):hover {
        background: #ffffff !important;
        color: #005AAA !important;
      }

    `}</style>
  );
}

export default function SubsidiaryDetails() {
  const { type } = useParams();
  const selected = type as SubsidiaryKey | undefined;

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -70px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [type]);

  if (!selected || !subsidiaryPages[selected]) {
    return <Navigate to="/subsidiary" replace />;
  }

  const page = subsidiaryPages[selected];

  return (
    <main className="subsidiary-sustainable-page service-like-page min-h-screen overflow-hidden text-slate-900 selection:bg-[#fbf234] selection:text-[#062A44]">
      <CleanCorporateTheme />

      <section className="service-like-shell relative z-10 px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="service-like-glow-blue" />
        <div className="service-like-glow-green" />
        <div className="service-like-glow-gold" />

        <div className="mx-auto max-w-[1540px]">
          <DetailBreadcrumb page={page} />
        </div>

        <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
          <Sidebar />

          <main className="service-like-content min-w-0 w-full">
            <CurrentContent selected={selected} />
          </main>
        </div>
      </section>
    </main>
  );
}
