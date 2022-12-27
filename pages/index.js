import Layout from "../components/pages/layout";
import WelcomeSection from "../components/pages/home/welcomeSection";
import AuthoritySection from "../components/pages/home/authoritySection";
import ServicesSection from "../components/pages/home/servicesSection";

export default function App() {
  return (
    <Layout>
      <WelcomeSection />
      <AuthoritySection />
      <ServicesSection />
    </Layout>
  );
}
