import styles from "../../../styles/pages/home/distinguishSection.module.css";
import __ from "/utils/lang/translate";
import StandardHeader from "../../elements/standardHeader";

export default function DistinguishSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StandardHeader
          subTitle={"pages.home.distinguishSection.subTitle"}
          title={"pages.home.distinguishSection.title"}
          margins
        />
        <div className={styles.descriptionsContainer}>
          <div className={styles.descriptionContainer}>
            <span className={styles.number}>01</span>
            <h3 className={styles.descriptionHeader}>
              {__("pages.home.distinguishSection.descriptionTitle01")}
            </h3>
            <p className={styles.description}>
              {__("pages.home.distinguishSection.description01")}
            </p>
          </div>
          <div className={styles.descriptionContainer}>
            <span className={styles.number}>02</span>
            <h3 className={styles.descriptionHeader}>
              {__("pages.home.distinguishSection.descriptionTitle02")}
            </h3>
            <p className={styles.description}>
              {__("pages.home.distinguishSection.description02")}
            </p>
          </div>
          <div className={styles.descriptionContainer}>
            <span className={styles.number}>03</span>
            <h3 className={styles.descriptionHeader}>
              {__("pages.home.distinguishSection.descriptionTitle03")}
            </h3>
            <p className={styles.description}>
              {__("pages.home.distinguishSection.description03")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
