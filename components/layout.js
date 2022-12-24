import PropTypes from "prop-types";
import styles from "../styles/footer.module.css";
import Head from "next/head";
// import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Materia Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{ display: "none" }}>Header</header>
      <main>{children}</main>
      <footer>
        <div className={styles.gridContainer}>
          <div className={styles.contactSection}>
            <div className={styles.contactLogo}>
              {/*<Image*/}
              {/*  src="me.png"*/}
              {/*  alt="Picture of the author"*/}
              {/*  width={50}*/}
              {/*  height={50}*/}
              {/*/>*/}
            </div>
            <div className={styles.contactContainer}></div>
          </div>
          <div className={styles.navigationSection}>
            <div className={styles.navigationHeader}></div>
            <div className={styles.navigationLinks}></div>
          </div>
          <div className={styles.socialsSection}>
            <div className={styles.socialsHeader}></div>
            <a href="" className={styles.socialsLink}>
              {/*<Image*/}
              {/*  src="me.png"*/}
              {/*  alt="Picture of the author"*/}
              {/*  width={50}*/}
              {/*  height={50}*/}
              {/*/>*/}
            </a>
            <a href="" className={styles.socialsLink}>
              {/*<Image*/}
              {/*  src="me.png"*/}
              {/*  alt="Picture of the author"*/}
              {/*  width={50}*/}
              {/*  height={50}*/}
              {/*/>*/}
            </a>
            <a href="" className={styles.socialsLink}>
              {/*<Image*/}
              {/*  src="me.png"*/}
              {/*  alt="Picture of the author"*/}
              {/*  width={50}*/}
              {/*  height={50}*/}
              {/*/>*/}
            </a>
            <a href="" className={styles.socialsLink}>
              {/*<Image*/}
              {/*  src="me.png"*/}
              {/*  alt="Picture of the author"*/}
              {/*  width={50}*/}
              {/*  height={50}*/}
              {/*/>*/}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};
