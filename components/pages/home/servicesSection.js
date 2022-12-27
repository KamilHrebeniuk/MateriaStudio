import styles from "../../../styles/pages/home/servicesSection.module.css";

export default function ServicesSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>W tym mogę Ci pomóc:</h2>
        <div className={styles.servicesContainer}>
          <div className={styles.service}>
            <h3 className={styles.serviceTitle}>Grafika 2D</h3>
            <div className={styles.servicesDescriptionContainer}>
              <ul>
                <li className={styles.serviceDescription}>Stworzenie logo</li>
                <li className={styles.serviceDescription}>
                  Identyfikacja wizualna
                </li>
                <li className={styles.serviceDescription}>Projekty opakowań</li>
                <li className={styles.serviceDescription}>Skład ebooków</li>
                <li className={styles.serviceDescription}>
                  Szablony prezentacji
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.service}>
            <h3 className={styles.serviceTitle}>Grafika 3D</h3>
            <div className={styles.servicesDescriptionContainer}>
              <ul>
                <li className={styles.serviceDescription}>
                  Parametryczne modele 3D
                </li>
                <li className={styles.serviceDescription}>Druk 3D</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
