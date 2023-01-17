import styles from "../../../styles/pages/home/authoritySection.module.css";
import Image from "next/image";
import CEO_image from "../../../public/pages/home/CEO.png";
import __ from "/utils/lang/translate";
import Button from "../../elements/button";

export default function AuthoritySection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>
            {__("pages.home.authoritySection.title")}
          </h2>
          <span className={styles.description}>
            {__("pages.home.authoritySection.description")}
          </span>
          <div className={styles.startButton}>
            <Button
              textId={"pages.home.authoritySection.startButton"}
              type={"white"}
              size={"small"}
              url={"#"}
            />
          </div>
        </div>
        <Image src={CEO_image} alt="CEO" className={styles.image} />
      </div>
    </div>
  );
}
