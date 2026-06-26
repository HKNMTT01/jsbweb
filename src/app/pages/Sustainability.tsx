import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Droplets,
  Factory,
  Handshake,
  Leaf,
  Recycle,
  ShieldCheck,
  Sprout,
  Users,
  Waves,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { label: "Residents Served", value: "1M+", text: "Treated water supplied across Sabah's West Coast." },
  { label: "Water Assets", value: "6 WTP", text: "Including Moyog WTP, Babagon Dam, mains and reservoirs." },
  { label: "Solar Output", value: "23 GWh/yr", text: "Labuan LSS PV estimated annual generation." },
  { label: "CO₂ Avoided", value: "11k tCO₂", text: "Estimated annual reduction from Labuan LSS PV." },
];

const esgPillars = [
  {
    letter: "E",
    title: "Environmental Stewardship",
    subtitle: "Water, climate and natural ecosystems",
    accent: "#35B24A",
    items: [
      "Responsible water and energy management",
      "Water efficiency and resource optimisation",
      "Renewable energy and low-carbon transition",
      "Biodiversity, marine protection and circular innovation",
    ],
  },
  {
    letter: "S",
    title: "Social Responsibility",
    subtitle: "People, safety and community value",
    accent: "#005AAA",
    items: [
      "Employee well-being and occupational safety",
      "Talent development and human capital growth",
      "Diversity, equity and inclusion",
      "Community engagement and social programmes",
    ],
  },
  {
    letter: "G",
    title: "Governance Integrity",
    subtitle: "Ethics, transparency and accountable leadership",
    accent: "#F6A623",
    items: [
      "Corporate governance and ethical leadership",
      "Anti-bribery, corruption and risk compliance",
      "Transparent ESG reporting and stakeholder trust",
      "Continuous improvement through certified systems",
    ],
  },
];

const timeline = [
  {
    year: "1988",
    title: "Foundation of Jetama",
    text: "Jetama was incorporated and later became a key water concessionaire supporting Sabah's West Coast water infrastructure.",
  },
  {
    year: "2024",
    title: "Renewable Energy Progress",
    text: "Labuan 10 MWac LSS PV reached commercial operation, supporting Sabah's low-carbon transition.",
  },
  {
    year: "2025",
    title: "First ESG Baseline",
    text: "Jetama establishes its ESG baseline year, strengthening transparency, accountability and measurable sustainability progress.",
  },
  {
    year: "2026",
    title: "Solar Expansion Pipeline",
    text: "Batu Sapi Solar and Babagon Floating Solar are targeted to progress toward commercial operation.",
  },
  {
    year: "2030",
    title: "Jetama 2030 Direction",
    text: "The pathway focuses on better ESG data, stronger governance, operational resilience and long-term value for Sabah.",
  },
];

const focusCards = [
  { icon: Waves, title: "Water Efficiency", text: "Optimising treatment operations and resource use to safeguard water security and catchment ecosystems." },
  { icon: Zap, title: "Renewable Energy", text: "Expanding solar and low-carbon initiatives through Jetama Energy and strategic joint ventures." },
  { icon: Recycle, title: "Circular Innovation", text: "Exploring waste reduction initiatives such as eco-brick development from water treatment sludge." },
  { icon: Sprout, title: "Biodiversity Care", text: "Supporting ecosystem protection through research, partnerships and community collaboration." },
  { icon: Users, title: "People Development", text: "Building a safe, inclusive and ESG-aware workplace through training, welfare and succession planning." },
  { icon: ShieldCheck, title: "Ethical Governance", text: "Strengthening integrity, risk control, anti-bribery practices and transparent decision-making." },
];

const certifications = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 37001", "ISO 39001"];
const sdgs = ["SDG 6", "SDG 7", "SDG 8", "SDG 11", "SDG 12", "SDG 13", "SDG 14", "SDG 15", "SDG 16", "SDG 17"];

