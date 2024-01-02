import styles from "/styles/pages/offer/offerPricingSection.module.css";
import PropTypes from "prop-types";
import __ from "/utils/lang/translate";

export default function OfferPricingSection({
  columnHeaders,
  columnPrices,
  columnContents,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {columnHeaders.map((header, index) => {
          return (
            <div className={styles.column} key={index}>
              <h3 className={styles.columnHeader}>{__(header)}</h3>
              <h3 className={styles.columnPrice}>{__(columnPrices[index])}</h3>
              <span className={styles.columnNet}>{__("netto")}</span>
              {columnContents[index].map((columnContent, innerIndex) => {
                return (
                  <div className={styles.columnRow} key={innerIndex}>
                    {" "}
                    {__(columnContent)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

OfferPricingSection.propTypes = {
  columnHeaders: PropTypes.array.isRequired,
  columnPrices: PropTypes.array.isRequired,
  columnContents: PropTypes.array.isRequired,
};
