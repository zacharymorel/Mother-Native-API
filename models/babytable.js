'use strict';

module.exports = function(sequelize, DataTypes) {
  var BabyTable = sequelize.define('BabyTable', {
    name: DataTypes.STRING,
    duedate: DataTypes.DATE,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    // userId: DataTypes.STRING
              // ^^^^^^
  },{
    classMethods:{
      associate:function(models){
        BabyTable.belongsTo(models.AuthOUserId, {
          foreignKey:'userId',
          onDelete: 'CASCADE'
      });
      }
    }
  });

  return BabyTable;
};