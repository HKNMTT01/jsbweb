import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";
import PageTopReset from "./PageTopReset";
import SiteThemeProvider from "./cms/SiteThemeProvider";

export default function Root() {
  return (
    <SiteThemeProvider>
    <div className="min-h-screen flex flex-col">
      <PageTopReset />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
    </SiteThemeProvider>
  );
}