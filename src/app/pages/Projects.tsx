import { Link } from "react-router";
import {
  ArrowRight,
  CalendarCheck,
  ChevronRight,
  ClipboardList,
  Droplets,
  Factory,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Sun,
  Waves,
} from "lucide-react";

import heroImage from "@/assets/DJI_0298.jpg";
import moyogImage from "@/assets/MOYOG.jpg";
import tuaranImage from "@/assets/TUARAN.jpg";
import telibongImage from "@/assets/TELIBONG.jpg";
import kasiguiImage from "@/assets/KASIGUI.jpg";

const waterSegments = [
  {
    title: "Industrial Project",
    path: "/projects/water-project/industrial-project",
    status: "Coming Soon",
    image: kasiguiImage,
    icon: Factory,
    text: "Prepared for future industrial water infrastructure records and project milestones.",
    accent: "from-[#102f83] to-[#005AAA]",
  },
  {
    title: "Commercial Project",
    path: "/projects/water-project/commercial-project",
    status: "Coming Soon",
    image: telibongImage,
    icon: ClipboardList,
    text: "Reserved for future commercial water project timeline and development updates.",
    accent: "from-[#005AAA] to-[#35B24A]",
  },
  {
    title: "Concession Project",
    path: "/projects/water-project/concession-project",
    status: "Timeline Available",
    image: moyogImage,
    icon: Waves,
    text: "Existing concession-related water infrastructure timeline from 1997 to ongoing projects.",
    accent: "from-[#35B24A] to-[#F5A623]",
  },
];

const renewableProject = {
  title: "Renewable Energy Project",
  path: "/projects/renewable-energy-project",
  image: tuaranImage,
  category: "Solar PV Development",
  status: "Timeline Available",
  text: "Large scale solar, floating solar, ground-mounted solar PV and renewable energy development initiatives.",
};

const highlights = [
  {
    icon: CalendarCheck,
    value: "1997",
    label: "Water Timeline Since",
  },
  {
    icon: Droplets,
    value: "3",
    label: "Water Project Groups",
  },
  {
    icon: Sun,
    value: "4",
    label: "Energy Timeline Items",
  },
  {
    icon: MapPinned,
    value: "Sabah",
    label: "Development Coverage",
  },
];

export default function Projects() {
  return (
    <main className="overflow-hidden bg-white text-[#122f3f]">
      <section className="relative overflow-hidden bg-[#062A44] pt-32 text-white">
        <img
          src={heroImage}
          alt="JETAMA Projects"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,27,70,0.95)_0%,rgba(11,47,127,0.78)_54%,rgba(65,182,80,0.50)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.22),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0b2f7f] via-[#68bd00] to-[#f5a623]" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#68bd00]/20 blur-3xl" />
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/80">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-white">Projects</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#b8ff6a] backdrop-blur">
                Corporate Project Portfolio
              </p>

              <h1 className="mt-6 text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Our Projects
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-9 text-white/90 sm:text-xl">
                Explore JETAMA's water infrastructure and renewable energy
                portfolio through structured project groups and timeline records.
              </p>
            </div>

            <div className="hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-md lg:block">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0b2f7f]">
                  <ShieldCheck size={34} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#fbf234]">
                    Water & Energy
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    Organized into concession, industrial, commercial and renewable energy records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative -mt-10 z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_rgba(0,44,85,0.16)] sm:p-8 lg:p-10">
          <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#35b24a]">
                Project Categories
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0b2f7f] sm:text-4xl">
                Water Project Portfolio
              </h2>
            </div>

            <p className="max-w-xl text-sm font-semibold leading-7 text-slate-600">
              Water projects are separated into Industrial, Commercial and
              Concession Project sections. Only Concession currently displays the
              ready timeline; the others are prepared for future updates.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {waterSegments.map((item, index) => {
              const Icon = item.icon;
              const ready = item.status === "Timeline Available";

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-[#f8fbff] to-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.14)]"
                  style={{
                    animation: "projectFadeUp .75s ease both",
                    animationDelay: `${index * 90}ms`,
                  }}
                >
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.accent}`} />
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#35b24a]/10 transition duration-500 group-hover:scale-150" />

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062A44]/88 via-[#062A44]/15 to-transparent" />

                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0b2f7f] shadow-lg">
                      <Icon size={27} />
                    </div>

                    <div
                      className={`absolute right-5 top-6 rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] shadow-lg ${
                        ready
                          ? "bg-[#fbf234] text-[#052b4f]"
                          : "bg-white/90 text-[#005AAA]"
                      }`}
                    >
                      {item.status}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#b8ff6a]">
                        Water Project
                      </p>
                      <h3 className="text-2xl font-black leading-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="min-h-[82px] text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#eef8ff] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#102f83] transition group-hover:bg-[#102f83] group-hover:text-white">
                      {ready ? "View Timeline" : "View Section"}
                      <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Link
          to={renewableProject.path}
          className="group grid overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(0,44,85,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(0,44,85,0.18)] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative min-h-[360px] overflow-hidden">
            <img
              src={renewableProject.image}
              alt={renewableProject.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062A44]/80 via-[#062A44]/10 to-transparent" />
            <div className="absolute left-7 top-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fbf234] text-[#052b4f] shadow-lg">
              <Sun size={34} />
            </div>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#f5a623]/12 blur-2xl" />

            <div className="relative">
              <p className="inline-flex rounded-full bg-[#fff7e6] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#b97500]">
                {renewableProject.category}
              </p>

              <h2 className="mt-5 text-3xl font-black leading-tight text-[#0b2f7f] sm:text-4xl">
                {renewableProject.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                {renewableProject.text}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#ecfbef] px-4 py-2 text-sm font-black text-[#1f8a3b]">
                  <Sparkles size={16} />
                  {renewableProject.status}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#eef8ff] px-4 py-2 text-sm font-black text-[#102f83]">
                  <CalendarCheck size={16} />
                  2024 - Ongoing
                </span>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#102f83] to-[#f5a623] px-6 py-3 text-sm font-black text-white shadow-lg transition group-hover:-translate-y-1">
                View Energy Timeline
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="bg-[#f8fbff] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(0,44,85,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,44,85,0.13)]"
                  style={{
                    animation: "projectFadeUp .75s ease both",
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef8ff] text-[#0b2f7f] transition group-hover:bg-[#0b2f7f] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <div className="text-3xl font-black text-[#0b2f7f]">
                    {item.value}
                  </div>

                  <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <style>{`
        @keyframes projectFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
