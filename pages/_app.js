import "../styles/typekit.css";
import "../styles/globals.css";
import "../styles/variables.css";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import pl from "/lang/pl.json";
import en from "/lang/en.json";

const messages = {
  pl,
  en,
};

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir="ltr" />
    </IntlProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};
