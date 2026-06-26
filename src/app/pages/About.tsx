import { Link } from "react-router";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Droplets,
  Landmark,
  Leaf,
  MapPinned,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

import jetamaHero from "../../assets/jetama-dam-hero.jpg";
import moyogPlant from "../../assets/solarlaunching.png";


function PageStyles() {
  return (
    <style>{`
      @keyframes fadeUp { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes floatSoft { 0%,100% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(16px,-14px,0) rotate(2deg); } }
      .page-animate { animation: fadeUp .7s cubic-bezier(.2,.8,.2,1) both; }
      .shape-float { animation: floatSoft 12s ease-in-out infinite; }
      .jetama-card { box-shadow: 0 18px 55px rgba(15,60,110,.08); }
      .jetama-card:hover { box-shadow: 0 26px 70px rgba(0,90,170,.16); }
    `}</style>
  );
}


function Hero({
  title,
  subtitle,
  current,
  image,
  eyebrow,
}: {
  title: string;
  subtitle: string;
  current: string;
  image?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#eef8ff_46%,#f8fff6_100%)]" />
      {image && <img src={image} alt={title} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.11]" />}
      <div className="shape-float absolute left-[-180px] top-8 -z-10 h-[420px] w-[420px] rotate-45 rounded-[72px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
      <div className="shape-float absolute right-[-160px] top-32 -z-10 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-[#35B24A]/15 bg-[#35B24A]/5 [animation-delay:1.5s]" />
      <div className="absolute right-[18%] top-24 -z-10 h-32 w-72 rotate-[-10deg] bg-[#F6A623]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="page-animate max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
            <Link to="/" className="transition hover:text-[#005AAA]">Home</Link>
            <ChevronRight size={15} className="text-slate-400" />
            <span className="font-bold text-[#005AAA]">{current}</span>
          </div>

          {eyebrow && (
            <p className="mb-5 inline-flex rounded-full border border-[#005AAA]/15 bg-white/80 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#35B24A] shadow-sm backdrop-blur">
              {eyebrow}
            </p>
          )}

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.98] tracking-tight text-[#005AAA] md:text-7xl">
            {title}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
            <span className="h-[3px] w-10 rounded-full bg-[#35B24A]" />
            <span className="h-[3px] w-6 rounded-full bg-[#F6A623]" />
          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}


export default function About() {
  const quickLinks = [
    { title: "CEO's Message", text: "Leadership message and strategic direction.", href: "/about/ceo-message", icon: UsersRound },
    { title: "Company Profile", text: "Background, role and corporate information.", href: "/about/company-profile", icon: Building2 },
    { title: "Board of Directors", text: "Governance and leadership oversight.", href: "/about/board-of-directors", icon: Landmark },
    { title: "Top Level Management", text: "Management team behind operations.", href: "/about/top-level-management", icon: ShieldCheck },
    { title: "Vision, Mission & Values", text: "Purpose, direction and W.A.T.E.R values.", href: "/about/vision-mission-core-values", icon: Target },
    { title: "Concession Area", text: "Service coverage and operational areas.", href: "/about/concession-area", icon: MapPinned },
  ];

  const overview = [
    { label: "Who We Are", title: "A Sabah-owned water utility company.", text: "JETAMA Sdn. Bhd. was incorporated on 31 May 1988 and is wholly owned by the State Government of Sabah through Sabah Development Berhad under the Ministry of Finance, Sabah.", icon: Building2 },
    { label: "What We Do", title: "Reliable treated water services.", text: "The company supports treated water supply through water treatment operations, infrastructure development, technical capability and continuous service improvement.", icon: Droplets },
    { label: "Our Direction", title: "Sustainable service excellence.", text: "JETAMA focuses on operational reliability, strong governance, safety, environmental responsibility and long-term value for communities and stakeholders.", icon: Leaf },
  ];

  const values = [
    ["W", "Well-Being", "Prioritising people, safety and service responsibility."],
    ["A", "Accountability", "Taking ownership of decisions, outcomes and performance."],
    ["T", "Teamwork", "Working together across functions to deliver better results."],
    ["E", "Excellence", "Striving for quality, reliability and continuous improvement."],
    ["R", "Respect", "Building trust through professionalism and integrity."],
  ];

  const stats = [
    ["1988", "Incorporated"],
    ["1992", "PCCA Signed"],
    ["165 MLD", "Moyog Capacity"],
    ["70 km", "Pipeline Works"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <PageStyles />
      <Hero
        title="About Jetama Sdn. Bhd."
        current="About Us"
        image={jetamaHero}
        subtitle="A Sabah-based water utility organisation committed to reliable treated water supply, responsible governance and sustainable long-term service delivery."
      />

      <section className="relative bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="page-animate">
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Redefining Water & Energy</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              JETAMA provides the foundation for treated water services across key areas of Sabah while continuing to build stronger governance, operational excellence and future-ready sustainability.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-[24px] bg-[#f8fbff] p-5 jetama-card transition hover:-translate-y-1">
                  <p className="text-3xl font-black text-[#005AAA]">{value}</p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-[#F6A623]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative min-h-[500px] overflow-hidden rounded-[20px] shadow-[0_30px_90px_rgba(0,90,170,.18)] lg:min-h-[540px]">
            <img
              src={moyogPlant}
              alt="JETAMA corporate direction"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-119"
            />

          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_52%,#f8fff7_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">About JETAMA</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">What Defines Us</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {overview.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group relative overflow-hidden rounded-[30px] bg-white p-7 jetama-card transition hover:-translate-y-2">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F6A623]" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005AAA]/10 text-[#005AAA]">
                    <Icon size={28} />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#35B24A]">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#005AAA] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Living Our Values</p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">W.A.T.E.R</h2>
            <p className="mt-5 leading-8 text-white/80">The values that guide our people, service culture and corporate responsibility.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map(([letter, title, text]) => (
              <div key={letter} className="rounded-[24px] bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-xl font-black text-[#F6A623]">{letter}</span>
                  <h3 className="font-black">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/78">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Explore More</p>
              <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA]">About Sections</h2>
            </div>
            <p className="max-w-xl leading-8 text-slate-600">Navigate directly to leadership, company profile, governance and service coverage pages.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} to={item.href} className="group rounded-[28px] bg-[#f8fbff] p-6 jetama-card transition hover:-translate-y-2 hover:bg-white">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005AAA]/10 text-[#005AAA]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-[#052b4f]">{item.title}</h3>
                  <p className="mt-3 min-h-[52px] leading-7 text-slate-600">{item.text}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#005AAA]">
                    View Details <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
