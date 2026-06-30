import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  Droplets,
  HandHeart,
  Leaf,
  Recycle,
  ShieldCheck,
  Sun,
  UsersRound,
  Waves,
  Zap,
} from "lucide-react";

import damHeroImage from "@/assets/jetama-dam-hero.jpg";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import bookRecordImage from "@/assets/3274066.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

const stats = [
  {
    label: "Residents Served",
    value: "1M+",
    text: "Treated water across Sabah's West Coast.",
    icon: UsersRound,
    color: "#35B24A",
  },
  {
    label: "Water Assets",
    value: "6 WTP",
    text: "Moyog WTP, Babagon Dam, mains and reservoirs.",
    icon: Droplets,
    color: "#005AAA",
  },
  {
    label: "Solar Output",
    value: "23 GWh/yr",
    text: "From Labuan, Batu Sapi & Babagon solar assets.",
    icon: Sun,
    color: "#F6A623",
  },
  {
    label: "CO₂ Avoided",
    value: "11k tCO₂",
    text: "Estimated annual reduction from renewable energy.",
    icon: Leaf,
    color: "#35B24A",
  },
];

const esgPillars = [
  {
    letter: "E",
    title: "Environmental Stewardship",
    text: "Protecting the environment and driving climate action.",
    color: "#0B8F4D",
    icon: Leaf,
    points: [
      "Water efficiency & environmental stewardship",
      "Renewable energy & climate action",
      "Biodiversity & marine protection",
      "Circular economy & waste management",
    ],
  },
  {
    letter: "S",
    title: "Social Responsibility",
    text: "Empowering people and strengthening communities.",
    color: "#005AAA",
    icon: UsersRound,
    points: [
      "Employee well-being & safety",
      "Talent development & human capital growth",
      "Diversity, equity & inclusion (DEI)",
      "Community engagement & social programmes",
    ],
  },
  {
    letter: "G",
    title: "Good Governance",
    text: "Upholding integrity, transparency and accountability.",
    color: "#F07800",
    icon: ShieldCheck,
    points: [
      "Ethical leadership & governance",
      "Anti-bribery & corruption management",
      "Risk management & compliance",
      "Transparency & stakeholder trust",
    ],
  },
];

const performanceRows = [
  {
    area: "Water Resource Management",
    icon: Droplets,
    color: "#005AAA",
    indicators: [
      ["Total treated water produced", "— MLD", "Six (6) treatment plants across the West Coast"],
      ["Water efficiency initiatives", "In Progress", "Monitoring, automation & preventive maintenance"],
    ],
  },
  {
    area: "Energy Consumption",
    icon: Sun,
    color: "#F07800",
    indicators: [
      ["Electricity usage (Scope 2)", "— kWh", "Baseline verification & monitoring in progress"],
      ["Renewable energy generated", "— MWh", "Solar from Labuan LSS, Babagon FSPV, Batu Sapi LSS"],
    ],
  },
  {
    area: "GHG Emissions",
    icon: Leaf,
    color: "#35B24A",
    indicators: [
      ["Scope 1 & 2 total emissions", "— tCO₂e", "First consolidated GHG baseline established"],
      ["Avoided emissions via solar", "— tCO₂e", "Supporting Sabah's low-carbon goals"],
    ],
  },
  {
    area: "Waste Management",
    icon: Recycle,
    color: "#35B24A",
    indicators: [
      ["Scheduled waste generated", "— tonnes", "All disposed via DOE-licensed contractors"],
      ["Sludge reused as eco-bricks", "— tonnes", "Eco-brick development using water treatment sludge"],
    ],
  },
  {
    area: "Marine & Biodiversity",
    icon: Waves,
    color: "#005AAA",
    indicators: [
      ["Marine debris collected", "2,171 kg", "MBOR-certified national record"],
      ["Plastic waste recovered", "1,578 kg", "Heaviest underwater plastic clean-up in a day"],
      ["Total marine waste removed", "≈ 12,000 kg", "Cumulative impact from marine clean-up programme"],
    ],
  },
];

