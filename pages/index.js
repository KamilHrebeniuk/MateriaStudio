import Layout from "../components/pages/layout";
import HeaderSection from "../components/pages/home/headerSection";
import AuthoritySection from "../components/pages/home/authoritySection";
import QuickContact from "../components/pages/home/quickContact";
import PortfolioSection from "../components/pages/home/portfolioSection";
import DistinguishSection from "../components/pages/home/distinguishSection";
import OfferSection from "../components/pages/home/offerSection";

export default function HomePage() {
  return (
    <Layout>
      <HeaderSection />
      <AuthoritySection />
      <QuickContact />
      <PortfolioSection />
      <OfferSection />
      <DistinguishSection />
    </Layout>
  );
}
