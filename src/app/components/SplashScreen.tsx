import { useEffect, useState } from "react";
import jetamaLogo from "../../assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import damImage from "../../assets/DJI_0298.jpg";

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
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={damImage}
        alt=""
        className="absolute inset-0 h-full w-full scale-110 object-cover"
      />

      <div className="absolute inset-0 bg-white/72 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#dff1ff]/70 via-white/35 to-[#efffed]/70" />

      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rotate-45 bg-[#005AAA]/16" />
      <div className="absolute -left-10 top-16 h-[220px] w-[220px] rotate-45 bg-[#35B24A]/14" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rotate-12 bg-[#35B24A]/16" />
      <div className="absolute right-12 bottom-24 h-44 w-44 rotate-45 bg-[#F5A623]/22" />

      <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
        <div className="relative flex flex-col items-center">
          <div className="absolute -inset-12 rounded-[48px] bg-white/75 blur-2xl" />
          <div className="absolute h-64 w-64 rounded-full bg-[#005AAA]/12 blur-3xl" />

          <img
            src={jetamaLogo}
            alt="JETAMA SDN BHD"
            className="relative z-10 h-auto w-[520px] max-w-[88vw] object-contain drop-shadow-[0_24px_55px_rgba(0,90,170,.32)]"
          />

          <h1 className="relative z-10 mt-5 text-5xl font-black italic tracking-tight text-[#005AAA] md:text-7xl">
            JETAMA
            <span className="ml-3 text-2xl not-italic text-[#005AAA] md:text-4xl">
              SDN BHD
            </span>
          </h1>
        </div>

        <p className="relative z-10 mt-5 text-[15px] font-black uppercase tracking-[0.35em] text-[#005AAA]">
          Redefining Water <span className="text-[#35B24A]">&</span>{" "}
          <span className="text-[#F5A623]">Energy</span>
        </p>

        <div className="relative z-10 mt-6 h-[3px] w-44 rounded-full bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />

        <div className="relative z-10 mt-10 h-5 w-[420px] max-w-[90%] overflow-hidden rounded-full bg-white shadow-xl">
          <div className="h-full w-1/2 animate-[loading_1.5s_linear_infinite] rounded-full bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />
        </div>

        <p className="relative z-10 mt-6 text-sm font-bold tracking-[0.3em] text-[#005AAA]">
          Loading...
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(240%); }
        }
      `}</style>
    </div>
  );
}