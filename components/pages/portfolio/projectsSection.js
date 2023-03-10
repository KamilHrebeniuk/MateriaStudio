import styles from "../../../styles/pages/portfolio/projectsSection.module.css";
import ExpandableTilesRow from "../../elements/expandableTilesRow";
import StandardHeader from "../../elements/standardHeader";
import { useEffect, useState } from "react";
import __ from "/utils/lang/translate";
import { useRouter } from "next/router";
import { useLocalStorage } from "/hooks/useLocalStorage";

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

  useEffect(() => {
    // console.log(filters);
    // console.log(projects);
    fetch("http://qfgcdwu.cluster027.hosting.ovh.net/api/get_tags.php")
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

    fetch("http://qfgcdwu.cluster027.hosting.ovh.net/api/get_projects.php")
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

  // console.log(error, isLoaded, projects);
  //
  // console.log(router.query["filter"]);

  // console.log("filters", filters);
  // console.log("projects", projects);

  // console.log(router.query);

  const parsedProjects = [];
  const tmpProjectList = [];

  useEffect(() => {
    // console.log("reload");

    const filterID = filters.filter((filter) => {
      return filter?.Link === router.query["filter"];
    })[0]?.ID;

    // console.log(filterID);

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

      // console.log("parsedProjects", parsedProjects);
    }

    // console.log("start");
    // console.log("Len:", parsedProjects.length);
    for (let i = 0; i < parsedProjects.length; i += 3) {
      // console.log("I:", i);
      // console.log("ProjI:", parsedProjects[i]);
      const projects = [];
      for (let j = 0; j < 3; j++) {
        if (parsedProjects[i + j]) {
          projects.push(parsedProjects[i + j]);
        }
      }

      tmpProjectList.push(<ExpandableTilesRow projects={projects} />);
      setProjectsList(tmpProjectList);
    }

    // console.log("projectList", projectsList);
  }, [router.query]);

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
          {filters.map((item) => {
            return (
              <div
                className={styles.filter}
                key={item.ID}
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

        {/*<div className={styles.contentRow}>*/}
        {/*  <Link className={styles.tileContainer} href={"#"}>*/}
        {/*    <Image src={portfolio1} alt={"#"} />*/}
        {/*  </Link>*/}
        {/*  <Link className={styles.tileContainer} href={"#"}>*/}
        {/*    <Image src={portfolio2} alt={"#"} />*/}
        {/*  </Link>*/}
        {/*  <Link className={styles.tileContainer} href={"#"}>*/}
        {/*    <Image src={portfolio3} alt={"#"} />*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
