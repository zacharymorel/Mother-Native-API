'use strict';
module.exports = function(sequelize, DataTypes) {
  var contractionTimerTable = sequelize.define('contractionTimerTable', {
    duration: DataTypes.TIME,
    clocktimerstampstop: DataTypes.TIME,
    userId: DataTypes.STRING
  });

  return contractionTimerTable;
};