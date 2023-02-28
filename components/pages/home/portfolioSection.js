import styles from "../../../styles/pages/home/portfolioSection.module.css";
import Image from "next/image";
import Link from "next/link";
import portfolio1 from "/public/pages/home/portfolio1.png";
import portfolio2 from "/public/pages/home/portfolio2.png";
import portfolio3 from "/public/pages/home/portfolio3.png";
import Button from "../../elements/button";
import StandardHeader from "../../elements/standardHeader";

export default function PortfolioSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StandardHeader
          subTitle={"pages.home.portfolioSection.subTitle"}
          title={"pages.home.portfolioSection.title"}
          description={"pages.home.portfolioSection.description"}
          margins
        />
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
            textId={"pages.home.portfolioSection.button"}
            type={"white"}
            size={"big"}
            url={"/portfolio"}
          />
        </div>
      </div>
    </div>
  );
}
