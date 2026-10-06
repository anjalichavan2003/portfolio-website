import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProjectDetails from "./pages/ProjectDetails";

import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
