import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const Timeline = lazy(() => import("../pages/Timeline"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

export const mainNavigation = [
  {
    name: "Home",
    link: "/",
    element: <Home />,
  },
  {
    name: "Projects",
    link: "/projects",
    element: <ProjectsPage />,
  },
  {
    name: "Timeline",
    link: "/timeline",
    element: <Timeline />,
  },
  {
    name: "Contact",
    link: "/contact",
    element: <ContactUs />,
  },
];
