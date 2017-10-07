'use strict';
module.exports = function(sequelize, DataTypes) {
  var Images = sequelize.define('Images', {
    images: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Images;
};