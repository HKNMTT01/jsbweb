import {
  ArrowRight,
  BadgeCheck,
  Droplets,
  Factory,
  Globe2,
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const pillars = [
  {
    title: "Environmental Responsibility",
    icon: Leaf,
    accent: "from-[#35B24A] to-[#005AAA]",
    points: ["Water stewardship", "Climate action", "Renewable energy", "Biodiversity protection"],
  },
  {
    title: "Social Empowerment",
    icon: Users,
    accent: "from-[#005AAA] to-[#37B34A]",
    points: ["Employee well-being", "Talent development", "Community programmes", "Inclusive opportunities"],
  },
  {
    title: "Governance Integrity",
    icon: ShieldCheck,
    accent: "from-[#F6A623] to-[#005AAA]",
    points: ["Transparency", "Ethics", "Accountability", "Risk & compliance"],
  },
];

const snapshot = [
  {
    icon: Droplets,
    title: "Water Operations",
    value: "1M+ residents served",
    details: "6 water treatment plants, Babagon Dam, 200 km transmission mains and 30 service reservoirs supporting safe and reliable treated water supply.",
  },
  {
    icon: Globe2,
    title: "Renewable Energy",
    value: "Low-carbon transition",
    details: "Jetama Energy supports solar development including Labuan LSS PV, Batu Sapi Solar and Babagon Floating Solar initiatives.",
  },
  {
    icon: BadgeCheck,
    title: "Ownership & Governance",
    value: "State-linked strength",
    details: "Wholly owned by the Sabah State Government through Sabah Development Berhad under the Ministry of Finance Sabah.",
  },
  {
    icon: Globe2,
    title: "ESG & SDGs",
    value: "Shared goals",
    details: "Aligned with key Sustainable Development Goals including clean water, clean energy, responsible growth, climate action and partnerships.",
  },
];

const focusAreas = [
  { icon: Waves, title: "Water Efficiency", text: "Optimising treatment, operations and resource use to strengthen long-term water security." },
  { icon: Zap, title: "Climate Action", text: "Expanding renewable energy and improving resilience across essential infrastructure." },
  { icon: Sprout, title: "Biodiversity", text: "Supporting environmental stewardship around water assets and natural ecosystems." },
  { icon: Recycle, title: "Waste Innovation", text: "Exploring circular solutions such as eco-brick development using water treatment sludge." },
];

const socialItems = [
  "Employee well-being and safety",
  "Talent development and human capital growth",
  "Diversity, equity and inclusion",
  "Human rights and labour practices",
  "Community engagement and social programmes",
];

const governanceItems = [
  { icon: ShieldCheck, title: "Ethical Leadership", text: "Embedding integrity and accountable leadership into strategic and operational decisions." },
  { icon: Factory, title: "Risk & Compliance", text: "Strengthening statutory compliance, certified systems and internal governance standards." },
  { icon: Handshake, title: "Transparency", text: "Building stakeholder trust through clear ESG reporting and continuous improvement." },
];

const sdgs = ["SDG 6", "SDG 7", "SDG 8", "SDG 11", "SDG 12", "SDG 13", "SDG 14", "SDG 15", "SDG 16", "SDG 17"];

export default function Sustainability() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <section className="relative isolate pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(53,178,74,.20),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(246,166,35,.22),transparent_30%),linear-gradient(135deg,#ffffff_0%,#eef8ff_45%,#f7fff8_100%)]" />
        <div className="absolute left-[-10%] top-20 -z-10 h-80 w-80 rotate-45 rounded-[48px] border border-[#005AAA]/10 bg-white/30 blur-sm" />
        <div className="absolute right-[-8%] top-28 -z-10 h-96 w-96 rotate-12 rounded-[70px] border border-[#35B24A]/20 bg-white/40" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <span className="inline-flex rounded-full border border-[#005AAA]/15 bg-white/70 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#005AAA] shadow-sm backdrop-blur">
              Sustainability
            </span>
            <h1 className="mt-8 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#005AAA] md:text-7xl">
              Shaping Sustainable
              <span className="block text-[#35B24A]">Water & Energy</span>
              <span className="block text-[#F6A623]">For Sabah</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Jetama integrates Environmental, Social and Governance principles into its operations to deliver sustainable water and energy solutions while creating long-term value for Sabah.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#esg-pillars" className="group inline-flex items-center gap-2 rounded-full bg-[#005AAA] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(0,90,170,.28)] transition hover:-translate-y-1 hover:bg-[#004b8f]">
                Explore ESG <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-[#005AAA]/20 bg-white/70 px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-[#005AAA] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white">
                Contact ESG Team
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92, y: 35 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[42px] bg-gradient-to-br from-[#005AAA]/25 via-[#35B24A]/20 to-[#F6A623]/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/80 p-7 shadow-[0_28px_80px_rgba(15,60,110,.18)] backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-4">
                {[Droplets, Globe2, Recycle, Globe2, Leaf, Zap].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-[#005AAA] via-[#37B34A] to-[#F6A623] p-[1px] shadow-lg"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/92">
                      <Icon className="h-12 w-12 text-[#005AAA]" strokeWidth={1.8} />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-[#005AAA] p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">ESG Report 2025</p>
                <p className="mt-3 text-2xl font-black leading-tight">Baseline year for transparency, accountability and long-term progress.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="esg-pillars" className="relative py-20">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent via-white/70 to-white blur-2xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.65 }} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">ESG Management Approach</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Three Pillars of Sustainability</h2>
            <p className="mt-5 text-slate-600">Sustainability is embedded across Jetama's strategy, operations and decision-making through environmental responsibility, social empowerment and governance integrity.</p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }} className="group relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-7 shadow-[0_18px_50px_rgba(15,60,110,.08)] transition hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,90,170,.16)]">
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${pillar.accent}`} />
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005AAA]/10 text-[#005AAA] transition group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-slate-900">{pillar.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                        <span className="h-2 w-2 rounded-full bg-[#35B24A]" /> {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.65 }} className="rounded-[34px] bg-gradient-to-br from-[#005AAA] via-[#006fba] to-[#35B24A] p-8 text-white shadow-[0_25px_80px_rgba(0,90,170,.22)]">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-white/75">Sustainability Philosophy</p>
              <blockquote className="mt-6 text-3xl font-black leading-tight">
                “Delivering clean water and reliable services today while safeguarding the environment, empowering communities, and upholding integrity in governance for a better tomorrow.”
              </blockquote>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {snapshot.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: index * 0.06 }} className="rounded-[26px] border border-slate-200 bg-[#f8fbff] p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                    <Icon className="h-9 w-9 text-[#005AAA]" />
                    <h3 className="mt-4 text-xl font-black text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm font-extrabold uppercase tracking-wide text-[#35B24A]">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.details}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_45%,#f8fff7_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.65 }}>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Environmental Stewardship</p>
              <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Responsible Water & Climate Action</h2>
              <p className="mt-5 leading-8 text-slate-600">Jetama's environmental focus strengthens water efficiency, climate resilience, renewable energy development, biodiversity care and circular innovation.</p>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2">
              {focusAreas.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: index * 0.07 }} className="rounded-[26px] bg-white p-6 shadow-[0_16px_45px_rgba(15,60,110,.08)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#35B24A]/12 text-[#35B24A]"><Icon /></div>
                    <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#005AAA] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.65 }}>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Social Responsibility</p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">People, Safety & Community</h2>
            <p className="mt-5 leading-8 text-white/80">Jetama's social agenda focuses on people development, a safe and inclusive workplace, and meaningful community programmes that create shared value.</p>
          </motion.div>
          <div className="space-y-3">
            {socialItems.map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.06 }} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F6A623] font-black text-[#005AAA]">{index + 1}</span>
                <p className="font-bold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.65 }} className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Governance</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Ethics, Transparency & Trust</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {governanceItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }} className="rounded-[30px] border border-slate-200 bg-[#f8fbff] p-7 text-center shadow-sm transition hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005AAA]/10 text-[#005AAA]"><Icon className="h-8 w-8" /></div>
                  <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,90,170,.10),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(246,166,35,.16),transparent_32%),linear-gradient(180deg,#ffffff,#f7fbff)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.65 }}>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">ESG Commitment & SDGs</p>
              <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Aligned With Global Goals</h2>
              <p className="mt-5 leading-8 text-slate-600">Jetama contributes to global sustainability priorities through clean water, affordable clean energy, responsible operations, climate action, ecosystem protection, strong governance and partnerships.</p>
            </motion.div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {sdgs.map((sdg, index) => (
                <motion.div key={sdg} initial={{ opacity: 0, scale: 0.86 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.03 }} className="rounded-2xl bg-gradient-to-br from-[#005AAA] via-[#35B24A] to-[#F6A623] p-[1px] shadow-sm">
                  <div className="rounded-2xl bg-white px-4 py-5 text-center text-sm font-black text-[#005AAA]">{sdg}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#005AAA] via-[#006fba] to-[#35B24A] p-8 text-white shadow-[0_30px_90px_rgba(0,90,170,.22)] md:p-12">
            <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Path Forward</p>
                <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">From Baseline To Jetama 2030</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-4">
                {["2025 Baseline", "Improve Data", "Measure Progress", "Jetama 2030"].map((step, index) => (
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
