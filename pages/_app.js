import "react-quill/dist/quill.snow.css";
import "../styles/typekit.css";
import "../styles/globals.css";
import "../styles/variables.css";
import PropTypes from "prop-types";
import AppContext from "/context/AppContext";
import { useState } from "react";
import HttpsRedirect from "react-https-redirect";

export default function App({ Component, pageProps }) {
  const [token, setToken] = useState("Initial");
  const [cookies, setCookies] = useState(undefined);

  return (
    <HttpsRedirect>
      <AppContext.Provider
        value={{
          token: token,
          setToken: setToken,
          cookies: cookies,
          setCookies: setCookies,
        }}
      >
        <Component {...pageProps} dir="ltr" />
      </AppContext.Provider>
    </HttpsRedirect>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};
