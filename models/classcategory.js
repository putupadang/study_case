"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class classCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  classCategory.init(
    {
      className: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "classCategory",
    }
  );
  return classCategory;
};
