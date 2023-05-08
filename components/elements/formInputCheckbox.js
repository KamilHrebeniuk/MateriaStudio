import __ from "/utils/lang/translate";
import PropTypes from "prop-types";
import styles from "/styles/components/elements/formInputCheckbox.module.css";
import Image from "next/image";
import Checkmark from "../../public/components/elements/formInputSelect/icons/checkmark.svg";

export default function FormInputCheckbox({
  elementName,
  labelId,
  isRequired,
}) {
  return (
    <div className={styles.elementContainer}>
      <label htmlFor={elementName} className={styles.labelContainer}>
        <span className={styles.labelText}>
          {" "}
          {(isRequired && "*") + " " + __(labelId)}
        </span>
        <input
          type="checkbox"
          name={elementName}
          className={styles.input}
          id={elementName}
        />
        <span className={styles.checkbox}>
          <Image className={styles.checkboxIcon} src={Checkmark} alt={"#"} />
        </span>
      </label>
    </div>
  );
}

FormInputCheckbox.propTypes = {
  elementName: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
};
