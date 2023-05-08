import __ from "/utils/lang/translate";
import PropTypes from "prop-types";
import styles from "/styles/components/elements/formInputText.module.css";

export default function FormInputText({
  elementName,
  labelId,
  placeholderId,
  isRequired,
}) {
  return (
    <div className={styles.elementContainer}>
      <label htmlFor={elementName} className={styles.label}>
        {(isRequired && "*") + " " + __(labelId)}
      </label>
      <input
        type="text"
        name={elementName}
        placeholder={__(placeholderId)}
        className={styles.input}
      />
    </div>
  );
}

FormInputText.propTypes = {
  elementName: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  placeholderId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
};
