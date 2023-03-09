import styles from "../../styles/components/elements/standardPageHeader.module.css";
import background from "../../public/pages/home/homeBG.jpeg";
import __ from "../../utils/lang/translate";
import Image from "next/image";
import PropTypes from "prop-types";

export default function StandardPageHeader({ textId, descriptionId, height }) {
  return (
    <div className={styles.container} style={{ height: height }}>
      <Image className={styles.background} src={background} alt={"#"} />
      <div className={styles.content}>
        <span className={styles.titleShadow}>{__(textId)}</span>
        <h1 className={styles.title}>{__(textId)}</h1>
        {descriptionId && (
          <span
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: __(descriptionId),
            }}
          />
        )}
      </div>
    </div>
  );
}

StandardPageHeader.defaultProps = {
  descriptionId: "",
  height: "314px",
};

StandardPageHeader.propTypes = {
  textId: PropTypes.string.isRequired,
  descriptionId: PropTypes.string,
  height: PropTypes.string,
};
