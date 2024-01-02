import styles from "/styles/pages/offer/offerDescriptionSection.module.css";
import StandardHeader from "../../elements/standardHeader";
import PropTypes from "prop-types";
import __ from "/utils/lang/translate";
import Image from "next/image";

export default function OfferDescriptionSection({
  title,
  subTitle,
  description,
  icon,
  subtitle,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <StandardHeader subTitle={subTitle} title={title} margins />
          <div className={styles.descriptionContainer}>{__(description)}</div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.imageGraphics}
              src={icon}
              alt={__(subtitle)}
            />
            <span className={styles.imageSubtitle}>{__(subtitle)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

OfferDescriptionSection.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.object,
  subtitle: PropTypes.string,
};
