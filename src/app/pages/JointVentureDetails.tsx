import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  Handshake,
  Leaf,
  ShieldCheck,
  SunMedium,
  Wrench,
  X,
} from "lucide-react";

import heroImage from "@/assets/jetama-dam-hero.jpg";
import alpineLogo from "@/assets/Jetama Pipe - FINAL.png";
import certificationBoard from "@/assets/certAl.jpeg";
import jetamaEnergyLogo from "@/assets/LOGO-JESB.png";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";

type JointVentureKey =
  | "jetama-alpine-pipe"
  | "jetama-batu-sapi-solar"
  | "jetama-babagon-floating-solar";

type JointVenturePage = {
  key: JointVentureKey;
  title: string;
  shortTitle: string;
  subtitle: string;
  eyebrow: string;
  accent: string;
  accentSoft: string;
  logo: string;
  hero: string;
  path: string;
  icon: typeof Handshake;
};

const jointVenturePages: Record<JointVentureKey, JointVenturePage> = {
  "jetama-alpine-pipe": {
    key: "jetama-alpine-pipe",
    title: "Jetama Alpine Pipe (Sabah) Sdn. Bhd.",
    shortTitle: "Jetama Alpine Pipe",
    subtitle:
      "A joint venture supporting pipe manufacturing, technical capability and quality infrastructure solutions.",
    eyebrow: "Pipe Manufacturing JV",
    accent: "#d5282f",
    accentSoft: "#fff1f2",
    logo: alpineLogo,
    hero: heroImage,
    path: "/jointventure/jetama-alpine-pipe",
    icon: Factory,
  },
  "jetama-batu-sapi-solar": {
    key: "jetama-batu-sapi-solar",
    title: "Jetama Batu Sapi Solar Sdn. Bhd.",
    shortTitle: "Batu Sapi Solar",
    subtitle: "Information and project details will be announced in the future.",
    eyebrow: "Joint Venture Company",
    accent: "#f5a623",
    accentSoft: "#fff7e6",
    logo: jetamaLogo,
    hero: heroImage,
    path: "/jointventure/jetama-batu-sapi-solar",
    icon: Handshake,
  },
  "jetama-babagon-floating-solar": {
    key: "jetama-babagon-floating-solar",
    title: "Jetama Babagon Floating Solar Sdn. Bhd.",
    shortTitle: "Babagon Floating Solar",
    subtitle:
      "A renewable energy joint venture supporting the proposed floating solar development at Babagon Dam.",
    eyebrow: "Floating Solar JV",
    accent: "#35b24a",
    accentSoft: "#eaf8ef",
    logo: jetamaEnergyLogo,
    hero: heroImage,
    path: "/jointventure/jetama-babagon-floating-solar",
    icon: SunMedium,
  },
};

const jointVentureNavigation = Object.values(jointVenturePages).map((page) => ({
  label: page.shortTitle,
  path: page.path,
  icon: page.icon,
}));

const alpineScope = [
  {
    icon: Factory,
    title: "Pipe Production",
    text: "Supply and production of pipes and steel section products that meet stringent specifications and customer requirements.",
  },
  {
    icon: Wrench,
    title: "Technical Capability",
    text: "Driven by continuous improvement in pipe quality, forming process, tooling optimization and product development.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Supports reliable infrastructure through quality pipe products, research, development and experienced technical teams.",
  },
];

