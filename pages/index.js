import Layout from "/components/pages/layout";
import HeaderSection from "/components/pages/universal/headerSection";
import AuthoritySection from "/components/pages/home/authoritySection";
import QuickContactSection from "/components/pages/home/quickContactSection";
import PortfolioSection from "/components/pages/home/portfolioSection";
import DistinguishSection from "/components/pages/home/distinguishSection";
import OfferSection from "/components/pages/home/offerSection";
import ScheduleSection from "/components/pages/home/scheduleSection";
import ContactSection from "/components/pages/home/contactSection";

export default function HomePage() {
  return (
    <Layout>
      <HeaderSection
        title={"pages.home.headerSection.title"}
        description={"pages.home.headerSection.description"}
        largeMode
      />
      <AuthoritySection />
      <QuickContactSection />
      <PortfolioSection />
      <OfferSection
        subTitle={"pages.home.offerSection.subTitle"}
        title={"pages.home.offerSection.title"}
        description={"pages.home.offerSection.description"}
        showButton
      />
      <DistinguishSection />
      <ScheduleSection />
      <ContactSection />
    </Layout>
  );
}
