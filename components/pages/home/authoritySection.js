import styles from "../../../styles/pages/home/authoritySection.module.css";
import Image from "next/image";
import CEO_image from "../../../public/pages/home/CEO.png";
import { useIntl } from "react-intl";

export default function AuthoritySection() {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>
            {intl.formatMessage({ id: "pages.home.authoritySection.title" })}
          </h2>
          <span className={styles.description}>
            {intl.formatMessage({
              id: "pages.home.authoritySection.description",
            })}
          </span>
        </div>
        <Image src={CEO_image} alt="CEO" className={styles.image} />
      </div>
    </div>
  );
}
