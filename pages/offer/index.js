import HeaderSection from "/components/pages/universal/headerSection";
import ContactSection from "/components/pages/home/contactSection";
import OfferSection from "/components/pages/home/offerSection";
import DetailedOfferSection from "/components/pages/offer/detailedOfferSection";

export default function App() {
  return (
    <>
      <HeaderSection title={"pages.offer.headerSection.title"} />
      <OfferSection
        subTitle={"pages.offer.offerSection.subTitle"}
        title={"pages.offer.offerSection.title"}
        extraDescription={"pages.offer.offerSection.extraDescription"}
      />
      <DetailedOfferSection />
      <ContactSection />
    </>
  );
}
