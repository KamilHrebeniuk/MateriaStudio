import __ from "/utils/lang/translate";
import PropTypes from "prop-types";
import styles from "/styles/components/elements/formInputSelect.module.css";
import arrow from "../../public/components/elements/formInputSelect/icons/arrowPurple.svg";
import Image from "next/image";
import { useState } from "react";

export default function FormInputSelect({
  elementName,
  labelId,
  placeholderId,
  optionsIds,
  isRequired,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const optionsStyle = isOpen
    ? `${styles.optionsContainer} ${styles.optionsContainerOpen}`
    : `${styles.optionsContainer} ${styles.optionsContainerClosed}`;
  const optionsMaxHeight = isOpen ? optionsIds.length * 30 + 35 : 0;
  const arrowStyle = isOpen
    ? `${styles.inputImage} ${styles.inputImageOpen}`
    : `${styles.inputImage} ${styles.inputImageClosed}`;

  const translatedOptions = [];
  optionsIds.forEach((optionId) => translatedOptions.push(__(optionId)));
  console.log(value);

  return (
    <div className={styles.elementContainer}>
      <label htmlFor={elementName} className={styles.label}>
        {(isRequired && "*") + " " + __(labelId)}
      </label>
      <div className={styles.inputContainer} onClick={() => setIsOpen(!isOpen)}>
        <input
          type="text"
          name={elementName}
          placeholder={__(placeholderId)}
          className={styles.input}
          value={value}
          readOnly={true}
        />
        <Image src={arrow} alt={"#"} className={arrowStyle} />
      </div>

      <div className={optionsStyle} style={{ maxHeight: optionsMaxHeight }}>
        {translatedOptions?.map((translation, i) => {
          return (
            <span
              key={i}
              className={styles.optionsOption}
              onClick={() => {
                setValue(translation);
                setIsOpen(false);
              }}
            >
              {translation}
            </span>
          );
        })}
      </div>
    </div>
  );
}

FormInputSelect.propTypes = {
  elementName: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  placeholderId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  optionsIds: PropTypes.array,
};
