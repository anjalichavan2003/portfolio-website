import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
