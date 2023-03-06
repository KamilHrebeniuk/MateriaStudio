import styles from "../../../styles/pages/home/welcomeSection.module.css";
import useWindowSize from "../../../hooks/useWindowSize";
import __ from "/utils/lang/translate";
import Image from "next/image";
import background from "/public/pages/home/homeBG.jpeg";

export default function WelcomeSection() {
  const windowSize = useWindowSize();
  const sectionHeight =
    windowSize.height > 500 ? "calc(100vh - 130px)" : "500px";

  return (
    <div className={styles.container} style={{ height: sectionHeight }}>
      <Image className={styles.background} src={background} alt={"#"} />
      <div className={styles.content}>
        <span className={styles.titleShadow}>
          {__("pages.home.welcomeSection.title")}
        </span>
        <h1 className={styles.title}>
          {__("pages.home.welcomeSection.title")}
        </h1>
        <span
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: __("pages.home.welcomeSection.description"),
          }}
        />
        {/*<Button*/}
        {/*  textId={"pages.home.welcomeSection.startButton"}*/}
        {/*  type={"purpleAccent"}*/}
        {/*  size={"small"}*/}
        {/*  url={url.offerPage}*/}
        {/*/>*/}
      </div>
    </div>
  );
}
