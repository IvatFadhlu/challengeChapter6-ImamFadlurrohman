"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class signup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  signup.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "signup",
      tableName: "signup",
      updatedAt: false,
      underscored: true,
    }
  );
  return signup;
};
