import executeQuery from "../../../lib/db";

export default async (req, res) => {
  console.log("ehhh");
  console.log(res);
  try {
    console.log("req nom", req.body);

    // const result = await executeQuery({
    //     query: 'INSERT INTO `materiastudio`.`projects` (`ProjectNamePL`, `ProjectNameEN`, `ProjectDescriptionPL`, `ProjectDescriptionEN`, `ImageID`) VALUES (\'test2\', \'test2\', \'test2\', \'test2\', \'test2\');',
    //     values: [req.body.content],
    // });

    const result = await executeQuery({
      query: "SELECT * FROM materiastudio.projects;",
      values: [req.body.content],
    });

    console.log("res", res.statusCode);
    console.log("ttt", result);
  } catch (error) {
    console.log(error);
  }
};
