import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import {
  Award,
  Building2,
  ChevronRight,
  Factory,
  Handshake,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";

import heroImage from "@/assets/jetama-dam-hero.jpg";
import alpineLogo from "@/assets/Jetama Pipe - FINAL.png";
import certificationBoard from "@/assets/certAl.jpeg";

type JointVentureKey =
  | "jetama-alpine-pipe"
  | "jetama-batu-sapi-solar"
  | "jetama-babagon-floating-solar";

const alpineScope = [
  {
    icon: Factory,
    title: "Pipe Production",
    text: "Supply and production of pipes and steel section products that meet stringent specifications and customer requirements.",
  },
  {
    icon: Wrench,
    title: "Technical Capability",
    text: "Driven by continuous improvement in pipe quality, forming process, tooling optimization and product development.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Supports reliable infrastructure through quality pipe products, research, development and experienced technical teams.",
  },
];

export default function JointVentureDetails() {
  const { type } = useParams();
  const selected = type as JointVentureKey | undefined;

  if (
    !selected ||
    ![
      "jetama-alpine-pipe",
      "jetama-batu-sapi-solar",
      "jetama-babagon-floating-solar",
    ].includes(selected)
  ) {
    return <Navigate to="/jointventure" replace />;
  }

  return (
    <main className="overflow-hidden bg-white pt-32 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
          <Link to="/" className="hover:text-[#005AAA]">
            Home
          </Link>
          <ChevronRight size={15} />
          <Link to="/jointventure" className="hover:text-[#005AAA]">
            Joint Ventures
          </Link>
          <ChevronRight size={15} />
          <span className="font-bold text-[#005AAA]">
            {selected === "jetama-alpine-pipe"
              ? "Jetama Alpine Pipe (Sabah) Sdn. Bhd."
              : selected === "jetama-batu-sapi-solar"
                ? "Jetama Batu Sapi Solar Sdn. Bhd."
                : "Jetama Babagon Floating Solar Sdn. Bhd."}
          </span>
        </div>
      </div>

      {selected === "jetama-alpine-pipe" && <JetamaAlpinePipeDetail />}
      {selected === "jetama-batu-sapi-solar" && (
        <ComingSoon title="Jetama Batu Sapi Solar Sdn. Bhd." />
      )}
      {selected === "jetama-babagon-floating-solar" && (
        <ComingSoon title="Jetama Babagon Floating Solar Sdn. Bhd." />
      )}
    </main>
  );
}

function JetamaAlpinePipeDetail() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section className="bg-white">
      <div className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-white">
        <div className="absolute inset-x-0 top-0 h-[330px] overflow-hidden">
          <img
            src={heroImage}
            alt="Jetama Alpine Pipe"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061b46]/80 via-[#0b2f7f]/55 to-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <img
              src={alpineLogo}
              alt="Jetama Alpine Pipe Sabah"
              className="mx-auto h-auto max-h-52 w-auto object-contain drop-shadow-[0_20px_55px_rgba(0,44,85,0.35)]"
            />

            <h1 className="mt-10 text-4xl font-black text-[#102f83] sm:text-5xl">
              Jetama Alpine Pipe (Sabah) Sdn. Bhd.
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              A joint venture company between Jetama Sdn. Bhd. and Alpine Pipe
              Manufacturing Sdn. Bhd., supporting the supply and production of
              pipes and steel section products in Sabah.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#d5282f] decoration-4 underline-offset-8">
              About Jetama Alpine Pipe
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-6xl space-y-7 text-justify text-lg leading-9 text-slate-700">
            <p>
              <span className="font-black text-[#102f83]">
                Jetama Alpine Pipe (Sabah) Sdn. Bhd. (JAPS)
              </span>{" "}
              is a joint venture company between Jetama Sdn. Bhd. and Alpine
              Pipe Manufacturing Sdn. Bhd. Although incorporated in 2020, both
              companies have long-standing experience in their respective fields,
              with APMSB being the largest ERW pipe manufacturer in South East
              Asia and JSB being a water industry expert in Sabah since 1992.
            </p>

            <p>
              JAPS has an expert team with vast knowledge and expertise to
              coordinate, administer, manage and facilitate the supply and
              production of pipes and steel section products that meet stringent
              requirements and specifications according to customer needs.
            </p>

            <p>
              The company focuses on Spiral Submerged-Arc Welding (SSAW) and
              Electrical Resistance Welding (ERW). Through continuous improvement
              in pipe quality, forming process, tooling optimization, research
              and product development, JAPS aims to deliver excellent quality
              products that meet client requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {alpineScope.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,44,85,0.08)] transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.13)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102f83] text-white">
                    <Icon size={30} />
                  </div>
                  <h3 className="text-2xl font-black text-[#102f83]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <Handshake className="mx-auto mb-5 text-[#d5282f]" size={42} />
            <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#d5282f] decoration-4 underline-offset-8">
              Joint Venture Structure
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <ShareCard name="Jetama Sdn. Bhd." percent="51%" />

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d5282f] text-white shadow-xl">
              <Handshake size={36} />
            </div>

            <ShareCard
              name="Alpine Pipe Manufacturing Sdn. Bhd."
              percent="49%"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <Award className="mx-auto mb-5 text-[#d5282f]" size={42} />

            <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#d5282f] decoration-4 underline-offset-8">
              Mild Steel Concrete Lined Pipes Certifications
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Certifications and approvals related to pipe manufacturing,
              conformity, quality assurance and water industry standards.
            </p>
          </div>

          <div className="mt-14">
            <button
              type="button"
              onClick={() => setPreview(certificationBoard)}
              className="group relative block w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(0,44,85,0.12)] transition hover:-translate-y-1"
            >
              <img
                src={certificationBoard}
                alt="Jetama Alpine Pipe Certifications"
                className="w-full transition duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-[#061b46]/0 transition group-hover:bg-[#061b46]/10" />

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-[#102f83] shadow-xl backdrop-blur">
                Click To Preview Certifications
              </div>
            </button>
          </div>
        </div>
      </section>

      {preview && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <button
            onClick={() => setPreview(null)}
            className="absolute right-6 top-6 rounded-full bg-white p-3 text-[#102f83] shadow-xl transition hover:scale-105"
            aria-label="Close certificate preview"
          >
            <X size={24} />
          </button>

          <div className="max-h-[95vh] max-w-7xl overflow-auto rounded-[2rem] bg-white p-3 shadow-2xl">
            <img
              src={preview}
              alt="Certification Preview"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function ShareCard({ name, percent }: { name: string; percent: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h4 className="text-6xl font-black text-[#d5282f]">{percent}</h4>
      <p className="mt-4 text-xl font-black text-[#102f83]">{name}</p>
    </div>
  );
}

function ComingSoon({ title }: { title: string }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Building2 className="mx-auto mb-6 text-[#35b24a]" size={48} />
        <h1 className="text-4xl font-black text-[#102f83]">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Details will be added soon.
        </p>
      </div>
    </section>
  );
}