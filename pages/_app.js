import "react-quill/dist/quill.snow.css";
import "../styles/typekit.css";
import "../styles/globals.css";
import "../styles/variables.css";
import PropTypes from "prop-types";
import AppContext from "/context/AppContext";
import { useState } from "react";
import HttpsRedirect from "react-https-redirect";
import Layout from "/components/pages/layout";

export default function App({ Component, pageProps }) {
  const [token, setToken] = useState("Initial");
  const [changing, setChanging] = useState(true);
  const [cookies, setCookies] = useState(undefined);

  return (
    <HttpsRedirect>
      <AppContext.Provider
        value={{
          token: token,
          setToken: setToken,
          changing: changing,
          setChanging: setChanging,
          cookies: cookies,
          setCookies: setCookies,
        }}
      >
        <Layout>
          <Component {...pageProps} dir="ltr" />
        </Layout>
      </AppContext.Provider>
    </HttpsRedirect>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};
