'use strict';
module.exports = function(sequelize, DataTypes) {
  var newbornfoodlog = sequelize.define('newbornfoodlog', {
    diaperchange: DataTypes.STRING,
    sleep: DataTypes.TIME,
    bottle: DataTypes.INTEGER,
    breastfed: DataTypes.TIME,
    notes: DataTypes.TEXT,
    userId: DataTypes.STRING
  });

  newbornfoodlog.associate = (models) => {
    newbornfoodlog.belongsTo(models.AuthOUserId)
  }

  return newbornfoodlog;
};