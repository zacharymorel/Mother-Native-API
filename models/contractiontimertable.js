'use strict';
module.exports = function(sequelize, DataTypes) {
  var contractionTimerTable = sequelize.define('contractionTimerTable', {
    duration: DataTypes.INTEGER,
    clocktimerstampstop: DataTypes.DATE,
    userId: DataTypes.STRING
  });

  return contractionTimerTable;
};