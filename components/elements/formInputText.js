import __ from "/utils/lang/translate";
import PropTypes from "prop-types";
import styles from "/styles/components/elements/formInputText.module.css";

export default function FormInputText({
  elementName,
  labelId,
  placeholderId,
  isRequired,
  type,
  pattern,
  eventHandler,
}) {
  return (
    <div className={styles.elementContainer}>
      <label htmlFor={elementName} className={styles.label}>
        {(isRequired && "*") + " " + __(labelId)}
      </label>
      {pattern?.length > 0 ? (
        <input
          type={type}
          name={elementName}
          placeholder={__(placeholderId)}
          className={styles.input}
          required={isRequired}
          pattern={pattern}
          onChange={(e) => eventHandler(e.target.value)}
        />
      ) : (
        <input
          type={type}
          name={elementName}
          placeholder={__(placeholderId)}
          className={styles.input}
          required={isRequired}
          onChange={(e) => eventHandler(e.target.value)}
        />
      )}
    </div>
  );
}

FormInputText.defaultProps = {
  type: "text",
  pattern: "",
};

FormInputText.propTypes = {
  elementName: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  placeholderId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  type: PropTypes.string,
  pattern: PropTypes.string,
  eventHandler: PropTypes.func.isRequired,
};
