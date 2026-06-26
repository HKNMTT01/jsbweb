import { Link } from "react-router";
import {
  Mail,
  Phone,
  MapPin,
  Droplets,
  Building2,
  Newspaper,
  Briefcase,
  Leaf,
} from "lucide-react";

import logoImage from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import CmsText from "./cms/CmsText";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061f33] text-white">
      {/* Curvy Top */}
      <div className="absolute left-0 top-0 z-10 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 125"
          preserveAspectRatio="none"
          className="block h-28 w-full"
        >
          {/* White Top */}
          <path
            d="M0,35 C260,0 420,75 720,70 C1030,65 1180,5 1440,35 L1440,0 L0,0 Z"
            fill="#f8fafc"
          />

          {/* Orange Accent */}
          <path
            d="M0,62 C280,20 470,95 760,90 C1050,85 1210,37 1440,62 L1440,40 C1210,12 1050,72 760,76 C470,80 280,5 0,40 Z"
            fill="#F6A623"
            opacity="0.75"
          />

          {/* JETAMA Green */}
          <path
            d="M0,78 C300,35 500,108 790,103 C1080,98 1230,48 1440,78 L1440,58 C1230,28 1080,88 790,93 C500,98 300,18 0,58 Z"
            fill="#35B24A"
            opacity="0.85"
          />

          {/* Corporate Blue */}
          <path
            d="M0,95 C320,48 540,118 820,113 C1100,108 1250,62 1440,95 L1440,75 C1250,42 1100,88 820,93 C540,98 320,28 0,75 Z"
            fill="#005AAA"
            opacity="0.95"
          />

          {/* Deep Navy */}
          <path
            d="M0,112 C340,68 570,125 860,122 C1130,118 1280,82 1440,112 L1440,125 L0,125 Z"
            fill="#003B7A"
          />
        </svg>
      </div>

      {/* Cover straight line behind curve */}
      <div className="absolute left-0 top-0 h-14 w-full bg-[#f8fafc]" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-36 lg:px-8">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
          {/* Logo Section */}
          <div className="relative -mt-10">
            <img
              src={logoImage}
              alt="JETAMA Logo"
              className="mb-1 ml-1 h-52 w-auto object-contain brightness-125 contrast-125 drop-shadow-[0_18px_35px_rgba(0,168,132,0.35)] lg:h-64"
            />
            <p className="mt-1 mb-1 max-w-[310px] text-justify text-[16px] leading-5 text-slate-300">
              <CmsText id="footer.description" page="Footer" fallback="A wholly owned company of the State Government Sabah through Kota Kinabalu Water Sdn. Bhd., a subsidiary of Sabah Development Berhad." />
            </p>
          </div>
          {/* About */}
          <div className="pt-4">
            <h3 className="mb-8 text-3xl font-black">
              About Us
            </h3>

            <ul className="space-y-5 text-[16px] text-slate-300">
              {[
                ["CEO's Message", "/about/ceo-message"],
                ["Company Profile", "/about/company-profile"],
                [
                  "Board of Directors",
                  "/about/board-of-directors",
                ],
                [
                  "Top Level Management",
                  "/about/top-level-management",
                ],
                [
                  "Vision, Mission & Core Values",
                  "/about/vision-mission-core-values",
                ],
              ].map(([item, path]) => (
                <li key={item}>
                  <Link
                    to={path}
                    className="transition duration-300 hover:text-[#7fffe5]"
                  >
                    › {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="pt-4">
            <h3 className="mb-8 text-3xl font-black">
              Explore
            </h3>

            <ul className="space-y-5 text-[16px] text-slate-300">
              <li>
                <Link
                  to="/services/overview"
                  className="flex items-center gap-4 transition duration-300 hover:text-[#7fffe5]"
                >
                  <Droplets
                    size={20}
                    className="shrink-0 text-[#fffb29]"
                  />
                  Services Overview
                </Link>
              </li>

              <li>
                <Link
                  to="/services/our-facilities"
                  className="flex items-center gap-4 transition duration-300 hover:text-[#7fffe5]"
                >
                  <Building2
                    size={20}
                    className="shrink-0 text-[#fffb29]"
                  />
                  Our Facilities
                </Link>
              </li>

              <li>
                <Link
                  to="/services/total-capability"
                  className="flex items-center gap-4 transition duration-300 hover:text-[#7fffe5]"
                >
                  <Droplets
                    size={20}
                    className="shrink-0 text-[#fffb29]"
                  />
                  Total Capability
                </Link>
              </li>


              <li>
                <Link
                  to="/sustainability"
                  className="flex items-center gap-4 transition duration-300 hover:text-[#7fffe5]"
                >
                  <Leaf
                    size={20}
                    className="shrink-0 text-[#fffb29]"
                  />
                  Sustainability
                </Link>
              </li>

              <li>
                <Link
                  to="/projects/completed-projects"
                  className="flex items-center gap-4 transition duration-300 hover:text-[#7fffe5]"
                >
                  <Building2
                    size={20}
                    className="shrink-0 text-[#fffb29]"
                  />
                  Completed Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/news"
                  className="flex items-center gap-4 transition duration-300 hover:text-[#7fffe5]"
                >
                  <Newspaper
                    size={20}
                    className="shrink-0 text-[#fffb29]"
                  />
                  News & Events
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="flex items-center gap-4 transition duration-300 hover:text-[#7fffe5]"
                >
                  <Briefcase
                    size={20}
                    className="shrink-0 text-[#fffb29]"
                  />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pt-4">
            <h3 className="mb-8 text-3xl font-black">
              Contact Info
            </h3>

            <ul className="space-y-6 text-[16px] leading-8 text-slate-300">
              <li className="flex items-start gap-4">
                <MapPin
                  size={22}
                  className="mt-1 shrink-0 text-[#fffb29]"
                />
                <span>
                  B2-10-03, Block B, The Riverson Suites,
                  Coastal Road, 88100 Kota Kinabalu, Sabah
                </span>
              </li>

              <li className="flex items-center gap-4">
                <Phone
                  size={22}
                  className="shrink-0 text-[#fffb29]"
                />
                +60 88-249 521
              </li>

              <li className="flex items-center gap-4">
                <Phone
                  size={22}
                  className="shrink-0 text-[#fffb29]"
                />
                +60 88-249 517
              </li>

              <li className="flex items-center gap-4">
                <Mail
                  size={22}
                  className="shrink-0 text-[#fffb29]"
                />
                office@jetama.com.my
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-[15px] text-slate-400">
          <p>
            Copyright © {new Date().getFullYear()} JETAMA SDN
            BHD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}