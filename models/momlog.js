'use strict';
module.exports = function(sequelize, DataTypes) {
  var momlog = sequelize.define('momlog', {
    log: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return momlog;
};