export default function Sustainability() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <section className="relative isolate pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#eef8ff_46%,#f8fff6_100%)]" />
        <div className="absolute left-[-180px] top-8 -z-10 h-[420px] w-[420px] rotate-45 rounded-[72px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
        <div className="absolute right-[-160px] top-32 -z-10 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-[#35B24A]/15 bg-[#35B24A]/5" />

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
                Jetama embeds Environmental, Social and Governance principles into water operations, renewable energy growth, community value and ethical leadership.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#timeline" className="group inline-flex items-center gap-2 rounded-full bg-[#005AAA] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(0,90,170,.28)] transition hover:-translate-y-1 hover:bg-[#004b8f]">
                  View Timeline <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <Link to="/contact" className="inline-flex items-center rounded-full border border-[#005AAA]/20 bg-white/80 px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-[#005AAA] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white">
                  Contact ESG Team
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/85 p-7 shadow-[0_28px_80px_rgba(15,60,110,.16)] backdrop-blur-xl">
              <div className="absolute right-0 top-0 h-2 w-full bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F6A623]" />
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#35B24A]">Baseline for Progress</p>
              <p className="mt-4 text-3xl font-black leading-tight text-[#005AAA]">
                A smarter ESG direction built around transparency, accountability and long-term resilience.
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

      <section id="esg-pillars" className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.65 }} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">What ESG Means Under Jetama</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">E · S · G Focus Areas</h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {esgPillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,60,110,.08)] transition hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,90,170,.16)]"
              >
                <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: pillar.accent }} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-400">{pillar.subtitle}</p>
                    <h3 className="mt-3 text-2xl font-black text-slate-900">{pillar.title}</h3>
                  </div>
                  <span className="text-6xl font-black leading-none text-slate-100 transition group-hover:text-[#005AAA]/10">{pillar.letter}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {pillar.items.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-slate-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: pillar.accent }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_52%,#f8fff7_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.65 }} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Sustainability Journey</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">From Water Foundation To Jetama 2030</h2>
            <p className="mt-5 leading-8 text-slate-600">
              A simple timeline showing how Jetama's water foundation, renewable energy expansion and ESG baseline connect toward long-term sustainability progress.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div className="absolute left-5 top-0 hidden h-full w-[3px] rounded-full bg-gradient-to-b from-[#005AAA] via-[#35B24A] to-[#F6A623] md:left-1/2 md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.62, delay: index * 0.06 }}
                  className={`relative grid gap-6 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"}`}
                >
                  <div className="relative rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,60,110,.08)]">
                    <span className={`absolute top-8 hidden h-5 w-5 rounded-full border-4 border-white bg-[#005AAA] shadow-lg md:block ${index % 2 === 0 ? "right-[-42px]" : "left-[-42px]"}`} />
                    <div className="flex items-center gap-4">
                      <span className="rounded-2xl bg-[#005AAA] px-4 py-3 text-xl font-black text-white">{item.year}</span>
                      <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                    </div>
                    <p className="mt-5 leading-7 text-slate-600">{item.text}</p>
                  </div>
                  <div className="hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#005AAA] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.65 }}>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Material Sustainability Focus</p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">Focused, Practical & Measurable</h2>
            <p className="mt-5 leading-8 text-white/80">
              Jetama's ESG focus supports Malaysia's sustainability agenda, Sabah's priorities on water security and energy transition, and the United Nations Sustainable Development Goals.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-[#F6A623]"><Icon className="h-5 w-5" /></span>
                    <h3 className="font-black">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/78">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.65 }}>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Performance Highlights</p>
              <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Standards, Integrity & SDGs</h2>
              <p className="mt-5 leading-8 text-slate-600">
                Jetama's ESG performance highlights include ISO certified systems, Corporate Integrity Pledge commitment, internal audits and stronger ESG awareness.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {certifications.map((item) => (
                  <span key={item} className="rounded-full border border-[#005AAA]/15 bg-[#f8fbff] px-4 py-2 text-sm font-black text-[#005AAA]">{item}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.65, delay: 0.08 }} className="rounded-[34px] border border-slate-200 bg-[#f8fbff] p-7 shadow-[0_18px_50px_rgba(15,60,110,.08)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005AAA]/10 text-[#005AAA]"><BadgeCheck /></div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#F6A623]">Aligned With Global Goals</p>
                  <h3 className="text-2xl font-black text-slate-900">ESG & SDG Alignment</h3>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {sdgs.map((sdg, index) => (
                  <motion.div key={sdg} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.03 }} className="rounded-2xl bg-gradient-to-br from-[#005AAA] via-[#35B24A] to-[#F6A623] p-[1px]">
                    <div className="rounded-2xl bg-white px-3 py-4 text-center text-xs font-black text-[#005AAA]">{sdg}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#005AAA] via-[#006fba] to-[#35B24A] p-8 text-white shadow-[0_30px_90px_rgba(0,90,170,.22)] md:p-12">
            <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Path Forward</p>
                <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">From Baseline To Jetama 2030</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-4">
                {["2025 Baseline", "Improve Data", "Measure Progress", "Strengthen ESG Culture"].map((step, index) => (
                  <motion.div key={step} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-2xl bg-white/12 p-5 backdrop-blur">
                    <span className="text-3xl font-black text-[#F6A623]">0{index + 1}</span>
                    <p className="mt-3 text-sm font-bold">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
