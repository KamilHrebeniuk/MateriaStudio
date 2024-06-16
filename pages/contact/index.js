import HeaderSection from "/components/pages/universal/headerSection";
import ContactSection from "/components/pages/home/contactSection";

export default function App() {
  return (
    <>
      <HeaderSection title={"pages.contact.headerSection.title"} />
      <ContactSection />
    </>
  );
}
