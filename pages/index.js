import Layout from "../components/layout";
import WelcomeSection from "../components/welcomeSection";
import AuthoritySection from "../components/authoritySection";
import ServicesSection from "../components/servicesSection";

export default function App() {
  return (
    <Layout>
      <WelcomeSection />
      <AuthoritySection />
      <ServicesSection />
    </Layout>
  );
}
