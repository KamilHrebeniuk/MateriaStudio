import executeQuery from "/lib/db";

export default async (req, res) => {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM materiastudio.projects;",
      values: [req.body.content],
    });

    res.status(200).send({ result });
  } catch (error) {
    console.log(error);
  }
};
