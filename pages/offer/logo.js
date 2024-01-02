import Layout from "/components/pages/layout";
import HeaderSection from "/components/pages/universal/headerSection";
import ContactSection from "/components/pages/home/contactSection";
import OfferDescriptionSection from "/components/pages/offer/offerDescriptionSection";
import personWhite from "/public/components/elements/flippingTile/icons/personWhite.svg";
import OfferSection from "/components/pages/home/offerSection";
import OfferPricingSection from "/components/pages/offer/offerPricingSection";

export default function App() {
  return (
    <Layout>
      <HeaderSection title={"pages.offer.logo.headerSection.title"} />
      <OfferDescriptionSection
        title={"pages.offer.logo.offerDescriptionSection.title"}
        subTitle={"pages.offer.logo.offerDescriptionSection.subTitle"}
        description={"pages.offer.logo.offerDescriptionSection.description"}
        icon={personWhite}
        subtitle={"pages.home.offerSection.graphicPerson"}
      />
      <OfferPricingSection
        columnHeaders={["Na Start", "Standard", "Od A do Z"]}
        columnPrices={["1000 zł", "1300 zł", "1800 zł"]}
        columnContents={[
          [
            "1 projekt logo",
            "2 poprawki do wybranej wersji projektu",
            "autorskie prawa majątkowe",
            "ustalenie kolorystyki",
          ],
          [
            "2 projekty logo",
            "2 poprawki do wybranej wersji projektu",
            "autorskie prawa majątkowe",
            "ustalenie kolorystyki",
            "księga znaku",
          ],
          [
            "3 projekty logo",
            "3 poprawki do wybranej wersji projektu",
            "autorskie prawa majątkowe",
            "ustalenie kolorystyki",
            "księga znaku",
            "projekt wzoru firmowego",
          ],
        ]}
      />
      <OfferSection
        subTitle={"pages.offer.logo.offerSection.subTitle"}
        title={"pages.offer.logo.offerSection.title"}
        description={"pages.offer.logo.offerSection.description"}
      />
      <ContactSection />
    </Layout>
  );
}
