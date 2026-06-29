import { useEffect, useState } from "react";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import damImage from "@/assets/DJI_0298.jpg";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => setHide(true), 2300);
    const remove = setTimeout(() => setVisible(false), 3000);

    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] overflow-hidden transition-all duration-700 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background Image */}
      <img
        src={damImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/82 backdrop-blur-[2px]" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef7ff]/70 via-white/40 to-[#f8fff5]/70" />

      {/* Left Geometric */}
      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rotate-45 bg-[#005AAA]/12" />
      <div className="absolute -left-10 top-16 h-[220px] w-[220px] rotate-45 bg-[#35B24A]/12" />
      <div className="absolute left-40 top-32 h-12 w-12 rotate-45 bg-[#005AAA]/18" />

      {/* Right Geometric */}
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rotate-12 bg-[#35B24A]/14" />
      <div className="absolute right-12 bottom-24 h-44 w-44 rotate-45 bg-[#F5A623]/18" />

      {/* Dot Pattern */}
      <div className="absolute right-20 top-16 grid grid-cols-8 gap-3 opacity-40">
        {Array.from({ length: 64 }).map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-[#005AAA]"
          />
        ))}
      </div>

      <div className="absolute bottom-12 left-12 grid grid-cols-8 gap-3 opacity-30">
        {Array.from({ length: 64 }).map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-[#35B24A]"
          />
        ))}
      </div>

      {/* Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-25"
        viewBox="0 0 1440 220"
      >
        <path
          d="M0,130 C200,50 400,200 720,120 C960,60 1180,170 1440,90"
          fill="none"
          stroke="#005AAA"
          strokeWidth="2"
        />
        <path
          d="M0,160 C280,110 520,220 850,140 C1100,80 1260,180 1440,120"
          fill="none"
          stroke="#35B24A"
          strokeWidth="2"
        />
      </svg>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">

        <img
          src={jetamaLogo}
          alt="JETAMA"
          className="w-[420px] max-w-[90%] drop-shadow-[0_25px_45px_rgba(0,90,170,.18)] animate-[logoFloat_3s_ease-in-out_infinite]"
        />

        <p className="mt-8 text-[18px] font-semibold tracking-[0.35em] text-[#005AAA]">
          REDEFINING WATER & ENERGY
        </p>

        <div className="mt-5 h-[3px] w-40 rounded-full bg-[#005AAA]" />

        {/* Loading */}
        <div className="mt-10 h-5 w-[420px] max-w-[90%] overflow-hidden rounded-full bg-white shadow-xl">

          <div className="relative h-full animate-[loading_2s_linear_infinite] rounded-full bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]">
            <div className="absolute inset-0 animate-pulse bg-white/30" />
          </div>

        </div>

        <p className="mt-7 text-lg tracking-[0.25em] text-[#005AAA]">
          Loading...
        </p>

      </div>

      <style>{`
        @keyframes loading{
          0%{transform:translateX(-100%);}
          100%{transform:translateX(340%);}
        }

        @keyframes logoFloat{
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}