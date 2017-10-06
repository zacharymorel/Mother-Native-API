'use strict';

const User = require('./authouserid')

module.exports = function(sequelize, DataTypes) {
  var BabyTable = sequelize.define('BabyTable', {
    name: DataTypes.STRING,
    duedate: DataTypes.DATE,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    image: DataTypes.STRING
  });

  BabyTable.belongsTo(User)
  return BabyTable;
};