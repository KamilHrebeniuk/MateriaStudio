import styles from "../../styles/pages/portfolio/projectsSection.module.css";
import Image from "next/image";
import portfolio1 from "../../public/pages/portfolio/portfolio1.png";
import arrow from "../../public/pages/portfolio/icons/arrow.svg";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

export default function ExpandableTilesRow({ projects }) {
  const [description, setDescription] = useState("");
  const [descriptionOpened, setDescriptionOpened] = useState(false);
  const router = useRouter();
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  useEffect(() => {
    setDescription("");
    setDescriptionOpened(false);
  }, [router.query["filter"]]);

  return (
    <div className={styles.contentRow}>
      {projects.map((project, i) => {
        return (
          <div
            className={styles.tileContainer}
            key={i}
            onClick={() => {
              if (descriptionOpened) {
                setDescriptionOpened(false);
              } else {
                setDescriptionOpened(true);
                setDescription(project.Description);
              }

              let path = router.pathname;
              if (router.query["filter"]) {
                path += "?filter=" + router.query["filter"];
                path += "&project=" + project.ID;
              } else {
                path += "?project=" + project.ID;
              }

              router.push(path, undefined, { shallow: true });
            }}
          >
            <Image src={portfolio1} alt={"#"} className={styles.imageImage} />
            <div className={styles.imageCover}>
              <span className={styles.imageText}>{project.Name}</span>
              <span className={styles.imageArrowContainer}>
                <Image src={arrow} alt={"#"} />
              </span>
            </div>
          </div>
        );
      })}
      <div
        className={
          descriptionOpened
            ? `${styles.descriptionContainer} ${styles.descriptionContainerOpened}`
            : `${styles.descriptionContainer} ${styles.descriptionContainerClosed}`
        }
      >
        <ReactQuill value={description} readOnly={true} theme={"bubble"} />
      </div>
    </div>
  );
}

ExpandableTilesRow.defaultProps = {
  projects: [],
};

ExpandableTilesRow.propTypes = {
  projects: PropTypes.array,
};
