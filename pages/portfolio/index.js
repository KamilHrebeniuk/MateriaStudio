import ProjectsSection from "/components/pages/portfolio/projectsSection";
import HeaderSection from "/components/pages/universal/headerSection";
import ContactSection from "/components/pages/home/contactSection";

export default function Portfolio() {
  return (
    <>
      <HeaderSection title={"pages.portfolio.headerSection.title"} />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
