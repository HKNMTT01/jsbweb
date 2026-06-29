import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Droplets,
  HandHeart,
  Leaf,
  Recycle,
  ShieldCheck,
  Sprout,
  Sun,
  UsersRound,
  Waves,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { label: "Residents Served", value: "1M+", text: "Treated water across Sabah's West Coast." },
  { label: "Water Assets", value: "6 WTP", text: "Moyog WTP, Babagon Dam, mains and reservoirs." },
  { label: "Solar Output", value: "23 GWh/yr", text: "Labuan 10 MWac LSS PV estimated generation." },
  { label: "CO₂ Avoided", value: "11k tCO₂", text: "Estimated annual reduction from Labuan solar." },
];

const esgTimeline = [
  {
    id: "environmental",
    letter: "E",
    title: "Environmental Stewardship",
    subtitle: "Water efficiency, renewable energy and biodiversity care.",
    accent: "#35B24A",
    icon: Leaf,
    link: "/sustainability/environmental",
    highlights: [
      "Optimise water treatment operations through monitoring, automation and preventive maintenance.",
      "Grow renewable energy through Labuan LSS, Batu Sapi Solar and Babagon Floating Solar.",
      "Support biodiversity through underwater clean-up, marine research and circular sludge innovation.",
    ],
  },
  {
    id: "social",
    letter: "S",
    title: "Social Responsibility",
    subtitle: "People, safety, inclusion and community value.",
    accent: "#005AAA",
    icon: UsersRound,
    link: "/sustainability/social",
    highlights: [
      "Strengthen employee well-being, occupational safety and ESG-aware workplace culture.",
      "Build talent capability through technical learning, leadership exposure and succession planning.",
      "Support communities through culture, youth, sport, education and environmental programmes.",
    ],
  },
  {
    id: "governance",
    letter: "G",
    title: "Governance & Transparency",
    subtitle: "Ethical leadership, risk control and accountability.",
    accent: "#F6A623",
    icon: ShieldCheck,
    link: "/sustainability/governance",
    highlights: [
      "Embed accountability, transparency and integrity in Board and management oversight.",
      "Maintain anti-bribery controls through GT&C Policy, ISO 37001 and integrity commitments.",
      "Improve reporting, compliance, procurement fairness and audit discipline.",
    ],
  },
];

const activityCards = [
  {
    pillar: "E",
    title: "Underwater Clean-Up",
    category: "Marine Protection",
    icon: Waves,
    accent: "#35B24A",
    frontText: "MBOR-recognised marine debris and plastic waste clean-up.",
    backText: "Recovered 2,171 kg marine debris and 1,578 kg plastic waste in record one-day clean-up categories.",
  },
  {
    pillar: "E",
    title: "Eco-Brick Innovation",
    category: "Circular Economy",
    icon: Recycle,
    accent: "#35B24A",
    frontText: "Water treatment sludge repurposed into eco-bricks.",
    backText: "Phase trials tested more than 70 formulations, with 15:85 mix achieving up to 61.84 kg/cm² compressive strength.",
  },
  {
    pillar: "E",
    title: "Solar Portfolio",
    category: "Renewable Energy",
    icon: Zap,
    accent: "#35B24A",
    frontText: "Labuan, Batu Sapi and Babagon solar development.",
    backText: "Portfolio supports more than 35 MWac capacity and approximately 45 GWh renewable electricity yearly.",
  },
  {
    pillar: "S",
    title: "Community Ecotourism",
    category: "Community Value",
    icon: Sprout,
    accent: "#005AAA",
    frontText: "Babagon catchment communities supported through livelihood and awareness initiatives.",
    backText: "Community tourism creates income opportunities while strengthening environmental awareness among local youth.",
  },
  {
    pillar: "S",
    title: "Sabah FC Partnership",
    category: "Youth & Sports",
    icon: HandHeart,
    accent: "#005AAA",
    frontText: "RM1.5 million sponsorship connecting WAIG with community and sport.",
    backText: "Supports local football, youth development, community engagement and healthy lifestyle visibility.",
  },
  {
    pillar: "G",
    title: "Integrity Pledge",
    category: "Ethics & Compliance",
    icon: BadgeCheck,
    accent: "#F6A623",
    frontText: "Corporate Integrity Pledge and ISO 37001 strengthen anti-bribery culture.",
    backText: "Controls include integrity declarations, audits, supplier due diligence and whistleblowing awareness.",
  },
];

const certifications = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 37001", "ISO 39001"];
const sdgs = ["SDG 6", "SDG 7", "SDG 8", "SDG 11", "SDG 12", "SDG 13", "SDG 14", "SDG 15", "SDG 16", "SDG 17"];

