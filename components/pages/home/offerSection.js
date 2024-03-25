import styles from "../../../styles/pages/home/offerSection.module.css";
import heartPurple from "../../../public/components/elements/flippingTile/icons/heartWhite.svg";
import heartWhite from "../../../public/components/elements/flippingTile/icons/heartGray.svg";
import personPurple from "../../../public/components/elements/flippingTile/icons/personWhite.svg";
import personWhite from "../../../public/components/elements/flippingTile/icons/personGray.svg";
import brushWhite from "/public/components/elements/flippingTile/icons/brushWhite.svg";
import brushGray from "/public/components/elements/flippingTile/icons/brushGray.svg";
import starPurple from "../../../public/components/elements/flippingTile/icons/starWhite.svg";
import starWhite from "../../../public/components/elements/flippingTile/icons/starGray.svg";
import Button from "../../elements/button";
import FlippingTile from "../../elements/flippingTile";
import StandardHeader from "../../elements/standardHeader";
import PropTypes from "prop-types";
import __ from "/utils/lang/translate";

export default function OfferSection({
  title,
  subTitle,
  description,
  extraDescription,
  showButton,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StandardHeader
          subTitle={subTitle}
          title={title}
          description={description}
          margins
        />
        {extraDescription.length > 0 && (
          <div className={styles.extraDescriptionContainer}>
            {__(extraDescription)}
          </div>
        )}
        <div className={styles.graphicsContainer}>
          {/*<div className={styles.graphicsContainerRow}>*/}
          <FlippingTile
            url={"/offer/logo"}
            srcPurple={personPurple}
            srcWhite={personWhite}
            textPurple={"pages.home.offerSection.graphicPerson"}
            textWhite={"pages.home.offerSection.moreInformation"}
          />
          <FlippingTile
            url={"/offer/branding"}
            srcPurple={starPurple}
            srcWhite={starWhite}
            textPurple={"pages.home.offerSection.graphicStar"}
            textWhite={"pages.home.offerSection.moreInformation"}
          />
          {/*</div>*/}
          {/*<div className={styles.graphicsContainerRow}>*/}
          <FlippingTile
            url={"/offer/media"}
            srcPurple={heartPurple}
            srcWhite={heartWhite}
            textPurple={"pages.home.offerSection.graphicHeart"}
            textWhite={"pages.home.offerSection.moreInformation"}
          />
          <FlippingTile
            url={"/offer/hours"}
            srcPurple={brushWhite}
            srcWhite={brushGray}
            textPurple={"pages.home.offerSection.graphicBrush"}
            textWhite={"pages.home.offerSection.moreInformation"}
          />
          {/*</div>*/}
        </div>
        {showButton && (
          <div className={styles.buttonContainer}>
            <Button
              textId={"pages.home.offerSection.button"}
              type={"white"}
              size={"big"}
              url={"#"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

OfferSection.defaultProps = {
  description: "",
  extraDescription: "",
  showButton: false,
};

OfferSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  extraDescription: PropTypes.string,
  showButton: PropTypes.bool,
};
