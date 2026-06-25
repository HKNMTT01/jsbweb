import { useEffect } from "react";
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
import jesbLogo from "@/assets/LOGO-JESB.png";
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
  accentSoft: string;
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
    accentSoft: "#eaf6ff",
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
    accent: "#f5a623",
    accentSoft: "#fff7e6",
    path: "/subsidiary/energy",
  },
};

const subsidiariesNavigation = Object.values(subsidiaryPages).map((page) => ({
  label: page.shortTitle,
  path: page.path,
  icon: page.icon,
}));

function SectionHero({ page }: { page: SubsidiaryPage }) {
  const Icon = page.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-white">
      <div className="absolute inset-x-0 top-0 h-[350px] overflow-hidden">
        <img
          src={page.hero}
          alt={page.title}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061b46]/85 via-[#0b2f7f]/60 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white text-[#0b2f7f] shadow-[0_20px_55px_rgba(0,44,85,0.28)]">
            <Icon size={46} />
          </div>

          <p
            className="mx-auto mt-8 inline-flex items-center rounded-full border border-white/40 bg-white/90 px-5 py-3 text-xs font-black uppercase tracking-[0.25em] shadow-sm backdrop-blur"
            style={{ color: page.accent }}
          >
            {page.eyebrow}
          </p>

          <h1 className="mt-8 text-4xl font-black text-[#102f83] sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            {page.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

function DetailBreadcrumb({ page }: { page: SubsidiaryPage }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
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

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="relative -mt-3 h-fit bg-transparent px-4 py-0">
      <div className="mb-1 flex justify-start">
        <img src={jetamaLogo} alt="JETAMA" className="h-[88px] w-auto object-contain" />
      </div>

      <nav className="-mt-2 space-y-1">
        {subsidiariesNavigation.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-white text-[#005AAA] shadow-sm"
                  : "text-slate-800 hover:bg-white hover:text-[#005AAA]"
              }`}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

function OceanWaveDivider() {
  return (
    <div className="pointer-events-none relative -mt-8 h-28 overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-transparent via-white/80 to-white" />
      <div className="absolute left-[-5%] top-4 h-10 w-[110%] rounded-[50%] bg-white blur-2xl" />
      <div className="absolute left-[-10%] top-8 h-12 w-[120%] rounded-[50%] bg-white/95 blur-xl" />

      <svg className="absolute bottom-0 left-0 h-28 w-full" viewBox="0 0 1440 260" preserveAspectRatio="none">
        <path d="M0,45 C180,10 320,90 520,55 C720,20 900,95 1100,45 C1280,10 1360,25 1440,20 L1440,260 L0,260 Z" fill="rgba(255,255,255,1)" />
        <path d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z" fill="rgba(248,255,250,.98)" />
        <path d="M0,105 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z" fill="rgba(103,214,111,.50)" />
        <path d="M0,130 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z" fill="rgba(65,182,80,.72)" />
        <path d="M0,160 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z" fill="rgba(0,84,166,.80)" />
        <path d="M0,190 C260,140 530,205 770,175 C990,145 1190,205 1380,175 C1410,170 1430,168 1440,166 L1440,260 L0,260 Z" fill="rgba(0,70,145,.90)" />
        <path d="M0,215 C300,170 560,225 820,200 C1080,175 1260,220 1440,195 L1440,260 L0,260 Z" fill="rgba(0,59,122,.96)" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#41B650]/20 via-white/50 to-[#0054A6]/20 blur-xl" />
    </div>
  );
}

function SubsidiaryIntroCard({ page, children }: { page: SubsidiaryPage; children: React.ReactNode }) {
  const Icon = page.icon;

  return (
    <article className="scroll-reveal">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#dcebf3] bg-gradient-to-br from-white via-[#f8fbff] to-[#effaf3] p-6 shadow-[0_24px_70px_rgba(0,90,170,0.08)] sm:p-8 lg:p-10">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#005AAA]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#41B650]/12 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="rounded-[2rem] border border-white bg-white/80 p-7 text-center shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
            <img src={page.logo} alt={page.title} className="mx-auto max-h-40 w-auto object-contain" />

            <div
              className="mx-auto mt-7 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: page.accent }}
            >
              <Icon size={32} />
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.25em]" style={{ color: page.accent }}>
              {page.eyebrow}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black leading-tight text-[#005AAA] lg:text-4xl">
              {page.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              {page.subtitle}
            </p>
            <div className="mt-7 space-y-4">{children}</div>
          </div>
        </div>
      </section>
    </article>
  );
}

function InfoPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <CheckCircle2 className="mt-1 shrink-0 text-[#41B650]" size={18} />
      <p className="text-sm leading-7 text-slate-700">{children}</p>
    </div>
  );
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: typeof Building2 }) {
  return (
    <div className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-2 hover:border-[#41B650]/60 hover:shadow-[0_24px_70px_rgba(0,90,170,0.14)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8ff] text-[#005AAA] transition group-hover:bg-[#005AAA] group-hover:text-white">
        <Icon size={24} />
      </div>
      <p className="text-3xl font-black text-[#052b4f]">{value}</p>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
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
    <div className="space-y-8">
      <SubsidiaryIntroCard page={page}>
        <InfoPoint>
          Jetama Water Sdn. Bhd. supports water treatment operations and potable water supply services for Kota Kinabalu and selected West Coast areas.
        </InfoPoint>
        <InfoPoint>
          The company operates key water treatment facilities, transmission mains, service reservoirs and related water supply infrastructure.
        </InfoPoint>
        <InfoPoint>
          Its role is focused on reliable treated water production, operational maintenance and service continuity.
        </InfoPoint>
      </SubsidiaryIntroCard>

      <section className="scroll-reveal grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard value="6" label="Treatment Plants" icon={Factory} />
        <StatCard value="30" label="Service Reservoirs" icon={Building2} />
        <StatCard value="200 km" label="Transmission Mains" icon={Network} />
        <StatCard value="1" label="Babagon Dam" icon={Droplets} />
      </section>

      <section className="scroll-reveal rounded-[2.5rem] border border-[#dcebf3] bg-white p-6 shadow-[0_24px_70px_rgba(0,90,170,0.08)] sm:p-8">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#41B650]">Key Facilities</p>
            <h3 className="mt-3 text-2xl font-black text-[#005AAA]">Main Water Treatment Plants</h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Simple preview of important facilities under the water operations portfolio.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {plants.map((plant) => (
            <article key={plant.title} className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(0,90,170,0.14)]">
              <div className="h-48 overflow-hidden">
                <img src={plant.image} alt={plant.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-black text-[#052b4f]">{plant.title}</h4>
                <p className="mt-2 inline-flex rounded-full bg-[#eaf8ef] px-3 py-1 text-sm font-black text-[#087629]">{plant.capacity}</p>
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
    "Renewable energy development",
    "Low-carbon project initiatives",
    "Sustainable energy business growth",
    "Strategic clean energy partnerships",
  ];

  return (
    <div className="space-y-8">
      <SubsidiaryIntroCard page={page}>
        <InfoPoint>
          Jetama Energy Sdn. Bhd. supports renewable energy development and sustainable power initiatives for Sabah.
        </InfoPoint>
        <InfoPoint>
          The subsidiary focuses on solar energy opportunities, clean energy partnerships and practical low-carbon project delivery.
        </InfoPoint>
        <InfoPoint>
          Its direction supports Sabah’s transition towards sustainable energy and reduced carbon footprint.
        </InfoPoint>
      </SubsidiaryIntroCard>

      <section className="scroll-reveal rounded-[2.5rem] border border-orange-100 bg-gradient-to-br from-white via-[#fffaf0] to-white p-6 shadow-[0_24px_70px_rgba(0,90,170,0.08)] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5a623]">Energy Focus</p>
            <h3 className="mt-3 text-3xl font-black text-[#052b4f]">Clean Energy Direction</h3>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Jetama Energy helps expand the group’s renewable energy presence through focused project planning and sustainable development.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
              <div key={item} className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(245,166,35,0.13)]">
                <SunMedium className="mb-4 text-[#f5a623]" size={28} />
                <p className="text-sm font-black uppercase leading-6 text-[#052b4f]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolarProjectSection compact />
    </div>
  );
}


function SolarProjectSection({ compact = false }: { compact?: boolean }) {
  const milestones = [
    "Letter of Acceptance of Offer from ST received on 28 November 2017.",
    "Power Purchase Agreement signed on 15 December 2021.",
    "Commercial operations achieved on 9 February 2024.",
  ];

  return (
    <section className="scroll-reveal rounded-[2.5rem] border border-orange-100 bg-white p-6 shadow-[0_24px_70px_rgba(0,90,170,0.08)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5a623]">Solar Project</p>
          <h3 className="mt-3 text-3xl font-black leading-tight text-[#052b4f]">
            10MWac Large Scale Solar PV Project
          </h3>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Large Scale Solar Photovoltaic Plant located at Kg Bukit Kalam, Federal Territory Labuan, developed to support clean energy generation.
          </p>

          {!compact && (
            <p className="mt-4 text-base leading-8 text-slate-700">
              The project contributes approximately 23 Gigawatt hours of power per year and supports carbon reduction compared with conventional generation sources.
            </p>
          )}

          <div className="mt-6 space-y-3">
            {milestones.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-[#fff7e6] p-4">
                <SunMedium className="mt-1 shrink-0 text-[#f5a623]" size={18} />
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_22px_60px_rgba(0,44,85,0.12)]">
          <img src={solarPlantImage} alt="10MWac Large Scale Solar PV Plant" className="h-[360px] w-full object-cover" />
          <div className="flex items-center justify-between bg-[#102f83] px-6 py-4 text-white">
            <span className="text-sm font-black uppercase">F.T. Labuan Solar PV Plant</span>
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
    <main className="overflow-hidden bg-white pt-32 text-slate-900 selection:bg-[#fbf234] selection:text-[#062A44]">
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <DetailBreadcrumb page={page} />
      </div>

      <SectionHero page={page} />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_42%,#eefaf3_100%)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-96 w-96 animate-pulse rounded-full bg-[#005AAA]/8 blur-3xl" />
          <div className="absolute right-[-9rem] top-36 h-[28rem] w-[28rem] animate-pulse rounded-full bg-[#41B650]/10 blur-3xl" />
          <div className="absolute left-1/3 top-16 h-40 w-40 rounded-full bg-[#F5A623]/8 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,90,170,0.08)_1px,transparent_0)] [background-size:28px_28px] opacity-40" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-7 lg:grid-cols-[260px_1fr]">
          <Sidebar />

          <main className="min-w-0">
            <CurrentContent selected={selected} />
          </main>
        </div>
      </section>
    </main>
  );
}
