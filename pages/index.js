import HeaderSection from "/components/pages/universal/headerSection";
import AuthoritySection from "/components/pages/home/authoritySection";
import QuickContactSection from "/components/pages/home/quickContactSection";
import PortfolioSection from "/components/pages/home/portfolioSection";
import DistinguishSection from "/components/pages/home/distinguishSection";
import OfferSection from "/components/pages/home/offerSection";
import ScheduleSection from "/components/pages/home/scheduleSection";
import ContactSection from "/components/pages/home/contactSection";
import CarouselText from "/components/pages/home/carouselText";

export default function HomePage() {
  return (
    <>
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
      <CarouselText
        title={"pages.home.opinionsSection.title"}
        subTitle={"pages.home.opinionsSection.subTitle"}
        tileNames={[
          "pages.home.opinionsSection.tileNames.name1",
          "pages.home.opinionsSection.tileNames.name2",
          "pages.home.opinionsSection.tileNames.name3",
          "pages.home.opinionsSection.tileNames.name4",
          "pages.home.opinionsSection.tileNames.name5",
        ]}
        tileDescriptions={[
          "pages.home.opinionsSection.tileDescriptions.description1",
          "pages.home.opinionsSection.tileDescriptions.description2",
          "pages.home.opinionsSection.tileDescriptions.description3",
          "pages.home.opinionsSection.tileDescriptions.description4",
          "pages.home.opinionsSection.tileDescriptions.description5",
        ]}
        tileTitles={["", "", "", "", ""]}
        tilesInRow={3}
        tileImageSquares={[true, true, true, true, true, true, true]}
        tileImageDetails={[false, false, false, false, false, false, false]}
      />
      <DistinguishSection />
      <ScheduleSection />
      <ContactSection />
    </>
  );
}
