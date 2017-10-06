'use strict';
module.exports = function(sequelize, DataTypes) {
  var contractionTimerTable = sequelize.define('contractionTimerTable', {
    clocktimerstampstart: DataTypes.TIME,
    clocktimerstampstop: DataTypes.TIME,
    userId: DataTypes.STRING
  });

  contractionTimerTable.associate = (models) => {
    contractionTimerTable.belongsTo(models.AuthOUserId)
  }

  return contractionTimerTable;
};