function PageStyles() {
  return (
    <style>{`
      .flip-card {
        perspective: 1200px;
      }

      .flip-card-inner {
        transform-style: preserve-3d;
        transition: transform .75s cubic-bezier(.2,.8,.2,1);
      }

      .flip-card:hover .flip-card-inner,
      .flip-card:focus-within .flip-card-inner {
        transform: rotateY(180deg);
      }

      .flip-face {
        backface-visibility: hidden;
      }

      .flip-back {
        transform: rotateY(180deg);
      }

      @keyframes softFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(18px,-16px,0) rotate(2deg); }
      }

      .soft-float {
        animation: softFloat 13s ease-in-out infinite;
      }
    `}</style>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.65 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}
    >
      <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#005AAA] md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{text}</p>}
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate pt-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#eef8ff_46%,#f8fff6_100%)]" />
      <div className="soft-float absolute left-[-180px] top-8 -z-10 h-[420px] w-[420px] rotate-45 rounded-[72px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
      <div className="soft-float absolute right-[-160px] top-32 -z-10 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-[#35B24A]/15 bg-[#35B24A]/5 [animation-delay:1.5s]" />
      <div className="absolute right-[16%] top-32 -z-10 h-32 w-72 rotate-[-10deg] bg-[#F6A623]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end"
        >
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
              <Link to="/" className="transition hover:text-[#005AAA]">
                Home
              </Link>
              <ChevronRight size={15} className="text-slate-400" />
              <span className="font-bold text-[#005AAA]">Sustainability</span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#005AAA] md:text-7xl">
              Shaping Sustainable
              <span className="block text-[#35B24A]">Water & Energy</span>
              <span className="block text-[#F6A623]">For Sabah's Future</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              A cleaner ESG page focused on the essentials: one connected E-S-G journey, key activities, certifications and Jetama 2030 direction.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#esg-journey" className="group inline-flex items-center gap-2 rounded-full bg-[#005AAA] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(0,90,170,.25)] transition hover:-translate-y-1 hover:bg-[#35B24A]">
                View ESG Journey
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#activities" className="inline-flex items-center rounded-full border border-[#005AAA]/15 bg-white/80 px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-[#005AAA] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#F6A623] hover:bg-white">
                Activities
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/85 p-7 shadow-[0_28px_80px_rgba(15,60,110,.16)] backdrop-blur-xl">
            <div className="absolute right-0 top-0 h-2 w-full bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F6A623]" />
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#35B24A]">
              Baseline for Progress
            </p>
            <p className="mt-4 text-3xl font-black leading-tight text-[#005AAA]">
              2025 is Jetama's ESG baseline year for transparency, accountability and measurable progress.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4">
                  <p className="text-2xl font-black text-[#005AAA]">{item.value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-wide text-[#F6A623]">{item.label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SubNavigation() {
  return (
    <section className="sticky top-[96px] z-30 border-y border-[#005AAA]/10 bg-white/88 py-3 shadow-[0_12px_35px_rgba(0,90,170,.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 lg:px-8">
        {esgTimeline.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: item.accent }}
            >
              {item.letter}
            </span>
            {item.title.split(" ")[0]}
          </Link>
        ))}

        <Link
          to="/sustainability/projects-events"
          className="inline-flex shrink-0 items-center rounded-full border border-[#F6A623]/30 bg-[#fff7e6] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          Activities
        </Link>
      </div>
    </section>
  );
}

