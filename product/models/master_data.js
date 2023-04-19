'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  master_data.init({
    master_type: {
      type: DataTypes.ENUM,
      values: ["Result", "Admit Card", "Latest Job","Answer Key","Syllabus","Admission","Important","Previous Year Paper"],
    },
    name: DataTypes.STRING,
    important_date: DataTypes.JSONB,
    application_fee: DataTypes.JSONB,
    age_limit_details: DataTypes.JSONB,
    vacency_details: DataTypes.JSONB,
    how_to_fill_form: DataTypes.JSONB,
    links: DataTypes.JSONB,
    latest_headline:DataTypes.STRING,
    status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'master_data',
  });
  return master_data;
};