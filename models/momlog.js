'use strict';
module.exports = function(sequelize, DataTypes) {
  var momlog = sequelize.define('momlog', {
    log: DataTypes.TEXT,
    userId: DataTypes.STRING
  })

  momlog.associate = (models) => {
    momlog.belongsTo(models.AuthOUserId)
  }
  
  return momlog;
};