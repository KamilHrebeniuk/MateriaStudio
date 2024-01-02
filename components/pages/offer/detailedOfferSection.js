import styles from "../../../styles/pages/offer/detailedOfferSection.module.css";
import StandardHeader from "../../elements/standardHeader";
import PropTypes from "prop-types";
import __ from "/utils/lang/translate";

export default function DetailedOfferSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StandardHeader
          subTitle={"pages.offer.detailedOfferSection.subTitle"}
          title={"pages.offer.detailedOfferSection.title"}
          margins
        />
        <div className={styles.optionsContainer}>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option1")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price1")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option2")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price2")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option3")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price3")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option4")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price4")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option5")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price5")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option6")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price6")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option7")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price7")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option8")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price8")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option9")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price9")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option10")}
            </div>
            <span className={styles.optionSpacing} />
            <div className={styles.optionPrice}>
              {__("pages.offer.detailedOfferSection.price10")}
            </div>
          </div>
          <div className={styles.optionContainer}>
            <div className={styles.optionTitle}>
              {__("pages.offer.detailedOfferSection.option11")}
            </div>
            <span className={styles.optionSpacing} />
          </div>
        </div>
      </div>
    </div>
  );
}

DetailedOfferSection.defaultProps = {
  extraDescription: "",
  showButton: false,
};

DetailedOfferSection.propTypes = {
  extraDescription: PropTypes.string,
  showButton: PropTypes.bool,
};
