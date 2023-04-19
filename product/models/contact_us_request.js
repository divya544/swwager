'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact_us_request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contact_us_request.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING,
    subject: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contact_us_request',
  });
  return contact_us_request;
};