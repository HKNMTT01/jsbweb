import { Link } from "react-router";
import {
  ArrowRight,
  CalendarCheck,
  ChevronRight,
  Droplets,
  MapPinned,
  Sun,
} from "lucide-react";

import heroImage from "@/assets/DJI_0298.jpg";
import moyogImage from "@/assets/MOYOG.jpg";
import tuaranImage from "@/assets/pvplant.png";
import bottleFactoryImage from "@/assets/opening bottle factory.jpg";
import systemresolveImage from "@/assets/jetama resolve system.jpeg";

function PageStyles() {
  return (
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(22px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes floatSoft {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(14px,-12px,0) rotate(2deg); }
      }

      @keyframes softShine {
        0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
        35% { opacity: .45; }
        100% { transform: translateX(180%) skewX(-18deg); opacity: 0; }
      }

      .page-animate { animation: fadeUp .7s cubic-bezier(.2,.8,.2,1) both; }
      .shape-float { animation: floatSoft 12s ease-in-out infinite; }

      .jetama-card {
        box-shadow: 0 18px 48px rgba(15,60,110,.075);
      }

      .jetama-card:hover {
        box-shadow: 0 24px 64px rgba(0,90,170,.14);
      }

      .project-shine::before {
        content: "";
        position: absolute;
        top: -60%;
        bottom: -60%;
        left: -45%;
        width: 32%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
        transform: translateX(-130%) skewX(-18deg);
        pointer-events: none;
      }

      .project-shine:hover::before {
        animation: softShine 1.7s ease;
      }
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
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.10]"
        />
      )}
      <div className="shape-float absolute left-[-180px] top-8 -z-10 h-[420px] w-[420px] rotate-45 rounded-[72px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
      <div className="shape-float absolute right-[-160px] top-32 -z-10 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-[#35B24A]/15 bg-[#35B24A]/5 [animation-delay:1.5s]" />
      <div className="absolute right-[18%] top-24 -z-10 h-32 w-72 rotate-[-10deg] bg-[#F6A623]/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
        <div className="page-animate max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
            <Link to="/" className="transition hover:text-[#005AAA]">
              Home
            </Link>
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

export default function Projects() {
  const waterSegments = [
    {
      title: "Industrial Project",
      path: "/projects/water-project/industrial-project",
      image: systemresolveImage,
      text: "Prepared for future industrial water infrastructure records and project milestones.",
      accent: "from-[#102f83] to-[#005AAA]",
    },
    {
      title: "Commercial Project",
      path: "/projects/water-project/commercial-project",
      image: bottleFactoryImage,
      text: "Reserved for future commercial water project timeline and development updates.",
      accent: "from-[#005AAA] to-[#35B24A]",
    },
    {
      title: "Concession Project",
      path: "/projects/water-project/concession-project",
      image: moyogImage,
      text: "Existing concession-related water infrastructure timeline from 1997 to ongoing projects.",
      accent: "from-[#35B24A] to-[#F6A623]",
    },
  ];

  const renewableProject = {
    title: "Renewable Energy Project",
    path: "/projects/renewable-energy-project",
    image: tuaranImage,
    category: "Solar PV Development",
    text: "Large scale solar, floating solar, ground-mounted solar PV and renewable energy development initiatives.",
  };

  const highlights = [
    { value: "1997", label: "Water Timeline Since" },
    { value: "3", label: "Water Project Groups" },
    { value: "4", label: "Energy Timeline Items" },
    { value: "Sabah", label: "Development Coverage" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <PageStyles />
      <Hero
        title="Our Projects"
        current="Projects"
        image={heroImage}
        subtitle="Explore JETAMA's water infrastructure and renewable energy portfolio through structured project groups and timeline records."
      />

      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.95fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
                Project Categories
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {waterSegments.map((item, index) => (
              <Link
                key={item.title}
                to={item.path}
                className="project-shine group relative overflow-hidden rounded-[28px] bg-white jetama-card transition duration-500 hover:-translate-y-1"
                style={{ animation: "fadeUp .7s ease both", animationDelay: `${index * 90}ms` }}
              >
                <div className={`absolute inset-x-0 top-0 z-10 h-2 bg-gradient-to-r ${item.accent}`} />
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062A44]/90 via-[#062A44]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#35B24A]">
                      Water Project
                    </p>
                    <h3 className="text-2xl font-black leading-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="min-h-[70px] text-sm font-medium leading-7 text-slate-600">
                    {item.text}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#eef8ff] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#005AAA] transition group-hover:bg-[#005AAA] group-hover:text-white">
                    View Section
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-14">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_52%,#f8fff7_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to={renewableProject.path}
            className="project-shine group grid overflow-hidden rounded-[32px] bg-white jetama-card transition duration-500 hover:-translate-y-1 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="relative min-h-[315px] overflow-hidden">
              <img
                src={renewableProject.image}
                alt={renewableProject.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062A44]/70 via-[#062A44]/8 to-transparent" />
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#F6A623]/12 blur-2xl" />
              <p className="inline-flex w-fit rounded-full bg-[#fff7e6] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#b97500]">
                {renewableProject.category}
              </p>
              <h2 className="mt-5 text-3xl font-black uppercase leading-tight text-[#005AAA] sm:text-4xl">
                {renewableProject.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                {renewableProject.text}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex rounded-full bg-[#eef8ff] px-4 py-2 text-sm font-black text-[#005AAA]">
                  2024 - Ongoing
                </span>
              </div>
              <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#eef8ff] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#005AAA] shadow-lg transition group-hover:bg-[#005AAA] group-hover:text-white">
                View Section
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#005AAA] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <p className="text-3xl font-black">{item.value}</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
