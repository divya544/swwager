'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_all_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  master_all_data.init({
    name: DataTypes.STRING,
    value: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'master_all_data',
  });
  return master_all_data;
};