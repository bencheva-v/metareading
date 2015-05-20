/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventtype', { 
    EventName: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
