import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Achievements from "./Achievements";
import Layout from "./Layout";
import Projects from "./Projects";

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
