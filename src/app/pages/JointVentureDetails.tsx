import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import {
  Building2,
  ChevronRight,
  Factory,
  Handshake,
  Leaf,
  MapPin,
  ShieldCheck,
  SunMedium,
  Zap,
  Wrench,
  X,
} from "lucide-react";

import heroImage from "@/assets/jetama-dam-hero.jpg";
import alpineLogo from "@/assets/Jetama Pipe - FINAL.png";
import certificationBoard from "@/assets/certAl.jpeg";
import jetamaEnergyLogo from "@/assets/LOGO-JESB.png";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import solarLogo from "@/assets/solarpvlogo.png";
import solarPlantImage from "@/assets/pvplant.png";
import solarBabagonImage from "@/assets/pvterapung.png";
import solarLaunchImage from "@/assets/solarlaunching.png";

type JointVentureKey =
  | "jetama-alpine-pipe"
  | "solar-pv-power"
  | "jetama-batu-sapi-solar"
  | "jetama-babagon-floating-solar";

type JointVenturePage = {
  key: JointVentureKey;
  title: string;
  shortTitle: string;
  subtitle: string;
  eyebrow: string;
  accent: string;
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
    logo: alpineLogo,
    hero: heroImage,
    path: "/jointventure/jetama-alpine-pipe",
    icon: Factory,
  },
  "solar-pv-power": {
    key: "solar-pv-power",
    title: "Solar PV Power Sdn. Bhd.",
    shortTitle: "Solar PV Power",
    subtitle:
      "A joint venture company supporting large scale solar photovoltaic development and clean energy generation projects.",
    eyebrow: "Solar PV Joint Venture",
    accent: "#f5a623",
    logo: solarLogo,
    hero: solarPlantImage,
    path: "/jointventure/solar-pv-power",
    icon: SunMedium,
  },
  "jetama-batu-sapi-solar": {
    key: "jetama-batu-sapi-solar",
    title: "Jetama Batu Sapi Solar Sdn. Bhd.",
    shortTitle: "Batu Sapi Solar",
    subtitle: "Information and project details will be announced in the future.",
    eyebrow: "Joint Venture Company",
    accent: "#f5a623",
    logo: jetamaLogo,
    hero: solarLaunchImage,
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
    logo: jetamaEnergyLogo,
    hero: solarBabagonImage,
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
    text: "Driven by continuous improvement in pipe quality, forming process, tooling optimisation and product development.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Supports reliable infrastructure through quality pipe products, research, development and experienced technical teams.",
  },
];

function PageStyles() {
  return (
    <style>{`
      @keyframes jointFadeUp {
        from { opacity: 0; transform: translateY(24px); filter: blur(8px); }
        to { opacity: 1; transform: translateY(0); filter: blur(0); }
      }

      @keyframes jointFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .55; }
        50% { transform: translate3d(18px,-14px,0) rotate(2deg); opacity: .85; }
      }

      @keyframes jointShine {
        0% { transform: translateX(-150%) skewX(-18deg); opacity: 0; }
        30% { opacity: .5; }
        100% { transform: translateX(190%) skewX(-18deg); opacity: 0; }
      }

      .scroll-reveal {
        opacity: 0;
        transform: translateY(24px);
      }

      .scroll-reveal.scroll-visible {
        animation: jointFadeUp .82s cubic-bezier(.2,.8,.2,1) both;
      }

      .joint-float-a { animation: jointFloat 12s ease-in-out infinite; }
      .joint-float-b { animation: jointFloat 15s ease-in-out infinite reverse; }

      .joint-card-shine {
        position: relative;
        overflow: hidden;
      }

      .joint-card-shine::before {
        content: "";
        position: absolute;
        top: -50%;
        bottom: -50%;
        left: -35%;
        width: 28%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent);
        transform: translateX(-150%) skewX(-18deg);
        pointer-events: none;
      }

      .joint-card-shine:hover::before {
        animation: jointShine 1.8s ease;
      }
    `}</style>
  );
}

