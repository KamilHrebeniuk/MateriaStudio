import __ from "../../utils/lang/translate";
import PropTypes from "prop-types";
import styles from "/styles/components/elements/standardHeader.module.css";

export default function StandardHeader({
  subTitle,
  title,
  description,
  margins,
}) {
  return (
    <div className={margins && styles.container}>
      <h3 className={styles.subTitle}>{__(subTitle)}</h3>
      <h2 className={styles.title}>{__(title)}</h2>
      <span className={styles.description}>{__(description)}</span>
    </div>
  );
}

StandardHeader.defaultProps = {
  description: "",
  margins: false,
};

StandardHeader.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  margins: PropTypes.bool,
};
