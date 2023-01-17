import styles from "../../../styles/pages/home/distinguishSection.module.css";
import __ from "/utils/lang/translate";

export default function DistinguishSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {__("pages.home.distinguishSection.title")}
      </h2>
      <div className={styles.descriptionsContainer}>
        <div className={styles.descriptionContainer}>
          <span className={styles.number}>01</span>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            mauris lacus. Suspendisse in laoreet urna. Fusce tristique dictum
            odio, nec varius nisi venenatis at. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <span className={styles.number}>02</span>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            mauris lacus. Suspendisse in laoreet urna. Fusce tristique dictum
            odio, nec varius nisi venenatis at. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <span className={styles.number}>03</span>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            mauris lacus. Suspendisse in laoreet urna. Fusce tristique dictum
            odio, nec varius nisi venenatis at. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae
          </div>
        </div>
      </div>
    </div>
  );
}
