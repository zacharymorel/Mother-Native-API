'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('contractionTimerTables', 'clocktimerstampstart', 'duration')
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('contractionTimerTables', 'duration', 'clocktimerstampstart')
    
  }
};
