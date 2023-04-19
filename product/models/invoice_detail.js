'use strict'
const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class invoice_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  invoice_detail.init({
    invoice_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER, // references: { //   model: 'products', //   key: 'product_id' // }
    quantity: DataTypes.INTEGER,
    rate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'invoice_details'
  })
  return invoice_detail
}
