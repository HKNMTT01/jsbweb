import { createBrowserRouter, Navigate } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutDetail from "./pages/AboutDetail";
import Subsidiary from "./pages/Subsidiary";
import SubsidiaryDetails from "./pages/SubsidiaryDetails";
import JointVenture from "./pages/JointVenture";
import JointVentureDetails from "./pages/JointVentureDetails";
import Services from "./pages/Services";
import ServicesDetail from "./pages/ServicesDetail";
import Sustainability from "./pages/Sustainability";
import Projects from "./pages/Projects";
import ProjectsDetail from "./pages/ProjectsDetail";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/MiraJSB80/Login";
import AdminLayout from "./pages/MiraJSB80/AdminLayout";
import AdminDashboard from "./pages/MiraJSB80/Dashboard";
import NewsAdmin from "./pages/MiraJSB80/NewsAdmin";
import GalleryAdmin from "./pages/MiraJSB80/GalleryAdmin";
import CareersAdmin from "./pages/MiraJSB80/CareersAdmin";
import ContentAdmin from "./pages/MiraJSB80/ContentAdmin";
import DesignAdmin from "./pages/MiraJSB80/DesignAdmin";
import AdminPreview from "./pages/MiraJSB80/AdminPreview";
import InquiriesAdmin from "./pages/MiraJSB80/InquiriesAdmin";
import ApplicationsAdmin from "./pages/MiraJSB80/ApplicationsAdmin";

export const router = createBrowserRouter([
  { path: "/MiraJSB80/login", element: <AdminLogin /> },
  {
  path: "/MiraJSB80",
  element: <AdminLayout />,
  children: [
    { index: true, element: <Navigate to="/MiraJSB80/dashboard" replace /> },
    { path: "dashboard", element: <AdminDashboard /> },
    { path: "news", element: <NewsAdmin /> },
    { path: "gallery", element: <GalleryAdmin /> },
    { path: "careers", element: <CareersAdmin /> },

    { path: "inquiries", element: <InquiriesAdmin /> },
    { path: "applications", element: <ApplicationsAdmin /> },

    { path: "content", element: <ContentAdmin /> },
    { path: "design", element: <DesignAdmin /> },
    { path: "preview", element: <AdminPreview /> },
  ],
},
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "about/concession-area", element: <Navigate to="/services/concession-area" replace /> },
      { path: "about/:slug", element: <AboutDetail /> },
      { path: "services", element: <Services /> },
      { path: "services/:slug", element: <ServicesDetail /> },
      { path: "sustainability", element: <Sustainability /> },
      { path: "sustanability", element: <Navigate to="/sustainability" replace /> },
      { path: "subsidiary", element: <Subsidiary /> },
      { path: "subsidiary/:type", element: <SubsidiaryDetails /> },
      { path: "jointventure", element: <JointVenture /> },
      { path: "jointventure/:type", element: <JointVentureDetails /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:slug/:segment", element: <ProjectsDetail /> },
      { path: "projects/:slug", element: <ProjectsDetail /> },
      { path: "careers", element: <Careers /> },
      { path: "news", element: <News /> },
      { path: "news/:section", element: <News /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