const activityCards = [
  {
    pillar: "E",
    title: "Underwater Clean-Up",
    subtitle: "Marine Protection",
    stat: "2,171 kg",
    stat2: "1,578 kg",
    text: "Recovered marine debris and plastic waste in record one-day clean-up categories.",
    icon: Waves,
    color: "#0B8F4D",
  },
  {
    pillar: "E",
    title: "Eco-Brick Innovation",
    subtitle: "Circular Economy",
    stat: ">70",
    stat2: "61.84 kg/cm²",
    text: "Phase trials tested formulations using water treatment sludge.",
    icon: Recycle,
    color: "#0B8F4D",
  },
  {
    pillar: "E",
    title: "Solar Portfolio",
    subtitle: "Renewable Energy",
    stat: ">35 MWac",
    stat2: "~45 GWh",
    text: "Portfolio supports clean capacity and renewable electricity generation annually.",
    icon: Sun,
    color: "#0B8F4D",
  },
  {
    pillar: "S",
    title: "Community Ecotourism",
    subtitle: "Community Value",
    stat: "Empower",
    stat2: "Babagon",
    text: "Empowering local communities through livelihoods and awareness initiatives.",
    icon: UsersRound,
    color: "#005AAA",
  },
  {
    pillar: "S",
    title: "Sabah FC Partnership",
    subtitle: "Youth & Sports",
    stat: "RM1.5 mil",
    stat2: "Youth",
    text: "Sponsorship supporting youth, community and healthy lifestyle visibility.",
    icon: HandHeart,
    color: "#005AAA",
  },
  {
    pillar: "G",
    title: "Integrity Pledge",
    subtitle: "Ethics & Compliance",
    stat: "ISO 37001",
    stat2: "Trust",
    text: "Controls and declarations build ethical culture and stakeholder confidence.",
    icon: ShieldCheck,
    color: "#F07800",
  },
];

const certifications = [
  ["ISO 9001", "Quality"],
  ["ISO 14001", "Environment"],
  ["ISO 45001", "OH&S"],
  ["ISO 37001", "Anti-Bribery"],
  ["ISO 39001", "Road Safety"],
];

const sdgs = ["SDG 6", "SDG 7", "SDG 8", "SDG 11", "SDG 12", "SDG 13", "SDG 14", "SDG 15", "SDG 16", "SDG 17"];

