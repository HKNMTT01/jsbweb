import { useEffect, useState } from "react";
import jetamaLogo from "../../assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import damImage from "../../assets/DJI_0298.jpg";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    const logo = new Image();
    logo.src = jetamaLogo;

    const dam = new Image();
    dam.src = damImage;

    const splitTimer = setTimeout(() => setOpening(true), 2600);
    const removeTimer = setTimeout(() => setVisible(false), 3800);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden bg-[#eaf6ff]">
      <img
        src={damImage}
        alt=""
        className="absolute inset-0 h-full w-full scale-110 object-cover"
      />

      <div className="absolute inset-0 bg-white/72 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#dff1ff]/75 via-white/35 to-[#efffed]/75" />

      <div
        className={`absolute left-0 top-0 h-full w-1/2 bg-white/85 backdrop-blur-md transition-transform duration-1000 ${
          opening ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      <div
        className={`absolute right-0 top-0 h-full w-1/2 bg-white/85 backdrop-blur-md transition-transform duration-1000 ${
          opening ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rotate-45 bg-[#005AAA]/16" />
      <div className="absolute -left-10 top-16 h-[220px] w-[220px] rotate-45 bg-[#35B24A]/14" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rotate-12 bg-[#35B24A]/16" />
      <div className="absolute right-12 bottom-24 h-44 w-44 rotate-45 bg-[#F5A623]/22" />

      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center px-8 text-center transition-all duration-700 ${
          opening ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="relative flex flex-col items-center">
          <div className="absolute -inset-12 rounded-[48px] bg-white/80 blur-2xl" />

          <img
            src={jetamaLogo}
            alt="JETAMA SDN BHD"
            decoding="sync"
            loading="eager"
            fetchPriority="high"
            className="relative z-10 w-[540px] max-w-[88vw] object-contain
              animate-[logoAppear_1.2s_ease-out_forwards]
              opacity-0
              drop-shadow-[0_24px_55px_rgba(0,90,170,.35)]"
          />
        </div>

        <div className="relative z-10 mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-black uppercase tracking-[0.35em]">
          <span className="text-[#35B24A]">Redefining</span>
          <span className="text-[#005AAA]">Water &</span>
          <span className="text-[#F6A623]">Energy</span>
        </div>

        <div className="relative z-10 mt-5 h-[3px] w-44 rounded-full bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />

        <div className="relative z-10 mt-10 h-5 w-[420px] max-w-[90%] overflow-hidden rounded-full bg-white shadow-xl">
          <div className="h-full w-1/2 animate-[loading_1.45s_linear_infinite] rounded-full bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />
        </div>

        <p className="relative z-10 mt-6 text-sm font-bold tracking-[0.3em] text-[#005AAA]">
          Sabar ya loading...
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(240%); }
        }
        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: scale(.75) translateY(18px);
            filter: blur(10px);
          }

          40% {
            opacity: .45;
            transform: scale(.9) translateY(8px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
}