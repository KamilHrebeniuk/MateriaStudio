import __ from "../../utils/lang/translate";
import PropTypes from "prop-types";
import styles from "/styles/components/elements/flippingTile.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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

  const graphicsVariant = () => {
    switch (state) {
      case 0:
        return (
          <Link href={url} className={styles.graphicsLink}>
            <Image
              className={styles.graphic}
              src={srcPurple}
              alt={__(textPurple)}
            />
            <span className={styles.graphicsDescription}>{__(textPurple)}</span>
          </Link>
        );
      case 1:
        return (
          <Link
            href={url}
            className={`${styles.graphicsLink} ${styles.graphicsLinkHover}`}
          >
            <Image
              className={styles.graphic}
              src={srcPurple}
              alt={__(textPurple)}
            />
            <span className={styles.graphicsDescription}>{__(textPurple)}</span>
          </Link>
        );
      case 2:
        return (
          <Link
            href={url}
            className={`${styles.graphicsLink} ${styles.graphicsLinkNew}`}
          >
            <Image
              className={styles.graphicNew}
              src={srcWhite}
              alt={__(textWhite)}
            />
            <span className={styles.graphicsDescriptionNew}>
              {__(textWhite)}
            </span>
          </Link>
        );
      case 3:
        return (
          <Link
            href={url}
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
          </Link>
        );
    }
  };

  return (
    <div
      className={styles.graphicsLinkContainer}
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeaves()}
    >
      {graphicsVariant()}
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
