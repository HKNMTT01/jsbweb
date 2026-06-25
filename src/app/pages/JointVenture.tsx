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
    <main className="overflow-hidden bg-white text-[#122f3f]">
      <section className="relative overflow-hidden bg-[#062A44] pt-32 text-white">
        <img
          src={heroImage}
          alt="Our Joint Ventures"
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
            <span className="text-white">Our Joint Ventures</span>
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Our Joint Ventures
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-white/90 sm:text-xl">
            Strategic collaborations supporting Sabah’s water infrastructure,
            pipe manufacturing and renewable energy development.
          </p>
        </div>
      </section>

      <section className="relative -mt-10 z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_rgba(0,44,85,0.16)] sm:p-8">
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