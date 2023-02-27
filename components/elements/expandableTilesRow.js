import styles from "../../styles/pages/portfolio/projectsSection.module.css";
import Link from "next/link";
import Image from "next/image";
import portfolio1 from "../../public/pages/portfolio/portfolio1.png";
import arrow from "../../public/pages/portfolio/icons/arrow.svg";
import portfolio2 from "../../public/pages/portfolio/portfolio2.png";
import portfolio3 from "../../public/pages/portfolio/portfolio3.png";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ExpandableTilesRow() {
  // const [opened, setOpened] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // let data={content : value}
    axios
      .post("/api/get-projects")
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    // console.log(value)
  }, []);

  return (
    <div className={styles.contentRow}>
      <div
        className={styles.tileContainer}
        onClick={() =>
          router.push("/portfolio?project=10", undefined, { shallow: true })
        }
      >
        <Image src={portfolio1} alt={"#"} className={styles.imageImage} />
        <div className={styles.imageCover}>
          <span className={styles.imageText}>
            Skład i graficzne opracowanie ebooka
          </span>
          <span className={styles.imageArrowContainer}>
            <Image src={arrow} alt={"#"} />
          </span>
        </div>
      </div>
      <Link className={styles.tileContainer} href={"#"}>
        <Image src={portfolio2} alt={"#"} className={styles.imageImage} />
        <div className={styles.imageCover}>
          <span className={styles.imageText}>
            Skład i graficzne opracowanie ebooka
          </span>
          <span className={styles.imageArrowContainer}>
            <Image src={arrow} alt={"#"} />
          </span>
        </div>
      </Link>
      <Link className={styles.tileContainer} href={"#"}>
        <Image src={portfolio3} alt={"#"} className={styles.imageImage} />
        <div className={styles.imageCover}>
          <span className={styles.imageText}>
            Skład i graficzne opracowanie ebooka
          </span>
          <span className={styles.imageArrowContainer}>
            <Image src={arrow} alt={"#"} />
          </span>
        </div>
      </Link>
      <div className={styles.descriptionContainer}>Description</div>
    </div>
  );
}
