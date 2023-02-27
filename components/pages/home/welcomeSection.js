import { useIntl } from "react-intl";
import styles from "../../../styles/pages/home/welcomeSection.module.css";
import useWindowSize from "../../../hooks/useWindowSize";
import __ from "/utils/lang/translate";
import Button from "../../elements/button";
import url from "../../../utils/routing/url";

export default function WelcomeSection() {
  const intl = useIntl();

  const windowSize = useWindowSize();
  const sectionHeight = windowSize.height > 500 ? "100vh" : "500px";

  return (
    <div className={styles.container} style={{ height: sectionHeight }}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {__("pages.home.welcomeSection.title")}
        </h1>
        <span
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({
              id: "pages.home.welcomeSection.description",
            }),
          }}
        />
        <Button
          textId={"pages.home.welcomeSection.startButton"}
          type={"purpleAccent"}
          size={"small"}
          url={url.offerPage}
        />
      </div>
    </div>
  );
}
