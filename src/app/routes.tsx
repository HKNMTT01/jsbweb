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
import AdminLogin from "./pages/admin/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import NewsAdmin from "./pages/admin/NewsAdmin";
import GalleryAdmin from "./pages/admin/GalleryAdmin";
import CareersAdmin from "./pages/admin/CareersAdmin";
import ContentAdmin from "./pages/admin/ContentAdmin";
import DesignAdmin from "./pages/admin/DesignAdmin";
import AdminPreview from "./pages/admin/AdminPreview";

export const router = createBrowserRouter([
  { path: "/admin/login", element: <AdminLogin /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "news", element: <NewsAdmin /> },
      { path: "gallery", element: <GalleryAdmin /> },
      { path: "careers", element: <CareersAdmin /> },
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
