import './App.css';
import AboutMe from './components/AboutMeFolder/AboutMe';
import AboutMeHero from './components/AboutMeFolder/AboutMeHero';
import Company from './components/Company/Company';
import CompanyHero from './components/Company/CompanyHero';
import Hero from './components/HeroFolder/Hero';
import MiniAbout from './components/MiniAbout/MiniAbout';
import Nab from './components/NabFolder/Nab';
import Project from './components/ProjectFolder/Project';
import ProjectHero from './components/ProjectFolder/ProjectHero';
import Resume from './components/ResumeFolder/Resume';
import ResumeHero from './components/ResumeFolder/ResumeHero';
import Skill from './components/SkillFolder/Skill';
import SkillHero from './components/SkillFolder/SkillHero';

function App() {
  return (
    <>
      <Hero />
      <Nab />
      <MiniAbout />
      <CompanyHero />
      <Company />
      <SkillHero />
      <Skill />
      <ProjectHero />
      <Project />
      <AboutMeHero />
      <AboutMe />
      <ResumeHero />
      <Resume />
    </>
  );
}

export default App;