function PageStyles() {
  return (
    <style>{`
      @keyframes softFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(14px,-12px,0) rotate(1.5deg); }
      }

      @keyframes shineSweep {
        0% { transform: translateX(-150%) skewX(-18deg); opacity: 0; }
        28% { opacity: .45; }
        100% { transform: translateX(190%) skewX(-18deg); opacity: 0; }
      }

      .esg-soft-float { animation: softFloat 12s ease-in-out infinite; }
      .esg-card-shine { position: relative; overflow: hidden; }
      .esg-card-shine::before {
        content: "";
        position: absolute;
        top: -45%;
        bottom: -45%;
        left: -35%;
        width: 30%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
        transform: translateX(-150%) skewX(-18deg);
        pointer-events: none;
      }
      .esg-card-shine:hover::before { animation: shineSweep 1.8s ease; }

      .esg-hero-arc {
        clip-path: path("M 0 0 C 130 70, 210 130, 260 240 C 320 360, 450 410, 600 410 L 600 0 Z");
      }

      @media (max-width: 1024px) {
        .esg-hero-arc { clip-path: none; }
      }
    `}</style>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#052B4F] pt-32 text-white">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#052B4F_0%,#005AAA_44%,#0f7f82_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(53,178,74,.34),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(246,166,35,.22),transparent_25%),radial-gradient(circle_at_50%_88%,rgba(255,255,255,.13),transparent_35%)]" />
      <div className="soft-beam absolute left-[-18%] top-[12%] -z-10 h-[420px] w-[62%] bg-[linear-gradient(105deg,transparent,rgba(255,255,255,.28),transparent)] blur-sm" />
      <div className="soft-float absolute left-[-160px] top-20 -z-10 h-[420px] w-[420px] rotate-45 rounded-[72px] border border-white/10 bg-white/[.045] blur-sm" />
      <div className="soft-float absolute right-[-180px] bottom-10 -z-10 h-[440px] w-[440px] rotate-12 rounded-[82px] border border-white/10 bg-[#35B24A]/10 blur-sm [animation-delay:1.5s]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#f7fbff] via-[#f7fbff]/55 to-transparent" />

      <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pb-24 pt-16 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="max-w-5xl"
        >
          <div className="mb-7 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/78">
            <Link to="/" className="transition hover:text-[#F6A623]">Home</Link>
            <ChevronRight size={15} className="text-white/45" />
            <span className="font-bold text-white">Sustainability</span>
          </div>

          <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white drop-shadow-[0_18px_45px_rgba(0,0,0,.20)] md:text-5xl lg:text-5xl">
            Sustainable Today
            <span className="block text-[#F6A623]">Better Tomorrow</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg font-medium leading-9 text-white/82 md:text-xl">
            Jetama is committed to Environmental Stewardship, Social Responsibility and Good Governance — shaping sustainable water and energy for Sabah’s future.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Reliable Water", color: "#35B24A", icon: Droplets },
              { label: "Renewable Energy", color: "#F6A623", icon: Zap },
              { label: "Responsible Growth", color: "#005AAA", icon: ShieldCheck },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/12 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur-md"
                >
                  <Icon size={17} style={{ color: item.color }} />
                  {item.label}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="relative z-10 bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="esg-card-shine rounded-[1.45rem] bg-white p-6 shadow-[0_16px_45px_rgba(0,90,170,.10)] ring-1 ring-slate-200/70"
            >
              <div className="flex items-start gap-4">
                <Icon size={36} style={{ color: item.color }} />
                <div>
                  <p className="text-sm font-black text-[#052B4F]">{item.label}</p>
                  <p className="mt-2 text-3xl font-black leading-none" style={{ color: item.color }}>
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function SectionTitle({ title, text }: { title: string; text?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl text-center"
    >
      <h2 className="text-3xl font-black uppercase tracking-[-0.03em] text-[#052B4F] md:text-4xl">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">{text}</p>}
    </motion.div>
  );
}

function ESGPillars() {
  return (
    <section id="esg-pillars" className="bg-white px-6 pb-14 pt-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Our ESG Pillars"
          text="Our sustainability journey is built on three pillars that guide our decisions, strengthen governance and create long-term value for Sabah and its people."
        />

        <div className="relative mx-auto mt-12 max-w-6xl">
          <div className="absolute left-0 right-0 top-5 hidden h-[2px] bg-[#052B4F]/35 md:block" />
          <div className="grid gap-8 md:grid-cols-3">
            {esgPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="relative pt-12"
                >
                  <div className="absolute left-1/2 top-0 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-lg font-black text-white shadow-[0_12px_30px_rgba(0,90,170,.18)]" style={{ backgroundColor: pillar.color }}>
                    {pillar.letter}
                  </div>

                  <div className="h-full rounded-[1.8rem] p-[1px] shadow-[0_18px_55px_rgba(0,90,170,.08)]" style={{ background: `linear-gradient(135deg, ${pillar.color}55, transparent)` }}>
                    <div className="h-full rounded-[1.75rem] bg-white p-7" style={{ background: `linear-gradient(135deg, ${pillar.color}10, #ffffff 58%)` }}>
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full text-white" style={{ backgroundColor: pillar.color }}>
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-black uppercase leading-tight" style={{ color: pillar.color }}>
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{pillar.text}</p>
                      <ul className="mt-5 space-y-3">
                        {pillar.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                            <Check size={17} className="mt-1 shrink-0" style={{ color: pillar.color }} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MBORHighlight() {
  return (
    <section id="achievements" className="bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_70px_rgba(0,90,170,.10)] ring-1 ring-slate-200/70 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="p-7 md:p-9">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005AAA]">Proud Achievement</p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#052B4F] md:text-4xl">
            Malaysia Book of Records
          </h2>
          <p className="mt-3 text-base font-black uppercase leading-6 text-[#0B8F4D]">
            First company to achieve two (2) national records for underwater clean-up
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Jetama is honoured to be certified by the Malaysia Book of Records for the most underwater materials collected in one day.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-[0_12px_35px_rgba(0,90,170,.08)] ring-1 ring-slate-200/70">
              <Recycle className="text-[#0B8F4D]" size={30} />
              <p className="mt-3 text-3xl font-black text-[#0B8F4D]">2,171 kg</p>
              <p className="mt-1 text-xs font-black uppercase text-[#0B8F4D]">Marine Debris Collected</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">Most underwater materials collected in one day</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-[0_12px_35px_rgba(0,90,170,.08)] ring-1 ring-slate-200/70">
              <Droplets className="text-[#005AAA]" size={30} />
              <p className="mt-3 text-3xl font-black text-[#005AAA]">1,578 kg</p>
              <p className="mt-1 text-xs font-black uppercase text-[#005AAA]">Plastic Waste Collected</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">Most underwater plastic waste collected in one day</p>
            </div>
          </div>

          <p className="mt-7 text-sm leading-7 text-slate-600">
            This achievement reflects our commitment to cleaner oceans, healthier ecosystems and a sustainable future for Sabah.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }} className="relative min-h-[380px] overflow-hidden lg:min-h-full">
          <img src={bookRecordImage} alt="JETAMA Malaysia Book of Records underwater clean-up achievement" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-[#005AAA]/95 px-5 py-2 text-center text-xs font-semibold text-white">
            Official Recognition Ceremony by Malaysia Book of Records
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PerformanceTable() {
  return (
    <section className="bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_55px_rgba(0,90,170,.08)] ring-1 ring-slate-200/80">
          <h2 className="border-b border-slate-200 bg-white px-6 py-5 text-center text-2xl font-black uppercase text-[#052B4F]">
            Environmental Performance 2025 <span className="text-sm text-[#005AAA]">(Baseline Year)</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-xs font-black uppercase tracking-[0.08em] text-[#052B4F]">
                  <th className="w-[210px] border-b border-slate-200 px-5 py-4">Focus Area</th>
                  <th className="border-b border-slate-200 px-5 py-4">Indicator</th>
                  <th className="w-[170px] border-b border-slate-200 px-5 py-4">2025 Data</th>
                  <th className="border-b border-slate-200 px-5 py-4">Highlights / Remarks</th>
                </tr>
              </thead>
              <tbody>
                {performanceRows.flatMap((group) => {
                  const Icon = group.icon;
                  return group.indicators.map(([indicator, data, remark], index) => (
                    <tr key={`${group.area}-${indicator}`} className="border-b border-slate-100 last:border-b-0">
                      {index === 0 && (
                        <td rowSpan={group.indicators.length} className="border-r border-slate-100 px-5 py-4 align-top">
                          <div className="flex items-start gap-3">
                            <Icon size={26} style={{ color: group.color }} />
                            <span className="text-sm font-black leading-5" style={{ color: group.color }}>{group.area}</span>
                          </div>
                        </td>
                      )}
                      <td className="px-5 py-3 text-slate-700">{indicator}</td>
                      <td className="px-5 py-3 font-black text-[#052B4F]">{data}</td>
                      <td className="px-5 py-3 text-slate-600">{remark}</td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-xs italic text-slate-500">* Data for 2025 are still being compiled and will be updated before final publication.</p>
      </div>
    </section>
  );
}

function ActivityCards() {
  return (
    <section id="activities" className="bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Our ESG Activities" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {activityCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="esg-card-shine min-h-[265px] rounded-[1.45rem] bg-white p-5 shadow-[0_16px_45px_rgba(0,90,170,.08)] ring-1 ring-slate-200/80"
              >
                <div className="mb-5 flex items-start justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-white" style={{ backgroundColor: card.color }}>{card.pillar}</span>
                  <Icon size={34} style={{ color: card.color }} />
                </div>
                <h3 className="text-xl font-black leading-tight" style={{ color: card.color }}>{card.title}</h3>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.08em]" style={{ color: card.color }}>{card.subtitle}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  <span className="block text-lg font-black" style={{ color: card.color }}>{card.stat}</span>
                  <span className="block font-black" style={{ color: card.color }}>{card.stat2}</span>
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CertificationsAndSDGs() {
  return (
    <section className="bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[1.45rem] bg-white p-6 shadow-[0_16px_45px_rgba(0,90,170,.08)] ring-1 ring-slate-200/80">
          <h3 className="text-xl font-black uppercase text-[#052B4F]">Our Certifications</h3>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-5">
            {certifications.map(([cert, label], index) => (
              <div key={cert} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[5px] bg-white text-xs font-black shadow-sm" style={{ borderColor: ["#005AAA", "#35B24A", "#E63946", "#8E44AD", "#1B8AA8"][index] }}>
                  ISO
                </div>
                <p className="mt-2 text-xs font-black text-[#052B4F]">{cert}</p>
                <p className="text-[11px] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.45rem] bg-white p-6 shadow-[0_16px_45px_rgba(0,90,170,.08)] ring-1 ring-slate-200/80">
          <h3 className="text-xl font-black uppercase text-[#052B4F]">Aligned With The Global Goals</h3>
          <div className="mt-5 grid grid-cols-5 gap-3 md:grid-cols-10">
            {sdgs.map((sdg, index) => (
              <div key={sdg} className="rounded-lg px-2 py-3 text-center text-[11px] font-black text-white" style={{ backgroundColor: ["#26BDE2", "#FCC30B", "#A21942", "#FD9D24", "#BF8B2E", "#3F7E44", "#0A97D9", "#56C02B", "#00689D", "#19486A"][index] }}>
                {sdg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-[#005AAA] px-6 py-10 text-white lg:px-8">
      <img src={damHeroImage} alt="Sabah sustainable future" className="absolute inset-0 h-full w-full object-cover opacity-28" />
      <div className="absolute inset-0 bg-[#005AAA]/82" />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-black leading-tight md:text-4xl">Building a Sustainable Future for Sabah</h2>
        <p className="mt-3 text-lg text-white/82">Together, we redefine water and energy for generations to come.</p>
        <a href="#esg-pillars" className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#35B24A] px-7 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#F6A623] hover:text-[#052B4F]">
          Explore Our Sustainability Journey <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}

export default function Sustainability() {
  const location = useLocation();

  useEffect(() => {
    const pathToId: Record<string, string> = {
      "/sustainability/environmental": "esg-pillars",
      "/sustainability/social": "esg-pillars",
      "/sustainability/governance": "esg-pillars",
      "/sustainability/projects-events": "activities",
    };

    const hashId = location.hash.replace("#", "");
    const targetId = hashId || pathToId[location.pathname];
    if (!targetId) return;

    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#052B4F] selection:bg-[#F6A623] selection:text-[#052B4F]">
      <PageStyles />
      <HeroSection />
      <StatsBand />
      <ESGPillars />
      <MBORHighlight />
      <PerformanceTable />
      <ActivityCards />
      <CertificationsAndSDGs />
      <FooterCTA />
    </main>
  );
}
