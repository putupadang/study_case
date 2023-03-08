import { Class, Student } from "models";
import { Op } from "sequelize";

async function GET(req, res) {
  const { className } = req.query;

  const classes = await Class.findAll({
    where: {
      ...(className && {
        className: {
          [Op.like]: `%${className}%`,
        },
      }),
    },
    include: [
      {
        model: Student,
        as: "students",
        attributes: ["id", "name", "gender", "address"],
        where: {
          name: "John Doe",
        },
      },
    ],
  });

  res.status(200).json({
    status: "success",
    data: classes,
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
