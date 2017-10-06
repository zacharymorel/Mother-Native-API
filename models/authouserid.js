'use strict';
module.exports = function(sequelize, DataTypes) {
  var AuthOUserId = sequelize.define('AuthOUserId', {
    userId: DataTypes.STRING
  },{
    classMethods:{
      associate:function(models){
        AuthOUserId.hasMany(models.BabyTable)
      }
    }
  })
  
  // AuthOUserId.associate = (models) => {
  //     AuthOUserId.hasMany(models.BabyTable)
  //     AuthOUserId.hasMany(models.contractionTimerTable)
  //     AuthOUserId.hasMany(models.newbornfoodlog)
  //     AuthOUserId.hasMany(models.momlog)
  //     };

  return AuthOUserId;
};