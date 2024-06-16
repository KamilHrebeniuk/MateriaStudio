import PropTypes from "prop-types";
import Head from "next/head";
import FooterSection from "./universal/footerSection";
import MenuSection from "./universal/menuSection";
import keepAlive from "/utils/auth/keepAlive";
import { useContext, useEffect } from "react";
import AppContext from "/context/AppContext";
import styles from "/styles/pages/universal/layout.module.css";

export default function Layout({ children }) {
  const context = useContext(AppContext);
  keepAlive(context.token, context.setToken);
  const mainStyle = context.changing
    ? `${styles.layout} ${styles.layoutChanging}`
    : `${styles.layout} ${styles.layoutStatic}`;

  useEffect(() => {
    context.setChanging(false);
  }, []);

  return (
    <>
      <Head>
        <title>Materia Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <MenuSection />
      <main className={mainStyle}>{children}</main>
      <FooterSection />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};
