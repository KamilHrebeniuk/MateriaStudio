import PropTypes from "prop-types";
import Head from "next/head";
import FooterSection from "./universal/footerSection";
import MenuSection from "./universal/menuSection";

export default function Layout({ children }) {
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