function DetailBreadcrumb({ page }: { page: JointVenturePage }) {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
      <Link to="/" className="transition hover:text-[#005AAA]">
        Home
      </Link>
      <ChevronRight size={15} className="text-slate-400" />
      <Link to="/jointventure" className="transition hover:text-[#005AAA]">
        Joint Ventures
      </Link>
      <ChevronRight size={15} className="text-slate-400" />
      <span className="font-bold text-[#005AAA]">{page.shortTitle}</span>
    </div>
  );
}

function AccentRule() {
  return (
    <div className="my-6 flex items-center gap-3">
      <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
      <span className="h-[3px] w-10 rounded-full bg-[#41B650]" />
      <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
    </div>
  );
}

function ShortHero({ page }: { page: JointVenturePage }) {
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
        className="joint-float-a absolute left-[-150px] top-20 -z-10 h-56 w-[520px] bg-[#005AAA]/[.07]"
        style={{ clipPath: "polygon(0 25%, 84% 0, 100% 70%, 12% 100%)" }}
      />
      <div
        className="joint-float-b absolute right-[-150px] top-24 -z-10 h-60 w-[560px] bg-[#35B24A]/[.08]"
        style={{ clipPath: "polygon(9% 0, 100% 24%, 82% 100%, 0 72%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
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
    <aside className="relative h-fit rounded-[28px] border border-slate-100 bg-white/70 p-4 shadow-[0_24px_70px_rgba(15,60,110,.08)] backdrop-blur-xl lg:sticky lg:top-28">
      <nav className="space-y-2">
        {jointVentureNavigation.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`joint-card-shine flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-black transition ${
                active
                  ? "bg-[#eaf8ef] text-[#16a34a] shadow-sm"
                  : "text-slate-700 hover:bg-white hover:text-[#005AAA] hover:shadow-sm"
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

function SectionTitle({
  eyebrow,
  title,
  accent = "#41B650",
}: {
  eyebrow: string;
  title: string;
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
    </div>
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

function ContentIntro({
  page,
  children,
  image,
}: {
  page: JointVenturePage;
  children: ReactNode;
  image?: string;
}) {
  return (
    <article className="scroll-reveal relative">
      <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-4 h-72 w-72 rounded-full bg-[#41B650]/8 blur-3xl" />

      <section className={`relative grid gap-10 ${image ? "lg:grid-cols-[1fr_.95fr]" : ""} lg:items-center`}>
        <div>
          <SectionTitle
            eyebrow={page.eyebrow}
            title={page.shortTitle}
            accent={page.accent}
          />

          <div className="max-w-4xl space-y-5 font-serif italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
            {children}
          </div>
        </div>

        {image && (
          <div className="overflow-hidden rounded-[30px] shadow-[0_24px_70px_rgba(15,60,110,.14)]">
            <img
              src={image}
              alt={page.shortTitle}
              className="h-[330px] w-full object-cover"
            />
          </div>
        )}
      </section>
    </article>
  );
}

function IconText({
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
    <div className="group relative">
      <div className="mb-5 flex items-center gap-4">
        <Icon size={30} style={{ color: accent }} />
        <h3 className="font-serif text-2xl font-semibold italic leading-tight text-[#052b4f] transition group-hover:text-[#005AAA]">
          {title}
        </h3>
      </div>
      <p className="text-justify text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function JetamaAlpinePipeDetail({ page }: { page: JointVenturePage }) {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      <ContentIntro page={page}>
        <EditorialPoint accent={page.accent}>
          Jetama Alpine Pipe (Sabah) Sdn. Bhd. is a joint venture company between Jetama Sdn. Bhd. and Alpine Pipe Manufacturing Sdn. Bhd.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          The company supports pipe production, steel section products and quality infrastructure solutions for customer requirements.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          Its focus includes SSAW and ERW pipe solutions, supported by technical knowledge, product improvement and quality assurance.
        </EditorialPoint>
      </ContentIntro>

      <section className="scroll-reveal grid gap-x-10 gap-y-12 md:grid-cols-3">
        {alpineScope.map((item) => (
          <IconText
            key={item.title}
            title={item.title}
            text={item.text}
            icon={item.icon}
            accent={page.accent}
          />
        ))}
      </section>

      <section className="scroll-reveal relative">
        <SectionTitle
          eyebrow="Shareholding"
          title="Joint Venture Structure"
          accent={page.accent}
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <ShareText name="Jetama Sdn. Bhd." percent="51%" accent={page.accent} />
          <div className="hidden h-px w-24 bg-gradient-to-r from-[#005AAA] via-[#41B650] to-[#F5A623] lg:block" />
          <ShareText name="Alpine Pipe Manufacturing Sdn. Bhd." percent="49%" accent={page.accent} />
        </div>
      </section>

      <section className="scroll-reveal relative">
        <SectionTitle
          eyebrow="Certifications"
          title="Mild Steel Concrete Lined Pipes Certifications"
          accent={page.accent}
        />

        <p className="max-w-4xl text-justify text-base leading-8 text-slate-600">
          Certifications and approvals related to pipe manufacturing, conformity, quality assurance and water industry standards.
        </p>

        <button
          type="button"
          onClick={() => setPreview(certificationBoard)}
          className="group relative mt-9 block w-full overflow-hidden rounded-[2rem] shadow-[0_25px_80px_rgba(0,44,85,0.12)] transition duration-500 hover:-translate-y-1"
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

function ShareText({
  name,
  percent,
  accent,
}: {
  name: string;
  percent: string;
  accent: string;
}) {
  return (
    <div>
      <p
        className="font-serif text-6xl font-semibold italic leading-none"
        style={{ color: accent }}
      >
        {percent}
      </p>
      <p className="mt-4 text-xl font-black leading-tight text-[#052b4f]">
        {name}
      </p>
    </div>
  );
}

function ComingSoonJV({ page }: { page: JointVenturePage }) {
  return (
    <div className="space-y-16">
      <ContentIntro page={page}>
        <EditorialPoint accent={page.accent}>
          This joint venture company profile has been prepared for future official information updates.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          Project details, company background and operational information will be added once available.
        </EditorialPoint>
      </ContentIntro>

      <section className="scroll-reveal relative text-center">
        <Building2 className="mx-auto text-[#f5a623]" size={46} />
        <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-[#f5a623]">
          Company Details
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold italic text-[#005AAA] sm:text-5xl">
          Coming Soon
        </h2>
        <AccentRule />
        <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
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
    <div className="space-y-16">
      <ContentIntro page={page} image={solarBabagonImage}>
        <EditorialPoint accent={page.accent}>
          Jetama Babagon Floating Solar Sdn. Bhd. supports floating solar development at Babagon Dam, Penampang.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          The proposed project strengthens JETAMA Group's renewable energy direction and clean energy portfolio.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          The company supports project coordination, governance and future energy infrastructure delivery.
        </EditorialPoint>
      </ContentIntro>

      <section className="scroll-reveal">
        <SectionTitle
          eyebrow="Project Snapshot"
          title="Floating Solar Development"
          accent={page.accent}
        />

        <div className="grid gap-5 md:grid-cols-3">
          <SnapshotCard icon={Factory} label="Project Type" value="Floating Solar PV" />
          <SnapshotCard icon={Zap} label="Proposed Capacity" value="13.21 MWac" />
          <SnapshotCard icon={MapPin} label="Location" value="Babagon Dam, Penampang" />
        </div>
      </section>

      <section className="scroll-reveal grid gap-x-10 gap-y-12 md:grid-cols-3">
        {focusAreas.map((item) => (
          <IconText
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

function SnapshotCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Factory;
  label: string;
  value: string;
}) {
  return (
    <div className="joint-card-shine rounded-2xl border border-slate-100 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,60,110,.08)] backdrop-blur">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf8ef] text-[#16a34a]">
        <Icon size={23} />
      </div>
      <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 font-serif text-2xl font-semibold italic text-[#052b4f]">
        {value}
      </p>
    </div>
  );
}

function SolarPVPowerJointVentureDetail({ page }: { page: JointVenturePage }) {
  return (
    <div className="space-y-16">
      <ContentIntro page={page} image={solarPlantImage}>
        <EditorialPoint accent={page.accent}>
          Solar PV Power Sdn. Bhd. is positioned under the Joint Ventures section to reflect its strategic renewable energy partnership structure.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          The company supports large scale solar photovoltaic development, clean energy generation and long-term renewable energy planning.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          Its portfolio includes the 10MWac Large Scale Solar PV project in Federal Territory Labuan.
        </EditorialPoint>
      </ContentIntro>

      <SolarPVProjectSection page={page} />
      <SolarPVFutureProjects />
    </div>
  );
}

function SolarPVProjectSection({ page }: { page: JointVenturePage }) {
  const milestones = [
    "Letter of Acceptance of Offer from ST received on 28 November 2017.",
    "Power Purchase Agreement signed on 15 December 2021.",
    "Commercial operations achieved on 9 February 2024.",
  ];

  return (
    <section className="scroll-reveal relative">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Solar Project"
            title="10MWac Large Scale Solar PV Project"
            accent={page.accent}
          />

          <div className="space-y-5">
            <EditorialPoint accent={page.accent}>
              Large Scale Solar Photovoltaic Plant located at Kg Bukit Kalam, Federal Territory Labuan, developed to support clean energy generation.
            </EditorialPoint>
            <EditorialPoint accent={page.accent}>
              The project contributes approximately 23 Gigawatt hours of power per year and supports carbon reduction compared with conventional generation sources.
            </EditorialPoint>
          </div>

          <div className="mt-8 space-y-4">
            {milestones.map((item) => (
              <div key={item} className="flex gap-3">
                <SunMedium className="mt-1 shrink-0 text-[#f5a623]" size={18} />
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-[0_22px_60px_rgba(0,44,85,0.12)]">
          <img
            src={solarPlantImage}
            alt="10MWac Large Scale Solar PV Plant"
            className="h-[380px] w-full object-cover"
          />
          <div className="flex items-center gap-3 bg-[#052b4f] px-6 py-4 text-white">
            <Zap size={20} className="text-[#f5a623]" />
            <span className="text-sm font-black uppercase tracking-[0.14em]">
              F.T. Labuan Solar PV Plant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolarPVFutureProjects() {
  const futureProjects = [
    {
      title: "13.21 MWac Floating Solar PV",
      location: "Babagon Dam, Penampang",
      image: solarBabagonImage,
    },
    {
      title: "15 MWac Ground Mounted Solar PV",
      location: "Batu Sapi, Sandakan",
      image: solarLaunchImage,
    },
  ];

  return (
    <section className="scroll-reveal relative">
      <SectionTitle
        eyebrow="Future Solar Direction"
        title="Upcoming Large Scale Solar Developments"
        accent="#41B650"
      />

      <p className="max-w-4xl text-justify text-base leading-8 text-slate-600">
        Two additional Large Scale Solar projects are planned through LSS Sabah 2024 with scheduled commercial operations in December 2026.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {futureProjects.map((project) => (
          <article key={project.title} className="group">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_22px_60px_rgba(0,44,85,0.12)]">
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f5a623]">
                Solar PV Development
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold italic text-[#052b4f]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm font-semibold text-slate-600">
                {project.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CurrentContent({ selected }: { selected: JointVentureKey }) {
  const page = jointVenturePages[selected];

  if (selected === "jetama-alpine-pipe") {
    return <JetamaAlpinePipeDetail page={page} />;
  }

  if (selected === "solar-pv-power") {
    return <SolarPVPowerJointVentureDetail page={page} />;
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
    <main className="overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_42%,#eefaf3_100%)] text-slate-900 selection:bg-[#fbf234] selection:text-[#062A44]">
      <PageStyles />
      <ShortHero page={page} />

      <section className="relative px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#005AAA]/8 blur-3xl" />
          <div className="absolute right-[-9rem] top-36 h-[28rem] w-[28rem] rounded-full bg-[#41B650]/10 blur-3xl" />
          <div className="absolute left-1/3 top-16 h-40 w-40 rounded-full bg-[#F5A623]/8 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,90,170,0.06)_1px,transparent_0)] [background-size:28px_28px] opacity-35" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-0">
          <div className="grid gap-14 lg:grid-cols-[260px_1fr]">
            <Sidebar />
            <main className="min-w-0">
              <CurrentContent selected={selected} />
            </main>
          </div>
        </div>
      </section>
    </main>
  );
}