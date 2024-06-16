import __ from "../../utils/lang/translate";
import PropTypes from "prop-types";
import styles from "/styles/components/elements/button.module.css";
import Link from "next/link";
import delayedClick from "/utils/routing/delayRedirect";
import { useContext } from "react";
import AppContext from "/context/AppContext";
import { useRouter } from "next/router";

// eslint-disable-next-line
export default function Button({ textId, type, size, url, scroll, isSubmit }) {
  const context = useContext(AppContext);
  const router = useRouter();

  const myStyle = () => {
    switch (true) {
      case type === "purpleAccent" && size === "small":
        return `${styles.buttonBase} ${styles.smallPurpleAccent}`;
      case type === "purple" && size === "small":
        return `${styles.buttonBase} ${styles.smallPurple}`;
      case type === "white" && size === "small":
        return `${styles.buttonBase} ${styles.smallWhite}`;
      case type === "purpleAccent" && size === "middle":
        return `${styles.buttonBase} ${styles.middlePurpleAccent}`;
      case type === "purpleAccent" && size === "big":
        return `${styles.buttonBase} ${styles.bigPurpleAccent}`;
      case type === "purple" && size === "big":
        return `${styles.buttonBase} ${styles.bigPurple}`;
      case type === "white" && size === "big":
        return `${styles.buttonBase} ${styles.bigWhite}`;
    }
  };

  if (isSubmit) {
    return (
      <button className={myStyle()} type={"submit"}>
        {__(textId)}
      </button>
    );
  }

  if (scroll) {
    return (
      <Link className={myStyle()} href={url} scroll={scroll}>
        {__(textId)}
      </Link>
    );
  }

  return (
    <Link
      className={myStyle()}
      href={url}
      onClick={(event) => delayedClick(context, router, event)}
    >
      {__(textId)}
    </Link>
  );
}

Button.defaultProps = {
  type: "white",
  size: "big",
  scroll: false,
  isSubmit: false,
};

Button.propTypes = {
  textId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["purpleAccent", "purple", "white"]),
  size: PropTypes.oneOf(["small", "middle", "big"]),
  scroll: PropTypes.bool,
  isSubmit: PropTypes.bool,
};
