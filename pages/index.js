import Layout from "../components/pages/layout";
import HeaderSection from "../components/pages/home/headerSection";
import AuthoritySection from "../components/pages/home/authoritySection";
import QuickContactSection from "../components/pages/home/quickContactSection";
import PortfolioSection from "../components/pages/home/portfolioSection";
import DistinguishSection from "../components/pages/home/distinguishSection";
import OfferSection from "../components/pages/home/offerSection";
import ScheduleSection from "../components/pages/home/scheduleSection";

export default function HomePage() {
  return (
    <Layout>
      <HeaderSection />
      <AuthoritySection />
      <QuickContactSection />
      <PortfolioSection />
      <OfferSection />
      <DistinguishSection />
      <ScheduleSection />
    </Layout>
  );
}
