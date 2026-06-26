import { Link } from "react-router";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Handshake,
} from "lucide-react";

import heroImage from "@/assets/jetama-dam-hero.jpg";
import jetamaLogo from "@/assets/jetama-wide-logo-transparent.png";
import alpineLogo from "@/assets/Jetama Pipe - FINAL.png";
import solarLogo from "@/assets/solarpvlogo.png";


function CorporateCleanStyles() {
  return (
    <style>{`
      @keyframes softCorporateFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .55; }
        50% { transform: translate3d(18px,-14px,0) rotate(1deg); opacity: .82; }
      }
      @keyframes softCorporateBeam {
        0%, 100% { transform: translateX(-8%) rotate(-8deg); opacity: .16; }
        50% { transform: translateX(12%) rotate(-8deg); opacity: .30; }
      }
      @keyframes softTextLift {
        0% { opacity: 0; transform: translateY(24px); filter: blur(8px); }
        100% { opacity: 1; transform: translateY(0); filter: blur(0); }
      }
      .corporate-hero-title { animation: softTextLift .85s cubic-bezier(.2,.8,.2,1) both; }
      .corporate-hero-copy { animation: softTextLift .95s cubic-bezier(.2,.8,.2,1) .12s both; }
      .corporate-float-a { animation: softCorporateFloat 12s ease-in-out infinite; }
      .corporate-float-b { animation: softCorporateFloat 15s ease-in-out infinite reverse; }
      .corporate-beam { animation: softCorporateBeam 10s ease-in-out infinite; }
      .corporate-glass {
        background: linear-gradient(135deg, rgba(255,255,255,.88), rgba(248,251,255,.72), rgba(244,255,247,.72));
        border: 1px solid rgba(255,255,255,.78);
        box-shadow: 0 28px 90px rgba(0,90,170,.14);
        backdrop-filter: blur(14px);
      }
    `}</style>
  );
}

function CorporateHeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <CorporateCleanStyles />
      <div className="absolute inset-0 bg-transparent" />
      <div className="corporate-beam absolute left-[-18%] top-[8%] h-[360px] w-[58%] bg-[linear-gradient(105deg,transparent,rgba(255,255,255,.95),transparent)] blur-[6px]" />
      <div className="corporate-beam absolute right-[-18%] top-[4%] h-[360px] w-[58%] bg-[linear-gradient(105deg,transparent,rgba(246,166,35,.22),transparent)] blur-[12px] [animation-delay:2s]" />
      <div className="corporate-float-a absolute left-[-120px] top-24 h-64 w-[560px] bg-[#005AAA]/[.075]" style={{ clipPath: "polygon(0 25%, 84% 0, 100% 70%, 12% 100%)" }} />
      <div className="corporate-float-b absolute right-[-140px] top-36 h-72 w-[620px] bg-[#35B24A]/[.085]" style={{ clipPath: "polygon(9% 0, 100% 24%, 82% 100%, 0 72%)" }} />
      <div className="corporate-float-a absolute bottom-4 left-[22%] h-28 w-[520px] bg-[#F5A623]/[.075]" style={{ clipPath: "polygon(0 35%, 74% 0, 100% 65%, 22% 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7fbff] via-white/80 to-transparent" />
    </div>
  );
}


const jointVentures = [
  {
    title: "Jetama Alpine Pipe (Sabah) Sdn. Bhd.",
    path: "/jointventure/jetama-alpine-pipe",
    logo: alpineLogo,
    text: "Pipe supply, production and steel section products for Sabah.",
    accent: "from-[#102f83] to-[#d5282f]",
  },

  {
    title: "Solar PV Power Sdn. Bhd.",
    path: "/jointventure/solar-pv-power",
    logo: solarLogo,
    text: "Large scale solar photovoltaic development through strategic renewable energy partnership.",
    accent: "from-[#35B24A] to-[#F5A623]",
  },
  {
    title: "Jetama Batu Sapi Solar Sdn. Bhd.",
    path: "/jointventure/jetama-batu-sapi-solar",
    logo: jetamaLogo,
    text: "Large scale solar development at Batu Sapi, Sandakan.",
    accent: "from-[#102f83] to-[#f9a51a]",
  },
  {
    title: "Jetama Babagon Floating Solar Sdn. Bhd.",
    path: "/jointventure/jetama-babagon-floating-solar",
    logo: jetamaLogo,
    text: "Floating solar PV development at Babagon Dam, Penampang.",
    accent: "from-[#102f83] to-[#35b24a]",
  },
];

export default function JointVenture() {
  return (
    <main className="overflow-hidden bg-[#f7fbff] text-[#122f3f]">
      <section className="relative isolate overflow-hidden bg-[#f7fbff] pt-36 text-slate-900">
        <CorporateHeroAtmosphere />
<img
          src={heroImage}
          alt="Our Joint Ventures"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,90,170,0.10),transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#68bd00]/20 blur-3xl" />
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-white/80 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Link to="/" className="hover:text-[#005AAA]">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-[#005AAA]">Our Joint Ventures</span>
          </div>

          <h1 className="corporate-hero-title mt-6 text-5xl font-black leading-[1.05] text-[#005AAA] sm:text-6xl lg:text-7xl">
            Our Joint Ventures
          </h1>

          <p className="corporate-hero-copy mt-7 max-w-3xl text-lg leading-9 text-slate-600 sm:text-xl">
            Strategic collaborations supporting Sabah’s water infrastructure,
            pipe manufacturing and renewable energy development.
          </p>
        </div>
      </section>

      <section className="relative -mt-10 z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2.3rem] border border-white/80 bg-white/88 backdrop-blur-xl p-6 shadow-[0_28px_85px_rgba(0,90,170,0.12)] sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#35b24a]">
              Joint Venture Companies
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0b2f7f] sm:text-4xl">
              Explore Our Strategic Partnerships
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {jointVentures.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-[#f8fbff] to-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.14)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.accent}`}
                />

                <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#35b24a]/10 transition group-hover:scale-125" />

                <div className="flex h-36 items-center justify-center rounded-[1.5rem] bg-white p-5 shadow-inner">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-h-28 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,44,85,0.18)] transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-7">

                  <h3 className="text-2xl font-black leading-tight text-[#0b2f7f]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}