import styles from "../../../styles/pages/home/scheduleSection.module.css";
import StandardHeader from "../../elements/standardHeader";
import __ from "/utils/lang/translate";

export default function ScheduleSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StandardHeader
          subTitle={"pages.home.scheduleSection.subTitle"}
          title={"pages.home.scheduleSection.title"}
          description={"pages.home.scheduleSection.description"}
          margins
        />
        <div className={styles.bulletsContainer}>
          <span className={styles.bulletPoint}>
            {__("pages.home.scheduleSection.bullet1")}
          </span>
          <span className={styles.bulletPoint}>
            {__("pages.home.scheduleSection.bullet2")}
          </span>
          <span className={styles.bulletPoint}>
            {__("pages.home.scheduleSection.bullet3")}
          </span>
          <span className={styles.bulletPoint}>
            {__("pages.home.scheduleSection.bullet4")}
          </span>
          <span className={styles.bulletPoint}>
            {__("pages.home.scheduleSection.bullet5")}
          </span>
          <span className={styles.bulletPoint}>
            {__("pages.home.scheduleSection.bullet6")}
          </span>
          <span className={styles.bulletPoint}>
            {__("pages.home.scheduleSection.bullet7")}
          </span>
          <span className={styles.bulletPoint}>
            {__("pages.home.scheduleSection.bullet8")}
          </span>
          <span className={styles.bulletPoint}>
            {__("pages.home.scheduleSection.bullet9")}
          </span>
        </div>
      </div>
    </div>
  );
}
