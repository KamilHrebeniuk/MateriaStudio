import styles from "../../../styles/pages/home/quickContact.module.css";
import StandardHeader from "../../elements/standardHeader";
import ContactButton from "../../elements/contactButton";

export default function QuickContact() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StandardHeader
          subTitle={"pages.home.quickContactSection.subTitle"}
          title={"pages.home.quickContactSection.title"}
          description={"pages.home.quickContactSection.description"}
          margins
        />
        <div className={styles.buttonsContainer}>
          <ContactButton
            url={"#"}
            textId={"pages.home.quickContactSection.button1"}
          />
          <ContactButton
            url={"#"}
            textId={"pages.home.quickContactSection.button2"}
          />
        </div>
      </div>
    </div>
  );
}
