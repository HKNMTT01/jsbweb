import { useEffect, type ReactNode } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Factory,
  Leaf,
  Network,
  ShieldCheck,
  SunMedium,
  Zap,
} from "lucide-react";

import energyHero from "@/assets/DJI_0298.jpg";
import waterHero from "@/assets/jetama-dam-hero.jpg";
import jesbLogo from "@/assets/jetama_energy.png";
import waterLogo from "@/assets/JETAMA WATER - 2.png";

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
  icon: page.icon,
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
    <aside className="scroll-reveal relative h-fit rounded-[28px] border border-slate-100 bg-white/70 p-4 shadow-[0_24px_70px_rgba(15,60,110,.08)] backdrop-blur-xl lg:sticky lg:top-28">
      <nav className="space-y-2">
        {subsidiariesNavigation.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`subsidiary-card-shine flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-black transition ${
                active
                  ? "bg-[#eaf8ef] text-[#16a34a] shadow-sm"
                  : "text-slate-700 hover:bg-white hover:text-[#005AAA] hover:shadow-sm"
              }`}
            >
              <Icon size={17} />
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
    <div className="scroll-reveal max-w-3xl">
      <p
        className="text-sm font-black uppercase tracking-[0.28em]"
        style={{ color: accent }}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 leading-8 text-slate-600">{text}</p>}
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
  const Icon = page.icon;

  return (
    <section id="details" className="scroll-reveal relative">
      <div className="max-w-4xl">
        <div
          className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
          style={{ backgroundColor: page.accent }}
        >
          <Icon size={28} />
        </div>

        <p
          className="text-sm font-black uppercase tracking-[0.28em]"
          style={{ color: page.secondAccent }}
        >
          {page.eyebrow}
        </p>

        <h2 className="mt-4 text-4xl font-black leading-tight text-[#005AAA] md:text-5xl">
          {page.title}
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">{page.subtitle}</p>

        <div className="mt-7 grid gap-4">{children}</div>
      </div>
    </section>
  );
}

function InfoPoint({ children }: { children: ReactNode }) {
  return (
    <div className="subsidiary-card-shine group relative overflow-hidden rounded-2xl border border-[#005AAA]/10 bg-white/75 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(0,90,170,.10)]">
      <div className="flex gap-3">
        <CheckCircle2 className="mt-1 shrink-0 text-[#41B650]" size={18} />
        <p className="text-sm leading-7 text-slate-700">{children}</p>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: typeof Building2;
}) {
  return (
    <div className="subsidiary-card-shine group relative overflow-hidden rounded-[24px] border border-[#005AAA]/10 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,60,110,.08)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,90,170,.16)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8ff] text-[#005AAA] transition group-hover:bg-[#005AAA] group-hover:text-white">
        <Icon size={24} />
      </div>
      <p className="text-3xl font-black text-[#005AAA]">{value}</p>
      <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-[#F6A623]">
        {label}
      </p>
    </div>
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
        <InfoPoint>
          Jetama Water Sdn. Bhd. supports water treatment operations and potable
          water supply services for Kota Kinabalu and selected West Coast areas.
        </InfoPoint>
        <InfoPoint>
          The company operates key water treatment facilities, transmission
          mains, service reservoirs and related water supply infrastructure.
        </InfoPoint>
        <InfoPoint>
          Its role is focused on reliable treated water production, operational
          maintenance and service continuity.
        </InfoPoint>
      </IntroBlock>

      <section className="scroll-reveal grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard value="6" label="Treatment Plants" icon={Factory} />
        <StatCard value="30" label="Service Reservoirs" icon={Building2} />
        <StatCard value="200 km" label="Transmission Mains" icon={Network} />
        <StatCard value="1" label="Babagon Dam" icon={Droplets} />
      </section>

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
      icon: SunMedium,
      title: "Renewable Energy Development",
      text: "Expanding practical clean energy initiatives and solar opportunities.",
    },
    {
      icon: Leaf,
      title: "Low-Carbon Direction",
      text: "Supporting Sabah’s transition toward more sustainable energy growth.",
    },
    {
      icon: ShieldCheck,
      title: "Sustainable Growth",
      text: "Building energy projects with long-term operational value.",
    },
    {
      icon: Zap,
      title: "Clean Partnerships",
      text: "Strengthening strategic collaborations for renewable energy delivery.",
    },
  ];

  return (
    <div className="space-y-20">
      <IntroBlock page={page}>
        <InfoPoint>
          Jetama Energy Sdn. Bhd. supports renewable energy development and
          sustainable power initiatives for Sabah.
        </InfoPoint>
        <InfoPoint>
          The subsidiary focuses on solar energy opportunities, clean energy
          partnerships and practical low-carbon project delivery.
        </InfoPoint>
        <InfoPoint>
          Its direction supports Sabah’s transition towards sustainable energy
          and reduced carbon footprint.
        </InfoPoint>
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
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="scroll-reveal subsidiary-card-shine group rounded-[26px] border border-[#F5A623]/10 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,60,110,.08)] backdrop-blur transition hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(245,166,35,.16)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff7e6] text-[#F5A623] transition group-hover:bg-[#F5A623] group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-black uppercase text-[#052b4f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            );
          })}
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
                <SunMedium
                  className="mt-1 shrink-0 text-[#F5A623]"
                  size={18}
                />
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
    <main className="subsidiary-sustainable-page min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900 selection:bg-[#fbf234] selection:text-[#062A44]">
      <CleanCorporateTheme />

      <SectionHero page={page} />

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_52%,#f8fff7_100%)]" />
        <div className="subsidiary-float-one absolute left-[-150px] top-24 -z-10 h-[380px] w-[380px] rotate-45 rounded-[72px] border border-[#005AAA]/10 bg-[#005AAA]/5" />
        <div className="subsidiary-float-two absolute right-[-170px] top-52 -z-10 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-[#35B24A]/15 bg-[#35B24A]/5" />
        <div className="absolute left-1/2 top-20 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#F5A623]/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[260px_1fr]">
          <Sidebar />
          <main className="min-w-0">
            <CurrentContent selected={selected} />
          </main>
        </div>
      </section>
    </main>
  );
}