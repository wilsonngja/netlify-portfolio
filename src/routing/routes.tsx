import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import WorkExperience from "./WorkExperience/WorkExperience";
import Achievements from "./Achievements/Achievements";
import Layout from "./Layout";
import Projects from "./Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about_me", element: <AboutMe /> },
      { path: "education", element: <Education /> },
      { path: "work_experiences", element: <WorkExperience /> },
      { path: "projects", element: <Projects /> },
      { path: "achievements", element: <Achievements /> },
    ],
  },
]);

export default router;
