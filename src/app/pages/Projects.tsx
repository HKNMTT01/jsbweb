import { Link } from "react-router";
import {
  ArrowRight,
  CalendarCheck,
  ChevronRight,
  ClipboardList,
  Droplets,
  MapPinned,
  ShieldCheck,
  Sun,
} from "lucide-react";

import heroImage from "@/assets/DJI_0298.jpg";
import moyogImage from "@/assets/MOYOG.jpg";
import tuaranImage from "@/assets/TUARAN.jpg";

const projects = [
  {
    title: "Water Project",
    path: "/projects/water-project",
    image: moyogImage,
    category: "Water Infrastructure",
    text: "Water treatment plants, reservoirs, transmission pipelines, pumping mains, intake upgrading and urgent water supply schemes.",
    accent: "from-[#0b2f7f] to-[#35b24a]",
    icon: Droplets,
  },
  {
    title: "Renewable Energy Project",
    path: "/projects/renewable-energy-project",
    image: tuaranImage,
    category: "Solar PV Development",
    text: "Large scale solar, floating solar, ground-mounted solar PV and renewable energy development initiatives.",
    accent: "from-[#0b2f7f] to-[#f9a51a]",
    icon: Sun,
  },
];

const highlights = [
  {
    icon: CalendarCheck,
    value: "1997",
    label: "Project Timeline Since",
  },
  {
    icon: Droplets,
    value: "Water",
    label: "Infrastructure Portfolio",
  },
  {
    icon: Sun,
    value: "Solar",
    label: "Renewable Energy Portfolio",
  },
  {
    icon: MapPinned,
    value: "Sabah",
    label: "Development Coverage",
  },
];

function OceanWaveDivider() {
  return (
    <div className="pointer-events-none relative -mt-20 h-44 overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-transparent via-white/25 to-white/70" />
      <div className="absolute left-[-5%] top-8 h-10 w-[110%] rounded-[50%] bg-white/55 blur-2xl" />
      <div className="absolute left-[-10%] top-14 h-12 w-[120%] rounded-[50%] bg-white/60 blur-xl" />

      <svg className="absolute -bottom-4 left-0 h-44 w-full" viewBox="0 0 1440 260" preserveAspectRatio="none">
        <path d="M0,45 C180,10 320,90 520,55 C720,20 900,95 1100,45 C1280,10 1360,25 1440,20 L1440,260 L0,260 Z" fill="rgba(255,255,255,1)" />
        <path d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z" fill="rgba(248,255,250,.98)" />
        <path d="M0,105 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z" fill="rgba(103,214,111,.50)" />
        <path d="M0,130 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z" fill="rgba(65,182,80,.72)" />
        <path d="M0,160 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z" fill="rgba(0,84,166,.80)" />
        <path d="M0,190 C260,140 530,205 770,175 C990,145 1190,205 1380,175 C1410,170 1430,168 1440,166 L1440,260 L0,260 Z" fill="rgba(0,70,145,.90)" />
        <path d="M0,215 C300,170 560,225 820,200 C1080,175 1260,220 1440,195 L1440,260 L0,260 Z" fill="rgba(0,59,122,.96)" />
      </svg>

      <div className="absolute bottom-24 left-[8%] h-8 w-5 animate-bounce rounded-full bg-white/80 blur-[1px]" />
      <div className="absolute bottom-36 left-[10%] h-4 w-4 animate-ping rounded-full bg-[#67D66F]/90" />
      <div className="absolute bottom-28 left-[48%] h-10 w-6 animate-bounce rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,.8)]" />
      <div className="absolute bottom-40 left-[50%] h-4 w-4 animate-ping rounded-full bg-[#41B650]" />
      <div className="absolute bottom-26 right-[12%] h-9 w-5 animate-bounce rounded-full bg-white/80" />
      <div className="absolute bottom-38 right-[10%] h-5 w-5 animate-ping rounded-full bg-[#67D66F]/90" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#41B650]/20 via-white/50 to-[#0054A6]/20 blur-xl" />
    </div>
  );
}

export default function Projects() {
  return (
    <main className="overflow-hidden bg-white text-[#122f3f]">
      <section className="relative overflow-hidden bg-[#062A44] pt-32 text-white">
        <img
          src={heroImage}
          alt="JETAMA Projects"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,27,70,0.94)_0%,rgba(11,47,127,0.76)_54%,rgba(104,189,0,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.20),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0b2f7f] via-[#68bd00] to-[#0b2f7f]" />
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
          <h1 className="mt-6 text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Our Projects
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-white/90 sm:text-xl">
            Explore JETAMA's project experience through two key portfolios:
            water infrastructure and renewable energy development.
          </p>
        </div>
      </section>

      <OceanWaveDivider />

      <section className="relative -mt-32 z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_rgba(0,44,85,0.16)] sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#35b24a]">
              Project Categories
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0b2f7f] sm:text-4xl">
              View Project Portfolio
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-[#f8fbff] to-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.14)]"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.accent}`}
                  />

                  <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#35b24a]/10 transition group-hover:scale-125" />

                  <div className="relative h-72 overflow-hidden rounded-[1.5rem] bg-white shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062A44]/80 via-[#062A44]/10 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0b2f7f]">
                        <Icon size={15} />
                        {item.category}
                      </div>

                      <h3 className="text-3xl font-black leading-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    {item.text}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#35b24a]">
                    View Details
                    <ArrowRight size={17} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(0,44,85,0.08)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef8ff] text-[#0b2f7f]">
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

      <section className="bg-[#062A44] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0b2f7f]">
                  <ShieldCheck size={34} />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b8ff6a]">
                  JETAMA Capability
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight">
                  Supporting Sabah's water security and clean energy direction.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15"
                    >
                      <Icon className="mb-4 text-[#b8ff6a]" size={30} />
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/75">
                        {item.text}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}