import useWindowSize from "../../../hooks/useWindowSize";
import StandardPageHeader from "../../elements/standardPageHeader";

export default function HeaderSection() {
  const windowSize = useWindowSize();
  const sectionHeight =
    windowSize.height > 500 ? "calc(100vh - 130px)" : "500px";

  return (
    <StandardPageHeader
      textId={"pages.home.headerSection.title"}
      descriptionId={"pages.home.headerSection.description"}
      height={sectionHeight}
    />
  );
}
