import useWindowSize from "/hooks/useWindowSize";
import StandardPageHeader from "/components/elements/standardPageHeader";
import PropTypes from "prop-types";

export default function HeaderSection({ title, description, largeMode }) {
  const windowSize = useWindowSize();
  const sectionHeight =
    windowSize.height > 500 ? "calc(100vh - 130px)" : "500px";

  if (largeMode) {
    return (
      <StandardPageHeader
        textId={title}
        descriptionId={description}
        height={sectionHeight}
      />
    );
  }
  return <StandardPageHeader textId={title} descriptionId={description} />;
}

HeaderSection.defaultProps = {
  description: "",
  largeMode: false,
};

HeaderSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  largeMode: PropTypes.bool,
};
