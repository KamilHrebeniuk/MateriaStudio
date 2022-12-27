import styles from "../../../styles/pages/home/authoritySection.module.css";
import Image from "next/image";
import CEO_image from "../../../public/pages/home/CEO.png";

export default function AuthoritySection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>
            Już nie musisz się męczyć - pomogę Ci połączyć kropki!
          </h2>
          <span className={styles.description}>
            Materia Studio to dwie natury - sztuka połączona z inżynierską
            precyzją. Jako designer podchodzę do projektów z otwartą głową i
            nieskończoną wyobraźnią. Jako inżynier pilnuję, by końcowy efekt był
            idealnie wykończony i jakościowy na każdym poziomie.
          </span>
        </div>
        <Image src={CEO_image} alt="CEO" className={styles.image} />
      </div>
    </div>
  );
}
