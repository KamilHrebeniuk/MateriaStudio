import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import Mail_icon from "/public/pages/universal/icons/Mail.svg";
import styles from "/styles/components/elements/contactButton.module.css";
import __ from "/utils/lang/translate";

export default function ContactButton({ textId, url }) {
  return (
    <Link className={styles.container} href={url}>
      <Image className={styles.icon} src={Mail_icon} alt={"#"} />
      <span className={styles.text}>{__(textId)}</span>
    </Link>
  );
}

ContactButton.propTypes = {
  textId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
