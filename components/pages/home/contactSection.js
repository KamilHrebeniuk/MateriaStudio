import styles from "../../../styles/pages/home/contactSection.module.css";
import StandardHeader from "../../elements/standardHeader";
import Button from "../../elements/button";

export default function ContactSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contactFormContainer}>
          <StandardHeader
            subTitle={"pages.home.contactSection.subTitle"}
            title={"pages.home.contactSection.title"}
          />
          <Button
            textId={"pages.home.contactSection.button"}
            type={"purpleAccent"}
            size={"middle"}
            url={"/portfolio"}
          />
        </div>
        <div className={styles.contactContactContainer}></div>
      </div>
    </div>
  );
}
