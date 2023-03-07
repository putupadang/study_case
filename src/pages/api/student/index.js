import { Student } from "models";
import { Op } from "sequelize";

async function GET(req, res) {
  const { name, address } = req.query;

  const students = await Student.findAll({
    where: {
      ...(name && {
        name: {
          [Op.like]: `%${name}%`,
        },
      }),
      ...(address && {
        address: {
          [Op.like]: `%${address}%`,
        },
      }),
    },
  });

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