function SectionHero({ page }: { page: JointVenturePage }) {
  return (
    <section className="relative -mt-8 overflow-hidden bg-white pt-20 lg:-mt-10 lg:pt-24">
      <div className="absolute left-0 top-0 z-10 h-8 w-full bg-[#005AAA]" />

      <div className="relative h-[430px] overflow-hidden sm:h-[450px] lg:h-[470px]">
        <img
          src={page.hero}
          alt={page.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-black/20" />
        <div className="absolute -left-24 top-0 h-full w-[58%] -skew-x-12 bg-white/94 shadow-[40px_0_90px_rgba(255,255,255,0.78)]" />
        <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-[#41B650]/15 blur-3xl" />
        <div className="absolute left-48 bottom-10 h-64 w-64 rounded-full bg-[#005AAA]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white via-white/70 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl -translate-y-2">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
              <Link to="/" className="hover:text-[#005AAA]">
                Home
              </Link>
              <ChevronRight size={15} />
              <Link to="/jointventure" className="hover:text-[#005AAA]">
                Joint Ventures
              </Link>
              <ChevronRight size={15} />
              <span className="font-bold text-[#005AAA]">{page.shortTitle}</span>
            </div>

            <p
              className="mb-4 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.22em]"
              style={{ backgroundColor: page.accentSoft, color: page.accent }}
            >
              {page.eyebrow}
            </p>

            <h1 className="font-serif text-4xl font-normal leading-tight text-[#064C82] sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>

            <div className="mt-5 h-1 w-24 rounded-full bg-[#41B650]" />

            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-slate-700">
              {page.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="relative -mt-3 h-fit bg-transparent px-4 py-0">
      <div className="mb-1 flex justify-start">
        <img
          src={jetamaLogo}
          alt="JETAMA"
          className="h-[88px] w-auto object-contain"
        />
      </div>

      <nav className="-mt-2 space-y-1">
        {jointVentureNavigation.map((item) => {
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

      <svg
        className="absolute bottom-0 left-0 h-28 w-full"
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

      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#41B650]/20 via-white/50 to-[#0054A6]/20 blur-xl" />
    </div>
  );
}

function JointVentureIntroCard({
  page,
  children,
}: {
  page: JointVenturePage;
  children: React.ReactNode;
}) {
  const Icon = page.icon;

  return (
    <article className="scroll-reveal">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#dcebf3] bg-gradient-to-br from-white via-[#f8fbff] to-[#effaf3] p-6 shadow-[0_24px_70px_rgba(0,90,170,0.08)] sm:p-8 lg:p-10">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#005AAA]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#41B650]/12 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="rounded-[2rem] border border-white bg-white/80 p-7 text-center shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
            <img
              src={page.logo}
              alt={page.title}
              className="mx-auto max-h-40 w-auto object-contain"
            />

            <div
              className="mx-auto mt-7 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: page.accent }}
            >
              <Icon size={32} />
            </div>

            <p
              className="mt-5 text-xs font-black uppercase tracking-[0.25em]"
              style={{ color: page.accent }}
            >
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

function CapabilityCard({
  title,
  text,
  icon: Icon,
  accent,
}: {
  title: string;
  text: string;
  icon: typeof Factory;
  accent: string;
}) {
  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(0,44,85,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#41B650]/60 hover:shadow-[0_24px_70px_rgba(0,44,85,0.14)]">
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white transition group-hover:scale-110"
        style={{ backgroundColor: accent }}
      >
        <Icon size={27} />
      </div>
      <h3 className="text-xl font-black text-[#102f83]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function JetamaAlpinePipeDetail({ page }: { page: JointVenturePage }) {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <JointVentureIntroCard page={page}>
        <InfoPoint>
          Jetama Alpine Pipe (Sabah) Sdn. Bhd. is a joint venture company between Jetama Sdn. Bhd. and Alpine Pipe Manufacturing Sdn. Bhd.
        </InfoPoint>
        <InfoPoint>
          The company supports pipe production, steel section products and quality infrastructure solutions for customer requirements.
        </InfoPoint>
        <InfoPoint>
          Its focus includes SSAW and ERW pipe solutions, supported by technical knowledge, product improvement and quality assurance.
        </InfoPoint>
      </JointVentureIntroCard>

      <section className="scroll-reveal grid gap-6 md:grid-cols-3">
        {alpineScope.map((item) => (
          <CapabilityCard
            key={item.title}
            title={item.title}
            text={item.text}
            icon={item.icon}
            accent={page.accent}
          />
        ))}
      </section>

      <section className="scroll-reveal rounded-[2.5rem] border border-[#dcebf3] bg-[#f8fbff] p-6 shadow-[0_24px_70px_rgba(0,90,170,0.08)] sm:p-8">
        <div className="mb-8 text-center">
          <Handshake className="mx-auto mb-4 text-[#d5282f]" size={40} />
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d5282f]">
            Shareholding
          </p>
          <h3 className="mt-3 text-3xl font-black text-[#052b4f]">
            Joint Venture Structure
          </h3>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <ShareCard name="Jetama Sdn. Bhd." percent="51%" />
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d5282f] text-white shadow-xl">
            <Handshake size={36} />
          </div>
          <ShareCard name="Alpine Pipe Manufacturing Sdn. Bhd." percent="49%" />
        </div>
      </section>

      <section className="scroll-reveal rounded-[2.5rem] border border-[#dcebf3] bg-white p-6 shadow-[0_24px_70px_rgba(0,90,170,0.08)] sm:p-8">
        <div className="text-center">
          <Award className="mx-auto mb-4 text-[#d5282f]" size={40} />
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d5282f]">
            Certifications
          </p>
          <h3 className="mt-3 text-3xl font-black text-[#052b4f]">
            Mild Steel Concrete Lined Pipes Certifications
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Certifications and approvals related to pipe manufacturing, conformity, quality assurance and water industry standards.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setPreview(certificationBoard)}
          className="group relative mt-10 block w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(0,44,85,0.12)] transition duration-500 hover:-translate-y-1"
        >
          <img
            src={certificationBoard}
            alt="Jetama Alpine Pipe Certifications"
            className="w-full transition duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[#061b46]/0 transition group-hover:bg-[#061b46]/10" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-[#102f83] shadow-xl backdrop-blur">
            Click To Preview Certifications
          </div>
        </button>

        {preview && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <button
              onClick={() => setPreview(null)}
              className="absolute right-6 top-6 rounded-full bg-white p-3 text-[#102f83] shadow-xl transition hover:scale-105"
              aria-label="Close certificate preview"
            >
              <X size={24} />
            </button>

            <div className="max-h-[95vh] max-w-7xl overflow-auto rounded-[2rem] bg-white p-3 shadow-2xl">
              <img
                src={preview}
                alt="Certification Preview"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function ShareCard({ name, percent }: { name: string; percent: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,44,85,0.10)]">
      <h4 className="text-6xl font-black text-[#d5282f]">{percent}</h4>
      <p className="mt-4 text-xl font-black text-[#102f83]">{name}</p>
    </div>
  );
}

function ComingSoonJV({ page }: { page: JointVenturePage }) {
  return (
    <div className="space-y-8">
      <JointVentureIntroCard page={page}>
        <InfoPoint>
          This joint venture company profile has been prepared for future official information updates.
        </InfoPoint>
        <InfoPoint>
          Project details, company background and operational information will be added once available.
        </InfoPoint>
      </JointVentureIntroCard>

      <section className="scroll-reveal rounded-[2.5rem] border border-[#dcebf3] bg-white p-8 text-center shadow-[0_24px_70px_rgba(0,90,170,0.08)]">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-[#fff7e6] text-[#f5a623] shadow-inner">
          <Building2 size={38} />
        </div>

        <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-[#f5a623]">
          Company Details
        </p>

        <h3 className="mt-4 text-3xl font-black text-[#052b4f] sm:text-4xl">
          Coming Soon
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
          Information and project details will be announced in the future.
        </p>
      </section>
    </div>
  );
}

function SolarJointVentureDetail({ page }: { page: JointVenturePage }) {
  const focusAreas = [
    {
      icon: SunMedium,
      title: "Solar Development",
      text: "Supports JETAMA Group's expansion into renewable energy infrastructure.",
    },
    {
      icon: Leaf,
      title: "Low Carbon Direction",
      text: "Contributes to cleaner energy generation and long-term sustainability goals.",
    },
    {
      icon: ShieldCheck,
      title: "Project Governance",
      text: "Structured under a focused joint venture for project delivery and coordination.",
    },
  ];

  return (
    <div className="space-y-8">
      <JointVentureIntroCard page={page}>
        <InfoPoint>
          Jetama Babagon Floating Solar Sdn. Bhd. supports floating solar development at Babagon Dam, Penampang.
        </InfoPoint>
        <InfoPoint>
          The proposed project strengthens JETAMA Group’s renewable energy direction and clean energy portfolio.
        </InfoPoint>
        <InfoPoint>
          The company supports project coordination, governance and future energy infrastructure delivery.
        </InfoPoint>
      </JointVentureIntroCard>

      <section className="scroll-reveal rounded-[2.5rem] border border-[#dcebf3] bg-gradient-to-br from-white via-[#f8fbff] to-[#eaf8ef] p-6 shadow-[0_24px_70px_rgba(0,90,170,0.08)] sm:p-8">
        <div className="mb-7">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#35b24a]">
            Project Snapshot
          </p>
          <h3 className="mt-3 text-3xl font-black text-[#052b4f]">
            Floating Solar Development
          </h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {[
            ["Project Type", "Floating Solar PV"],
            ["Proposed Capacity", "13.21 MWac"],
            ["Location", "Babagon Dam, Penampang"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                {label}
              </p>
              <p className="mt-3 text-xl font-black text-[#052b4f]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="scroll-reveal grid gap-6 md:grid-cols-3">
        {focusAreas.map((item) => (
          <CapabilityCard
            key={item.title}
            title={item.title}
            text={item.text}
            icon={item.icon}
            accent={page.accent}
          />
        ))}
      </section>
    </div>
  );
}

function CurrentContent({ selected }: { selected: JointVentureKey }) {
  const page = jointVenturePages[selected];

  if (selected === "jetama-alpine-pipe") {
    return <JetamaAlpinePipeDetail page={page} />;
  }

  if (selected === "jetama-batu-sapi-solar") {
    return <ComingSoonJV page={page} />;
  }

  return <SolarJointVentureDetail page={page} />;
}

export default function JointVentureDetails() {
  const { type } = useParams();
  const selected = type as JointVentureKey | undefined;

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

  if (!selected || !jointVenturePages[selected]) {
    return <Navigate to="/jointventure" replace />;
  }

  const page = jointVenturePages[selected];

  return (
    <div className="overflow-hidden bg-white text-slate-900 selection:bg-[#fbf234] selection:text-[#062A44]">
      <SectionHero page={page} />
      <OceanWaveDivider />

      <section className="bg-white px-4 pb-8 pt-3 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[260px_1fr]">
          <Sidebar />

          <main className="min-w-0">
            <CurrentContent selected={selected} />
          </main>
        </div>
      </section>
    </div>
  );
}
