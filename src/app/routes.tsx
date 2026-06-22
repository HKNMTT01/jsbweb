import { createBrowserRouter } from "react-router";
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
  { path: "/admin/login", Component: AdminLogin },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "dashboard", Component: AdminDashboard },
      { path: "news", Component: NewsAdmin },
      { path: "gallery", Component: GalleryAdmin },
      { path: "careers", Component: CareersAdmin },
      { path: "content", Component: ContentAdmin },
      { path: "design", Component: DesignAdmin },
      { path: "preview", Component: AdminPreview },
    ],
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "about/:slug", Component: AboutDetail },
      { path: "subsidiary", Component: Subsidiary },
      { path: "subsidiary/:type", Component: SubsidiaryDetails },
      { path: "jointventure", Component: JointVenture },
      { path: "jointventure/:type", Component: JointVentureDetails },
      { path: "services", Component: Services },
      { path: "services/:slug", Component: ServicesDetail },
      { path: "projects", Component: Projects },
      { path: "projects/:slug/:segment", Component: ProjectsDetail },
      { path: "projects/:slug", Component: ProjectsDetail },
      { path: "careers", Component: Careers },
      { path: "news", Component: News },
      { path: "news/:section", Component: News },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);