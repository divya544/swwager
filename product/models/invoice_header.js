'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoice_header extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  invoice_header.init({
    invoice_id: DataTypes.INTEGER,
    invoice_no: DataTypes.INTEGER,
    invoice_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'invoice_header',
  });
  return invoice_header;
};