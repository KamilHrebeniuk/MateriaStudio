import styles from "../../../styles/pages/portfolio/projectsSection.module.css";
import Image from "next/image";
import Link from "next/link";
import portfolio1 from "/public/pages/portfolio/portfolio1.png";
import portfolio2 from "/public/pages/portfolio/portfolio2.png";
import portfolio3 from "/public/pages/portfolio/portfolio3.png";
import ExpandableTilesRow from "../../elements/expandableTilesRow";

export default function ProjectsSection() {
  console.log("AAAAAAAAAAAAA");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ExpandableTilesRow />
        <div className={styles.contentRow}>
          <Link className={styles.tileContainer} href={"#"}>
            <Image src={portfolio1} alt={"#"} />
          </Link>
          <Link className={styles.tileContainer} href={"#"}>
            <Image src={portfolio2} alt={"#"} />
          </Link>
          <Link className={styles.tileContainer} href={"#"}>
            <Image src={portfolio3} alt={"#"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
