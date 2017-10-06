'use strict';
module.exports = function(sequelize, DataTypes) {
  var BabyTable = sequelize.define('BabyTable', {
    name: DataTypes.STRING,
    duedate: DataTypes.DATE,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BabyTable;
};