function ESGJourneyTimeline() {
  return (
    <section id="esg-journey" className="relative scroll-mt-32 overflow-hidden bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_50%,#f8fff7_100%)]" />
      <div className="soft-float absolute left-[-180px] top-20 -z-10 h-[400px] w-[400px] rotate-45 rounded-[82px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
      <div className="soft-float absolute right-[-190px] bottom-20 -z-10 h-[400px] w-[400px] rotate-12 rounded-[82px] border border-[#35B24A]/15 bg-[#35B24A]/5 [animation-delay:1.5s]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="JETAMA ESG Timeline"
          title="Our E · S · G Journey"
        />

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute left-6 top-0 hidden h-full w-[5px] rounded-full bg-gradient-to-b from-[#35B24A] via-[#005AAA] to-[#F6A623] md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {esgTimeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={item.id}
                  id={item.id}
                  initial={{ opacity: 0, y: 40, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.65, delay: index * 0.06 }}
                  className="relative scroll-mt-36 md:grid md:grid-cols-[1fr_110px_1fr] md:items-center md:gap-6"
                >
                  <div className={`${isLeft ? "md:col-start-1" : "md:col-start-3"}`}>
                    <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white/92 p-7 shadow-[0_22px_70px_rgba(15,60,110,.09)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,90,170,.16)]">
                      <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: item.accent }} />
                      <div
                        className="absolute right-0 top-0 h-32 w-40 opacity-10 transition group-hover:opacity-20"
                        style={{
                          backgroundColor: item.accent,
                          clipPath: "polygon(34% 0, 100% 0, 100% 100%, 0 58%)",
                        }}
                      />

                      <div className="relative flex items-start gap-5">
                        <div
                          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                          style={{ backgroundColor: item.accent }}
                        >
                          <Icon className="h-8 w-8" />
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                            Pillar {item.letter}
                          </p>
                          <h3 className="mt-2 text-2xl font-black leading-tight text-slate-900 md:text-3xl">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <ul className="relative mt-6 space-y-3">
                        {item.highlights.map((point) => (
                          <li key={point} className="flex gap-3 text-sm font-semibold leading-7 text-slate-600">
                            <span
                              className="mt-2.5 h-2 w-2 shrink-0 rounded-full"
                              style={{ backgroundColor: item.accent }}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:col-start-2 md:flex md:justify-center">
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-[1.45rem] border-[7px] border-white text-2xl font-black text-white shadow-[0_18px_45px_rgba(0,44,85,.20)]"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.letter}
                    </div>
                  </div>

                  <div className={`${isLeft ? "md:col-start-3" : "md:col-start-1 md:row-start-1"} hidden md:block`}>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
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

function ActivityFlipCards() {
  return (
    <section id="activities" className="relative scroll-mt-32 overflow-hidden bg-[#005AAA] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(53,178,74,.28),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(246,166,35,.24),transparent_30%)]" />
      <div className="absolute left-[-160px] top-20 h-[360px] w-[360px] rotate-45 rounded-[72px] border border-white/10 bg-white/5 blur-sm" />
      <div className="absolute right-[-160px] bottom-20 h-[360px] w-[360px] rotate-12 rounded-[72px] border border-white/10 bg-white/5 blur-sm" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">
              ESG Activities
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-white/78">
              Hover each card to reveal a quick impact note. This keeps the section clean while still showing important ESG activity highlights.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur"
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#F6A623]">
              Report Highlight
            </p>
            <p className="mt-4 text-xl font-bold leading-8 text-white/86">
              Activities ESG actions: marine protection, circular innovation, clean energy, community development and integrity.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activityCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="flip-card h-[290px] focus-within:outline-none"
                tabIndex={0}
              >
                <div className="flip-card-inner relative h-full w-full">
                  <div className="flip-face absolute inset-0 overflow-hidden rounded-[30px] border border-white/15 bg-white/12 p-6 shadow-[0_22px_70px_rgba(0,20,45,.24)] backdrop-blur">
                    <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: card.accent }} />
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: card.accent }}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                        Pillar {card.pillar}
                      </span>
                    </div>

                    <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[#F6A623]">
                      {card.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/76">
                      {card.frontText}
                    </p>
                    <p className="absolute bottom-5 left-6 text-xs font-black uppercase tracking-[0.18em] text-white/55">
                      Hover to flip
                    </p>
                  </div>

                  <div className="flip-face flip-back absolute inset-0 overflow-hidden rounded-[30px] border border-white/15 bg-white p-6 text-[#052B4F] shadow-[0_22px_70px_rgba(0,20,45,.24)]">
                    <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: card.accent }} />
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: card.accent }}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-7 text-xs font-black uppercase tracking-[0.18em]" style={{ color: card.accent }}>
                      Impact
                    </p>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-[#005AAA]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base font-semibold leading-8 text-slate-600">
                      {card.backText}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StandardsSection() {
  return (
    <section className="relative bg-[#f7fbff] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
              Standards & Global Goals
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">
              Certifications, SDGs & Jetama 2030
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A close-out section showing certified systems, ESG alignment and Jetama's direction from baseline reporting toward 2030.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {certifications.map((item) => (
                <span key={item} className="rounded-full border border-[#005AAA]/15 bg-white px-4 py-2 text-sm font-black text-[#005AAA]">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,60,110,.08)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005AAA]/10 text-[#005AAA]">
                <Sun />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#F6A623]">
                  Aligned With Global Goals
                </p>
                <h3 className="text-2xl font-black text-slate-900">
                  ESG & SDG Alignment
                </h3>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {sdgs.map((sdg, index) => (
                <motion.div
                  key={sdg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="rounded-2xl bg-gradient-to-br from-[#005AAA] via-[#35B24A] to-[#F6A623] p-[1px]"
                >
                  <div className="rounded-2xl bg-white px-3 py-4 text-center text-xs font-black text-[#005AAA]">
                    {sdg}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PathForward() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#005AAA] via-[#006fba] to-[#35B24A] p-8 text-white shadow-[0_30px_90px_rgba(0,90,170,.22)] md:p-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">
                Path Forward
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
                From Baseline To Jetama 2030
              </h2>
            </div>
            <div>
              <p className="leading-8 text-white/82">
                Jetama will continue strengthening water security, renewable energy, community collaboration, integrity and ESG data transparency.
              </p>
              <Link
                to="/projects"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-black uppercase tracking-wide text-[#005AAA] transition hover:-translate-y-1 hover:bg-[#F6A623]"
              >
                View Related Projects <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Sustainability() {
  const location = useLocation();

  useEffect(() => {
    const pathToId: Record<string, string> = {
      "/sustainability/environmental": "environmental",
      "/sustainability/social": "social",
      "/sustainability/governance": "governance",
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
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900 selection:bg-[#F6A623] selection:text-[#052B4F]">
      <PageStyles />
      <HeroSection />
      <SubNavigation />
      <ESGJourneyTimeline />
      <ActivityFlipCards />
      <StandardsSection />
      <PathForward />
    </main>
  );
}
