import { ReactNode, useEffect } from "react";
import { useSiteSettings } from "../../../lib/cms";

export default function SiteThemeProvider({ children }: { children: ReactNode }) {
  const settings = useSiteSettings();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--cms-primary", settings.primaryColor);
    root.style.setProperty("--cms-secondary", settings.secondaryColor);
    root.style.setProperty("--cms-accent", settings.accentColor);
    root.style.setProperty("--cms-font", settings.fontFamily);
    root.style.setProperty("--cms-nav-radius", settings.navRadius);
    root.style.setProperty("--cms-hero-height", settings.pageHeroHeight);
    root.style.setProperty("--cms-button-radius", settings.buttonRadius);
    root.style.setProperty("--cms-content-max", settings.contentMaxWidth);
    root.style.setProperty("--cms-logo-scale", settings.logoScale);
    root.style.setProperty("--cms-motion", settings.motionIntensity);
    root.style.setProperty("--cms-background-mode", settings.backgroundMode || "soft-gradient");
    document.body.style.fontFamily = settings.fontFamily;
  }, [settings]);

  return <>{children}</>;
}
