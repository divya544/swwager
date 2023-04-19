'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubQualification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubQualification.init({
    qualification_code: DataTypes.STRING,
    qualification_value: DataTypes.JSONB,
    is_Active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SubQualification',
  });
  return SubQualification;
};