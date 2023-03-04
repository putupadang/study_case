import sequelize from "../config";
import { DataTypes, Model } from "sequelize";

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: DataTypes.INTEGER,
    text: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "comments",
  }
);

export default Comments;
