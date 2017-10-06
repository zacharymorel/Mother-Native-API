'use strict';
module.exports = function(sequelize, DataTypes) {
  var AuthOUserId = sequelize.define('AuthOUserId', {
    userId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return AuthOUserId;
};