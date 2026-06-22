import { useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import {
  Award,
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
  title: string;
  shortLabel: string;
  subtitle: string;
  accent: string;
  logo: string;
};

const jointVenturePages: Record<JointVentureKey, JointVenturePage> = {
  "jetama-alpine-pipe": {
    title: "Jetama Alpine Pipe (Sabah) Sdn. Bhd.",
    shortLabel: "Jetama Alpine Pipe",
    subtitle:
      "A joint venture supporting pipe manufacturing, technical capability and quality infrastructure solutions.",
    accent: "#d5282f",
    logo: alpineLogo,
  },
  "jetama-batu-sapi-solar": {
    title: "Jetama Batu Sapi Solar Sdn. Bhd.",
    shortLabel: "Batu Sapi Solar",
    subtitle:
      "A renewable energy joint venture under JETAMA Energy supporting solar development in Sabah.",
    accent: "#f9a51a",
    logo: jetamaEnergyLogo,
  },
  "jetama-babagon-floating-solar": {
    title: "Jetama Babagon Floating Solar Sdn. Bhd.",
    shortLabel: "Babagon Floating Solar",
    subtitle:
      "A renewable energy joint venture supporting the proposed floating solar development at Babagon Dam.",
    accent: "#35b24a",
    logo: jetamaEnergyLogo,
  },
};

const jointVentureNavigation = Object.entries(jointVenturePages).map(
  ([slug, page]) => ({
    label: page.shortLabel,
    path: `/jointventure/${slug}`,
  }),
);

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

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="relative h-fit bg-transparent px-4 py-0">
      <div className="mb-1 flex justify-start">
        <img
          src={jetamaLogo}
          alt="JETAMA"
          className="h-[88px] w-auto object-contain"
        />
      </div>

      <nav className="-mt-2 space-y-1">
        {jointVentureNavigation.map((item) => {
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
              <Handshake size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

function SectionHero({ page }: { page: JointVenturePage }) {
  return (
    <section className="relative overflow-hidden rounded-[2.4rem] border border-[#dcebf3] bg-white shadow-[0_24px_70px_rgba(0,90,170,0.08)]">
      <div className="absolute inset-x-0 top-0 h-[260px] overflow-hidden">
        <img src={heroImage} alt={page.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061b46]/85 via-[#0b2f7f]/55 to-white" />
      </div>

      <div className="relative px-6 py-14 text-center sm:px-10 lg:px-12">
        <img
          src={page.logo}
          alt={page.title}
          className="mx-auto h-auto max-h-44 w-auto object-contain drop-shadow-[0_20px_55px_rgba(0,44,85,0.30)]"
        />

        <p
          className="mx-auto mt-8 inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] shadow-sm"
          style={{ color: page.accent }}
        >
          Joint Venture Company
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight text-[#102f83] sm:text-5xl">
          {page.title}
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          {page.subtitle}
        </p>
      </div>
    </section>
  );
}

export default function JointVentureDetails() {
  const { type } = useParams();
  const selected = type as JointVentureKey | undefined;

  if (!selected || !jointVenturePages[selected]) {
    return <Navigate to="/jointventure" replace />;
  }

  const page = jointVenturePages[selected];

  return (
    <main className="overflow-hidden bg-white pt-32 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
          <Link to="/" className="hover:text-[#005AAA]">Home</Link>
          <ChevronRight size={15} />
          <Link to="/jointventure" className="hover:text-[#005AAA]">Joint Ventures</Link>
          <ChevronRight size={15} />
          <span className="font-bold text-[#005AAA]">{page.title}</span>
        </div>
      </div>

      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[260px_1fr]">
          <Sidebar />

          <main className="min-w-0 space-y-10">
            <SectionHero page={page} />

            {selected === "jetama-alpine-pipe" && <JetamaAlpinePipeDetail />}
            {selected === "jetama-batu-sapi-solar" && (
              <SolarJointVentureDetail
                title="Jetama Batu Sapi Solar Sdn. Bhd."
                accent="#f9a51a"
                description="A solar project company under JETAMA Energy focusing on ground-mounted solar development at Batu Sapi, Sandakan."
                highlights={[
                  ["Project Type", "Ground-Mounted Solar PV"],
                  ["Proposed Capacity", "15 MWac"],
                  ["Location", "Batu Sapi, Sandakan"],
                ]}
              />
            )}
            {selected === "jetama-babagon-floating-solar" && (
              <SolarJointVentureDetail
                title="Jetama Babagon Floating Solar Sdn. Bhd."
                accent="#35b24a"
                description="A solar project company under JETAMA Energy focusing on floating solar development at Babagon Dam, Penampang."
                highlights={[
                  ["Project Type", "Floating Solar PV"],
                  ["Proposed Capacity", "13.21 MWac"],
                  ["Location", "Babagon Dam, Penampang"],
                ]}
              />
            )}
          </main>
        </div>
      </section>
    </main>
  );
}

function JetamaAlpinePipeDetail() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section className="space-y-10">
      <section className="rounded-[2.3rem] border border-[#dcebf3] bg-white p-7 shadow-[0_24px_70px_rgba(0,90,170,0.08)] lg:p-10">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-12 rounded-full bg-[#d5282f]" />
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d5282f]">
            About Joint Venture
          </p>
        </div>

        <div className="mt-8 space-y-6 text-justify text-base leading-8 text-slate-700">
          <p>
            <span className="font-black text-[#102f83]">
              Jetama Alpine Pipe (Sabah) Sdn. Bhd. (JAPS)
            </span>{" "}
            is a joint venture company between Jetama Sdn. Bhd. and Alpine Pipe Manufacturing Sdn. Bhd.
          </p>
          <p>
            JAPS supports the supply and production of pipes and steel section products that meet stringent requirements and specifications according to customer needs.
          </p>
          <p>
            The company focuses on SSAW and ERW pipe solutions, supported by quality assurance, technical knowledge and continuous product improvement.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {alpineScope.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(0,44,85,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.14)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102f83] text-white">
                  <Icon size={27} />
                </div>
                <h3 className="text-xl font-black text-[#102f83]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-[2.3rem] border border-[#dcebf3] bg-[#f8fbff] p-7 shadow-[0_24px_70px_rgba(0,90,170,0.08)] lg:p-10">
        <div className="text-center">
          <Handshake className="mx-auto mb-4 text-[#d5282f]" size={40} />
          <h2 className="text-3xl font-black text-[#102f83]">Joint Venture Structure</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <ShareCard name="Jetama Sdn. Bhd." percent="51%" />
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d5282f] text-white shadow-xl">
            <Handshake size={36} />
          </div>
          <ShareCard name="Alpine Pipe Manufacturing Sdn. Bhd." percent="49%" />
        </div>
      </section>

      <section className="rounded-[2.3rem] border border-[#dcebf3] bg-white p-7 shadow-[0_24px_70px_rgba(0,90,170,0.08)] lg:p-10">
        <div className="text-center">
          <Award className="mx-auto mb-4 text-[#d5282f]" size={40} />
          <h2 className="text-3xl font-black text-[#102f83]">Mild Steel Concrete Lined Pipes Certifications</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Certifications and approvals related to pipe manufacturing, conformity, quality assurance and water industry standards.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setPreview(certificationBoard)}
          className="group relative mt-10 block w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(0,44,85,0.12)] transition hover:-translate-y-1"
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
              <img src={preview} alt="Certification Preview" className="h-auto w-full object-contain" />
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

function ShareCard({ name, percent }: { name: string; percent: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h4 className="text-6xl font-black text-[#d5282f]">{percent}</h4>
      <p className="mt-4 text-xl font-black text-[#102f83]">{name}</p>
    </div>
  );
}

function SolarJointVentureDetail({
  title,
  accent,
  description,
  highlights,
}: {
  title: string;
  accent: string;
  description: string;
  highlights: string[][];
}) {
  return (
    <section className="space-y-10">
      <section className="relative overflow-hidden rounded-[2.3rem] border border-[#dcebf3] bg-gradient-to-br from-white via-[#f8fbff] to-[#fff8ea] p-7 shadow-[0_24px_70px_rgba(0,90,170,0.08)] lg:p-10">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f9a51a]/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#35b24a]/12 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="rounded-[2rem] border border-white bg-white p-8 text-center shadow-[0_18px_55px_rgba(0,44,85,0.10)]">
            <img src={jetamaEnergyLogo} alt={title} className="mx-auto h-auto max-h-40 w-auto object-contain" />
            <div className="mt-6 inline-flex rounded-full px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-white" style={{ backgroundColor: accent }}>
              Renewable Energy JV
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black leading-tight text-[#102f83] lg:text-4xl">{title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">{description}</p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {highlights.map(([label, value]) => (
                <div key={label} className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
                  <p className="mt-2 text-lg font-black text-[#102f83]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          [SunMedium, "Solar Development", "Supports JETAMA Group's expansion into renewable energy infrastructure."],
          [Leaf, "Low Carbon Direction", "Contributes to cleaner energy generation and long-term sustainability goals."],
          [ShieldCheck, "Project Governance", "Structured under a focused joint venture for project delivery and coordination."],
        ].map(([Icon, titleText, text]) => {
          const IconComponent = Icon as typeof SunMedium;
          return (
            <article key={titleText as string} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(0,44,85,0.08)] transition duration-500 hover:-translate-y-2">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: accent }}>
                <IconComponent size={27} />
              </div>
              <h3 className="text-xl font-black text-[#102f83]">{titleText as string}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{text as string}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
}
