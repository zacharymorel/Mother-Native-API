'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProfileTable = sequelize.define('ProfileTable', {
    name: DataTypes.STRING,
    username: DataTypes.TEXT,
    passwordhash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProfileTable;
};