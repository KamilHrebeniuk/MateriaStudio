import __ from "/utils/lang/translate";
import PropTypes from "prop-types";
import styles from "/styles/components/elements/formInputCheckbox.module.css";
import Image from "next/image";
import Checkmark from "/public/components/elements/formInputSelect/icons/checkmark.svg";

export default function FormInputCheckbox({
  elementName,
  labelId,
  isRequired,
  children,
  eventHandler,
}) {
  return (
    <div className={styles.elementContainer}>
      <label htmlFor={elementName} className={styles.labelContainer}>
        <span className={styles.labelText}>
          {" "}
          {(isRequired && "*") + " "}
          {children?.props?.children?.length > 0 ? children : __(labelId)}
        </span>
        <input
          type="checkbox"
          name={elementName}
          className={styles.input}
          id={elementName}
          required={isRequired}
          onChange={(e) => eventHandler(e.target.value)}
        />
        <span className={styles.checkbox}>
          <Image
            className={styles.checkboxIcon}
            src={Checkmark}
            alt={__(labelId)}
          />
        </span>
      </label>
    </div>
  );
}

FormInputCheckbox.defaultProps = {
  children: <></>,
};

FormInputCheckbox.propTypes = {
  elementName: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  children: PropTypes.element,
  eventHandler: PropTypes.func.isRequired,
};
