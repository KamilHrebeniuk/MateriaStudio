import PropTypes from "prop-types";
import Head from "next/head";
import FooterSection from "./universal/footerSection";
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
      <FooterSection />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};
