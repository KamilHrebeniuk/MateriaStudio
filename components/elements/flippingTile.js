import __ from "../../utils/lang/translate";
import PropTypes from "prop-types";
import styles from "/styles/components/elements/flippingTile.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import delayedClick from "/utils/routing/delayRedirect";
import { useContext } from "react";
import AppContext from "/context/AppContext";
import { useRouter } from "next/router";

export default function FlippingTile({
  url,
  srcPurple,
  srcWhite,
  textPurple,
  textWhite,
}) {
  const [state, setState] = useState(0);

  const mouseEnter = () => {
    setState(1);
    setTimeout(() => {
      setState(2);
    }, 500);
  };

  const mouseLeaves = () => {
    setState(3);
    setTimeout(() => {
      setState(0);
    }, 500);
  };

  const context = useContext(AppContext);
  const router = useRouter();

  const graphicsVariant = () => {
    switch (state) {
      case 0:
        return (
          <div className={styles.graphicsLink}>
            <Image
              className={styles.graphic}
              src={srcPurple}
              alt={__(textPurple)}
            />
            <span className={styles.graphicsDescription}>{__(textPurple)}</span>
          </div>
        );
      case 1:
        return (
          <div className={`${styles.graphicsLink} ${styles.graphicsLinkHover}`}>
            <Image
              className={styles.graphic}
              src={srcPurple}
              alt={__(textPurple)}
            />
            <span className={styles.graphicsDescription}>{__(textPurple)}</span>
          </div>
        );
      case 2:
        return (
          <div className={`${styles.graphicsLink} ${styles.graphicsLinkNew}`}>
            <Image
              className={styles.graphicNew}
              src={srcWhite}
              alt={__(textWhite)}
            />
            <span className={styles.graphicsDescriptionNew}>
              {__(textWhite)}
            </span>
          </div>
        );
      case 3:
        return (
          <div
            className={`${styles.graphicsLink} ${styles.graphicsLinkNewHover}`}
          >
            <Image
              className={styles.graphicNew}
              src={srcWhite}
              alt={__(textWhite)}
            />
            <span className={styles.graphicsDescriptionNew}>
              {__(textWhite)}
            </span>
          </div>
        );
    }
  };

  return (
    <div
      className={styles.graphicsLinkContainer}
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeaves()}
    >
      <Link
        href={url}
        onClick={(event) => {
          delayedClick(context, router, event);
        }}
      >
        <div className={styles.graphicsPointerEventsBlocker}>
          {graphicsVariant()}
        </div>
      </Link>
    </div>
  );
}

FlippingTile.defaultProps = {
  url: "#",
};

FlippingTile.propTypes = {
  url: PropTypes.string,
  srcPurple: PropTypes.object.isRequired,
  srcWhite: PropTypes.object.isRequired,
  textPurple: PropTypes.string.isRequired,
  textWhite: PropTypes.string.isRequired,
};
