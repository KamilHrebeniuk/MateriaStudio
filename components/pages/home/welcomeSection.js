import styles from "../../../styles/pages/home/welcomeSection.module.css";
import useWindowSize from "../../../hooks/useWindowSize";

export default function WelcomeSection() {
  const windowSize = useWindowSize();
  const sectionHeight = windowSize.height > 500 ? "100vh" : "500px";

  return (
    <div className={styles.container} style={{ height: sectionHeight }}>
      <div className={styles.content}>
        <h1 className={styles.title}>Łączymy kropki</h1>
        <span className={styles.description}>
          Materia Studio to dwie natury - sztuka połączona z inżynierską
          precyzją. Jako designer podchodzę do projektów z otwartą głową i
          nieskończoną wyobraźnią. Jako inżynier pilnuję, by końcowy efekt był
          idealnie wykończony i jakościowy na każdym poziomie.
          <br />
          <br />
          Już nie musiszsię męczyć - pomogę Ci połączyć kropki
        </span>
      </div>
    </div>
  );
}
