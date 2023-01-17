import styles from "../../../styles/pages/home/portfolioSection.module.css";
import Image from "next/image";
import Link from "next/link";
import __ from "/utils/lang/translate";
import portfolio1 from "/public/pages/home/portfolio1.png";
import portfolio2 from "/public/pages/home/portfolio2.png";
import portfolio3 from "/public/pages/home/portfolio3.png";
import Button from "../../elements/button";

export default function PortfolioSection() {
  return (
    <div className={styles.container}>
      <div className={styles.headersContainer}>
        <h2 className={styles.mainHeader}>
          {__("pages.home.portfolioSection.portfolioHeader")}
        </h2>
        <Link href={"#"} className={styles.secondaryHeader}>
          {__("pages.home.portfolioSection.checkPortfolioButton")}
        </Link>
      </div>
      <div className={styles.purpleBlockContainer}>
        <div className={styles.purpleBlock} />
        <Link href={"#"} className={styles.purpleBlockLink}>
          {__("pages.home.portfolioSection.purpleBlockButton")}
        </Link>
      </div>
      <div className={styles.graphicsContainer}>
        <Link href={"#"} className={styles.graphicsLink}>
          <Image src={portfolio1} alt={""} />
        </Link>
        <Link href={"#"} className={styles.graphicsLink}>
          <Image src={portfolio2} alt={""} />
        </Link>
        <Link href={"#"} className={styles.graphicsLink}>
          <Image src={portfolio3} alt={""} />
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          textId={"pages.home.portfolioSection.portfolioButton"}
          type={"white"}
          size={"big"}
          url={"#"}
        />
      </div>
    </div>
  );
}
