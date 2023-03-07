import { Student } from "models";

async function GET(req, res) {
  // const { id } = req.query;

  //get all
  const students = await Student.findAll();

  res.status(200).json({
    status: "success",
    data: students,
  });
}

async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Only GET method are allowed" });
    return;
  }

  if (req.method == "GET") return GET(req, res);
}

export default handler;
