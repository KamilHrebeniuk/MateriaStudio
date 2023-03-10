import styles from "../../styles/pages/portfolio/projectsSection.module.css";
import Image from "next/image";
import portfolio1 from "../../public/pages/portfolio/portfolio1.png";
import arrow from "../../public/pages/portfolio/icons/arrow.svg";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function ExpandableTilesRow({ projects }) {
  const [description, setDescription] = useState("");
  const [descriptionOpened, setDescriptionOpened] = useState(false);
  const router = useRouter();

  console.log("Projects", projects);

  // console.log("P1", project1);
  // console.log("P2", !!project2);
  // console.log("P3", !!project3);

  // useEffect(() => {
  //   // let data={content : value}
  //   axios
  //     .post("/api/get-projects")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  //   // console.log(value)
  // }, []);

  console.log(router);

  useEffect(() => {
    setDescription("");
    setDescriptionOpened(false);
  }, [router.query["filter"]]);

  return (
    <div className={styles.contentRow}>
      {projects.map((project) => {
        return (
          <div
            className={styles.tileContainer}
            key={project.ID}
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
        {description}
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
