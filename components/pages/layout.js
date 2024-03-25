import PropTypes from "prop-types";
import Head from "next/head";
import FooterSection from "./universal/footerSection";
import MenuSection from "./universal/menuSection";
import keepAlive from "/utils/auth/keepAlive";
import { useContext } from "react";
import AppContext from "/context/AppContext";

export default function Layout({ children }) {
  const context = useContext(AppContext);
  keepAlive(context.token, context.setToken);

  return (
    <>
      <Head>
        <title>Materia Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <MenuSection />
      <main>{children}</main>
      <FooterSection />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};
