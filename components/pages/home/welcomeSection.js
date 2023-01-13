import { useIntl } from "react-intl";
import styles from "../../../styles/pages/home/welcomeSection.module.css";
import useWindowSize from "../../../hooks/useWindowSize";

export default function WelcomeSection() {
  const intl = useIntl();

  const windowSize = useWindowSize();
  const sectionHeight = windowSize.height > 500 ? "100vh" : "500px";

  return (
    <div className={styles.container} style={{ height: sectionHeight }}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {intl.formatMessage({ id: "pages.home.welcomeSection.title" })}
        </h1>
        <span
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({
              id: "pages.home.welcomeSection.description",
            }),
          }}
        />
      </div>
    </div>
  );
}
