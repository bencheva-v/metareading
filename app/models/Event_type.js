/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Event_type = sequelize.define('Event_type', {
    EventName: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  return Event_type;
};
