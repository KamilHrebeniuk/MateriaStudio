import styles from "../../../styles/pages/portfolio/projectsSection.module.css";
import ExpandableTilesRow from "../../elements/expandableTilesRow";
import StandardHeader from "../../elements/standardHeader";
import { useEffect, useState } from "react";
import __ from "/utils/lang/translate";
import { useRouter } from "next/router";
import { useLocalStorage } from "/hooks/useLocalStorage";
import { TYPE_MOBILE } from "/utils/consts/windowSize";
import useWindowType from "../../../hooks/useWindowType";

export default function ProjectsSection() {
  const lang = "PL";

  // eslint-disable-next-line
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  const [isLoaded, setIsLoaded] = useState(false);
  const [filters, setFilters] = useLocalStorage("filters", []);
  const [projects, setProjects] = useLocalStorage("projects", []);
  // eslint-disable-next-line
  const [projectsLoaded, setProjectsLoaded] = useState();
  const [projectsList, setProjectsList] = useState();
  const router = useRouter();

  const parsedProjects = [];
  const tmpProjectList = [];
  const type = useWindowType();

  useEffect(() => {
    fetch("//materiastudio.design/api/get_tags.php")
      .then((res) => res.json())
      .then(
        (result) => {
          setFilters(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    fetch("//materiastudio.design/api/get_projects.php")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProjects(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    const filterID = filters.filter((filter) => {
      return filter?.Link === router.query["filter"];
    })[0]?.ID;

    if (projects.length > 0) {
      projects.forEach((project) => {
        // eslint-disable-next-line
        let { Tags, NamePL, NameEN, DescriptionPL, DescriptionEN, ...rest } =
          project;

        if (project && project.Tags) {
          rest.Name = lang === "EN" ? project.NameEN : project.NamePL;
          rest.Description =
            lang === "EN" ? project.DescriptionEN : project.DescriptionPL;
          rest.Tags = project.Tags.split(";").map((tagID) => {
            return parseInt(tagID, 10);
          });
        }

        if (!router.query["filter"] || rest.Tags.includes(filterID))
          parsedProjects.push(rest);
      });

      setProjectsLoaded(true);
    }

    console.log(parsedProjects);

    const amountInRow = type === TYPE_MOBILE ? 2 : 3;

    for (let i = 0; i < parsedProjects.length; i += amountInRow) {
      const projects = [];
      for (let j = 0; j < amountInRow; j++) {
        if (parsedProjects[i + j]) {
          projects.push(parsedProjects[i + j]);
        }
      }

      tmpProjectList.push(<ExpandableTilesRow projects={projects} key={i} />);
    }
    setProjectsList(tmpProjectList);
  }, [projects, router.query, type]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StandardHeader
          subTitle={"pages.portfolio.projectSection.subTitle"}
          title={"pages.portfolio.projectSection.title"}
          description={"pages.portfolio.projectSection.description"}
          margins
        />
        <div className={styles.filtersContainer}>
          <div
            className={styles.filter}
            onClick={() =>
              router.push("/portfolio", undefined, { shallow: true })
            }
          >
            {__("pages.portfolio.projectSection.allFilters")}
          </div>
          {filters.map((item, i) => {
            return (
              <div
                className={styles.filter}
                key={i}
                onClick={() =>
                  router.push("/portfolio?filter=" + item.Link, undefined, {
                    shallow: true,
                  })
                }
              >
                {item.NamePL}
              </div>
            );
          })}
        </div>

        {projectsList}
      </div>
    </div>
  );
}
