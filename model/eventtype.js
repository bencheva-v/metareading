/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventtype', { 
    idEventType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    EventName: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
