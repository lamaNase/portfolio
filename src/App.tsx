import "./index.css"; 

import AboutMe from "./components/AboutMe/AboutMe";
import Languages from "./components/Languages/Languages";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import PublicProjects from "./components/PublicProjects/PublicProjects";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="app">
      <Header/>
      <AboutMe />
      <Languages />
      <Experience />
      <Education />
      <PublicProjects/>
    </div>
  );
}