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


  return newbornfoodlog;
};