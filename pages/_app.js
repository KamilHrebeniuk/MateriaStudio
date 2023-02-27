import "react-quill/dist/quill.snow.css";
import "../styles/typekit.css";
import "../styles/globals.css";
import "../styles/variables.css";
import PropTypes from "prop-types";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} dir="ltr" />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};
