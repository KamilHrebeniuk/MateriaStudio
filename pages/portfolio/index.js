import Layout from "/components/pages/layout";
import ProjectsSection from "/components/pages/portfolio/projectsSection";
import HeaderSection from "/components/pages/universal/headerSection";

export default function Portfolio() {
  return (
    <Layout>
      <HeaderSection title={"pages.portfolio.headerSection.title"} />
      <ProjectsSection />
      <></>
    </Layout>
  );
}
