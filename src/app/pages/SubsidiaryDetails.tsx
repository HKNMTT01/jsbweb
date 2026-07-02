import { useEffect, type ReactNode } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import {
  ArrowRight,
  Award,
  Building2,
  ChevronRight,
  Droplets,
  Factory,
  Leaf,
  ShieldCheck,
  Sun,
  UsersRound,
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

type OrgNode = {
  name: string;
  role: string;
  tone?: "primary" | "green" | "gold" | "white";
};

const subsidiaryPages: Record<SubsidiaryKey, SubsidiaryPage> = {
  water: {
    key: "water",
    title: "Jetama Water Sdn. Bhd.",
    shortTitle: "Jetama Water",
    subtitle:
      "A water operator subsidiary responsible for potable water production, treatment plant operations and service reliability across Kota Kinabalu and selected West Coast areas of Sabah.",
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
      "A renewable energy subsidiary driving sustainable, economical and innovative energy solutions for Sabah’s low-carbon future.",
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

const waterFacts = [
  { label: "240", text: "Staff" },
  { label: "6", text: "Water Treatment Plants" },
  { label: "200 km", text: "Transmission Mains" },
  { label: "30", text: "Service Reservoirs" },
];

const waterPlants = [
  { title: "Moyog WTP", capacity: "165 MLD", image: moyogPlant },
  { title: "Telibong WTP", capacity: "55 MLD", image: telibongPlant },
  { title: "Kasigui WTP", capacity: "50 MLD", image: kasiguiPlant },
  { title: "Tuaran WTP", capacity: "1 MLD", image: waterHero },
  { title: "Tamparuli WTP", capacity: "2.58 MLD", image: telibongPlant },
  { title: "Papar WTP", capacity: "9 MLD", image: kasiguiPlant },
];

const waterOrgChart = {
  top: { name: "Datuk Ahmad Naim Bin Uddang", role: "Chief Executive Officer", tone: "primary" as const },
  middle: [
    { name: "Prof. Ts. Dr. June Abel Logijin", role: "Senior General Manager", tone: "primary" as const },
    { name: "Florence Jaini", role: "Senior Office Manager", tone: "white" as const },
    { name: "Ag Ahmad Zaki Bin Abu Bakar", role: "General Manager • Human Resource, Environmental, Social & Governance (ESG) Division", tone: "green" as const },
  ],
  divisions: [
    { name: "Administration", role: "Senior Manager • Adriani Roy Sipong", tone: "primary" as const },
    { name: "Laboratory", role: "Assistant General Manager • Joyce Kristy Primus", tone: "primary" as const },
    { name: "Engineering", role: "Assistant General Manager • Khairatin Musbi", tone: "primary" as const },
    { name: "Finance & Procurement", role: "Assistant General Manager • Lydiia Lily Sui Siang", tone: "primary" as const },
    { name: "Operations", role: "Assistant General Manager • Debbie Annabelle Peter", tone: "primary" as const },
    { name: "Safety, Health & Environment", role: "Deputy General Manager • Ferdinand Kogits", tone: "primary" as const },
  ],
};

const energyOrgChart = {
  top: { name: "Datuk Ahmad Naim Bin Uddang", role: "Chief Executive Officer", tone: "primary" as const },
  gm: { name: "Junidi Doronsol", role: "General Manager", tone: "primary" as const },
  left: [
    { name: "Calum W. Mogindol", role: "Deputy General Manager • Operations", tone: "white" as const },
    { name: "Cheryl Suminundu W. Majinbon", role: "Executive Secretary", tone: "white" as const },
    { name: "Lionel Joslin", role: "Senior Electrical Engineer", tone: "white" as const },
  ],
  right: [
    { name: "Zulila Ghazalli", role: "Executive Secretary", tone: "white" as const },
    { name: "Tang Yang Cheng", role: "Project Development Manager", tone: "white" as const },
    { name: "Angeline Chan Chew Yit", role: "Accountant", tone: "white" as const },
    { name: "Tan Lik Len", role: "Senior Engineer • Project", tone: "white" as const },
    { name: "Mohd Fadzir Muhitam", role: "Electrical Engineer", tone: "white" as const },
    { name: "Mohamad Shafiee Bin Mohamad Ghazali", role: "Electrical Engineer", tone: "white" as const },
  ],
};

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
    <div className="my-6 flex items-center gap-3">
      <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
      <span className="h-[3px] w-10 rounded-full bg-[#41B650]" />
      <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
    </div>
  );
}

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="service-side-nav scroll-reveal relative -mt-3 h-fit bg-transparent px-4 py-0 lg:sticky lg:top-28">
      <div className="mb-1 flex justify-start">
        <img src={jetamaLogo} alt="JETAMA" className="h-[88px] w-auto object-contain" />
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
      <p className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-[-0.035em] text-[#005AAA] sm:text-4xl">
        {title}
      </h2>
      <AccentRule />
      {text && <p className="max-w-5xl text-justify text-base leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

function IntroBlock({ page, children }: { page: SubsidiaryPage; children: ReactNode }) {
  return (
    <article className="scroll-reveal relative">
      <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-4 h-72 w-72 rounded-full bg-[#41B650]/8 blur-3xl" />

      <section className="relative">
        <div className="max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: page.accent }}>
            {page.eyebrow}
          </p>

          <img
            src={page.logo}
            alt={page.title}
            className="mt-5 max-h-[125px] w-auto max-w-full object-contain drop-shadow-[0_18px_38px_rgba(0,68,130,0.14)]"
          />

          <AccentRule />

          <p className="max-w-5xl text-[17px] font-semibold leading-9 text-[#052b4f]">
            {page.subtitle}
          </p>

          <div className="mt-8 max-w-5xl space-y-5 leading-8 text-slate-700 sm:text-base">
            {children}
          </div>
        </div>
      </section>
    </article>
  );
}

function EditorialPoint({ children, accent = "#005AAA" }: { children: ReactNode; accent?: string }) {
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

function StatCard({ label, text, accent = "#005AAA" }: { label: string; text: string; accent?: string }) {
  return (
    <div className="subsidiary-card-shine rounded-[24px] bg-white/86 p-5 shadow-[0_18px_55px_rgba(15,60,110,.08)] backdrop-blur transition hover:-translate-y-1 hover:bg-white">
      <p className="text-3xl font-black tracking-tight" style={{ color: accent }}>
        {label}
      </p>
      <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500">{text}</p>
    </div>
  );
}

function OrgCard({ node, accent = "#005AAA" }: { node: OrgNode; accent?: string }) {
  const isPrimary = node.tone === "primary";
  const isGreen = node.tone === "green";
  const isGold = node.tone === "gold";

  return (
    <div
      className={`subsidiary-card-shine relative rounded-2xl px-4 py-4 text-center shadow-[0_16px_45px_rgba(15,60,110,.10)] ring-1 ring-black/5 ${
        isPrimary
          ? "bg-[#005AAA] text-white"
          : isGreen
            ? "bg-[#35B24A] text-white"
            : isGold
              ? "bg-[#F5A623] text-[#052b4f]"
              : "bg-white text-[#052b4f]"
      }`}
      style={isPrimary ? { backgroundColor: accent === "#F5A623" ? "#005AAA" : accent } : undefined}
    >
      <p className="text-sm font-black uppercase leading-snug">{node.name}</p>
      <p className={`mt-1 text-[11px] font-bold uppercase leading-snug ${isPrimary || isGreen ? "text-white/84" : "text-slate-500"}`}>
        {node.role}
      </p>
    </div>
  );
}

function OrganizationChart({
  title,
  children,
  accent = "#005AAA",
}: {
  title: string;
  children: ReactNode;
  accent?: string;
}) {
  return (
    <section className="scroll-reveal">
      <SectionTitle
        eyebrow="Organizational Chart"
        title={title}
        text="A simplified website version of the subsidiary organizational chart based on the company profile."
        accent={accent}
      />
      <div className="relative overflow-hidden rounded-[34px] bg-white/74 p-6 shadow-[0_24px_80px_rgba(15,60,110,.10)] backdrop-blur md:p-8">
        <div
          className="absolute left-0 top-0 h-24 w-80 opacity-15"
          style={{ backgroundColor: accent, clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 64%)" }}
        />
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

function WaterOrganizationChart() {
  return (
    <OrganizationChart title="Jetama Water Sdn. Bhd." accent="#35B24A">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-sm">
          <OrgCard node={waterOrgChart.top} accent="#005AAA" />
        </div>
        <div className="mx-auto h-8 w-[3px] bg-[#35B24A]" />
        <div className="grid gap-4 md:grid-cols-3">
          {waterOrgChart.middle.map((node) => (
            <OrgCard key={node.name} node={node} accent="#005AAA" />
          ))}
        </div>
        <div className="mx-auto h-8 w-[3px] bg-[#35B24A]" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {waterOrgChart.divisions.map((node) => (
            <OrgCard key={node.name} node={node} accent="#005AAA" />
          ))}
        </div>
      </div>
    </OrganizationChart>
  );
}

function EnergyOrganizationChart() {
  return (
    <OrganizationChart title="Jetama Energy Sdn. Bhd." accent="#F5A623">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-sm">
          <OrgCard node={energyOrgChart.top} accent="#005AAA" />
        </div>
        <div className="mx-auto h-8 w-[3px] bg-[#F5A623]" />
        <div className="mx-auto max-w-sm">
          <OrgCard node={energyOrgChart.gm} accent="#005AAA" />
        </div>
        <div className="mx-auto h-8 w-[3px] bg-[#F5A623]" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {energyOrgChart.left.map((node) => (
              <OrgCard key={node.name} node={node} accent="#005AAA" />
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {energyOrgChart.right.map((node) => (
              <OrgCard key={node.name} node={node} accent="#005AAA" />
            ))}
          </div>
        </div>
      </div>
    </OrganizationChart>
  );
}

function VisionMissionCards({
  vision,
  mission,
  accent = "#35B24A",
}: {
  vision: string;
  mission: string;
  accent?: string;
}) {
  return (
    <section className="scroll-reveal grid gap-5 md:grid-cols-2">
      {[
        { title: "Vision", text: vision },
        { title: "Mission", text: mission },
      ].map((item) => (
        <article key={item.title} className="subsidiary-card-shine rounded-[28px] bg-[#005AAA] p-7 text-white shadow-[0_24px_70px_rgba(0,90,170,.16)]">
          <div
            className="mb-5 inline-flex rounded-xl px-5 py-2 text-lg font-black text-white"
            style={{ backgroundColor: accent }}
          >
            {item.title}
          </div>
          <p className="text-justify text-base leading-8 text-white/88">{item.text}</p>
        </article>
      ))}
    </section>
  );
}

function JetamaWaterDetail() {
  const page = subsidiaryPages.water;

  return (
    <div className="space-y-20">
      <IntroBlock page={page}>
        <EditorialPoint accent={page.accent}>
          Jetama Water Sdn. Bhd. (JWSB), formerly known as Corporate Dynamics Sdn. Bhd., is a subsidiary of JETAMA Sdn. Bhd. and is involved in the Kota Kinabalu Water Privatisation Project, supplying potable drinking water to consumers on the West Coast of Sabah.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          JWSB operates and maintains existing water treatment facilities within the Kota Kinabalu region. With 240 staff, the company services an area of approximately 80 km by 25 km from Tuaran in the North to Papar in the South.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          The company runs six water treatment plants at Tuaran, Tamparuli, Telibong, Kasigui, Papar and Moyog, with Moyog Water Treatment Plant being the largest treatment plant in Sabah.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          JWSB is also responsible for operating and maintaining the primary network consisting of approximately 200 km of transmission mains, 30 service reservoirs and the Babagon Dam.
        </EditorialPoint>
      </IntroBlock>

      <section className="scroll-reveal grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {waterFacts.map((fact) => (
          <StatCard key={fact.text} label={fact.label} text={fact.text} accent={page.accent} />
        ))}
      </section>

      <VisionMissionCards
        accent="#35B24A"
        vision="To be recognized as a trusted and technically competent partner for life in the management of potable water in terms of Quality, Quantity, Reliability, Economy, Safety and Environment."
        mission="To provide clean, high quality and uninterrupted potable water to our client supported by the efforts of a committed and competent workforce."
      />

      <WaterOrganizationChart />

      <section className="scroll-reveal">
        <SectionTitle
          eyebrow="Systems & Capability"
          title="Technology, Quality & Human Capital"
          text="JWSB emphasizes reliable production, quality monitoring, technology transfer and modern operating systems such as telemetry, automation and SCADA, supported by in-house laboratories and trained professional staff."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Quality Standards", text: "Production and water quality monitored to meet recognized standards." },
            { icon: Factory, title: "Treatment Operations", text: "Operation and maintenance for WTPs, mains, reservoirs and dam assets." },
            { icon: Award, title: "In-House Laboratory", text: "Monitoring and control of the treatment process through laboratory capability." },
            { icon: UsersRound, title: "Skilled Workforce", text: "Committed, trained and professional human capital for contract delivery." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="subsidiary-card-shine rounded-[26px] bg-white/84 p-6 shadow-[0_18px_50px_rgba(15,60,110,.08)] backdrop-blur transition hover:-translate-y-2 hover:bg-white">
                <Icon className="text-[#35B24A]" size={30} />
                <h3 className="mt-4 text-xl font-black text-[#005AAA]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function JetamaEnergyDetail() {
  const page = subsidiaryPages.energy;

  const energyValues = [
    { title: "People", text: "Empowering and caring for each other to create a safe and respectful working environment where people can grow, perform and succeed." },
    { title: "Client", text: "The success of clients radiates the company’s success in delivery." },
    { title: "Integrity", text: "Professional and ethical standards built on trust, honesty, fairness, respect and safety." },
    { title: "Commitment", text: "Engaging, loyal and accountable to stakeholders in achieving common goals and excellence." },
    { title: "Innovation & Change", text: "Remaining ahead through an entrepreneurial, passionate, open, innovative and smart culture." },
    { title: "Excellence", text: "Pursuing excellence and innovative solutions for a more efficient and sustainable low-carbon state." },
  ];

  return (
    <div className="space-y-20">
      <IntroBlock page={page}>
        <EditorialPoint accent={page.accent}>
          Jetama Energy Sdn. Bhd. was established to energize Sabah towards a sustainable and low-carbon environment through renewable energy solutions.
        </EditorialPoint>
        <EditorialPoint accent={page.accent}>
          The company focuses on economical, innovative and high-quality renewable energy delivery while building a culture of excellence, trust, collaboration and performance with its team and partners.
        </EditorialPoint>
      </IntroBlock>

      <VisionMissionCards
        accent="#F5A623"
        vision="To energize Sabah towards a sustainable and low carbon environment."
        mission="To generate sustainable renewable energy solutions that enable Sabah to reduce its carbon footprint, while delivering economical and innovative solutions that meet the highest expectations of customers and partners."
      />

      <section className="scroll-reveal">
        <SectionTitle
          eyebrow="Our Values"
          title="Energy Values & Culture"
          text="Jetama Energy’s values support its renewable energy delivery, stakeholder commitment and sustainable business goals."
          accent="#F5A623"
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {energyValues.map((item) => (
            <article key={item.title} className="subsidiary-card-shine rounded-[26px] bg-white/84 p-6 shadow-[0_18px_50px_rgba(15,60,110,.08)] backdrop-blur transition hover:-translate-y-2 hover:bg-white">
              <h3 className="text-xl font-black uppercase text-[#005AAA]">{item.title}</h3>
              <p className="mt-3 text-justify text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <EnergyOrganizationChart />

      <section className="scroll-reveal">
        <SectionTitle
          eyebrow="LSS Sabah 2024"
          title="Upcoming Large Scale Solar Projects"
          text="Through the 2024 Energy Commission of Sabah bidding exercise, Jetama Energy secured two Large Scale Solar projects scheduled for commercial operations in December 2026."
          accent="#F5A623"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            {
              title: "13.21 MWac Floating Solar PV",
              text: "Proposed floating solar PV project at Babagon Dam, Penampang. It will use approximately 40 acres of water surface and supports the company’s mission to redefine water and energy.",
            },
            {
              title: "15 MWac Fixed-Tilt Solar PV",
              text: "Proposed fixed-tilt ground mounted solar PV project at Batu Sapi, Sandakan. The power purchase agreement is planned for a 25-year period.",
            },
          ].map((project) => (
            <article key={project.title} className="subsidiary-card-shine rounded-[28px] bg-white/84 p-7 shadow-[0_18px_50px_rgba(15,60,110,.08)] backdrop-blur transition hover:-translate-y-2 hover:bg-white">
              <Sun className="text-[#F5A623]" size={32} />
              <h3 className="mt-4 text-2xl font-black text-[#005AAA]">{project.title}</h3>
              <p className="mt-4 text-justify text-base leading-8 text-slate-600">{project.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
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

      .subsidiary-sustainable-page { background: #f7fbff; }

      .scroll-reveal { opacity: 0; transform: translateY(28px); }
      .scroll-reveal.scroll-visible { animation: jetamaFadeUp .82s cubic-bezier(.2,.8,.2,1) both; }

      .subsidiary-float-one { animation: jetamaSoftFloat 12s ease-in-out infinite; }
      .subsidiary-float-two { animation: jetamaSoftFloat 15s ease-in-out infinite reverse; }

      .subsidiary-card-shine { position: relative; overflow: hidden; }
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
      .subsidiary-card-shine:hover::before { animation: jetamaShine 1.9s ease; }

      .service-like-page {
        background: linear-gradient(135deg,#f8fbff 0%,#ffffff 42%,#eefaf3 100%);
        color: #0f2f44;
      }

      .service-like-shell { position: relative; isolation: isolate; }
      .service-like-shell::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 1px 1px, rgba(0,90,170,.055) 1px, transparent 0);
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

      .service-like-content { width: 100%; min-width: 0; }
      .service-like-content article,
      .service-like-content section {
        border-color: transparent !important;
      }

      .service-side-nav {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        padding: 0 1rem !important;
      }

      .service-side-nav a { border-radius: 0 !important; }
      .service-side-nav a.active-link {
        background: #ffffff !important;
        color: #005AAA !important;
        box-shadow: 0 8px 24px rgba(0,90,170,.08) !important;
      }
      .service-side-nav a:not(.active-link) { color: #1e293b !important; }
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

      <section className="service-like-shell relative z-10 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
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
