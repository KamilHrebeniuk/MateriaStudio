import styles from "../../styles/pages/portfolio/projectsSection.module.css";
import Image from "next/image";
import arrow from "../../public/pages/portfolio/icons/arrow.svg";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import __ from "../../utils/lang/translate";
import url from "/utils/routing/url";

export default function ExpandableTilesRow({ projects }) {
  const [description, setDescription] = useState("");
  const [descriptionOpened, setDescriptionOpened] = useState(-1);
  const router = useRouter();

  useEffect(() => {
    setDescription("");
    setDescriptionOpened(-1);
  }, [router.query["filter"]]);

  return (
    <div className={styles.contentRow}>
      {projects.map((project, i) => {
        return (
          <div
            className={styles.tileContainer}
            key={i}
            onClick={() => {
              if (descriptionOpened === i) {
                setDescriptionOpened(-1);
              } else {
                setDescriptionOpened(i);
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
            <img
              src={url.baseURL + "/images/" + project.ImageID}
              alt={"#"}
              className={styles.imageImage}
            />
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
          descriptionOpened !== -1
            ? `${styles.descriptionContainer} ${styles.descriptionContainerOpened}`
            : `${styles.descriptionContainer} ${styles.descriptionContainerClosed}`
        }
      >
        <span
          dangerouslySetInnerHTML={{
            __html: __(description),
          }}
        ></span>
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
