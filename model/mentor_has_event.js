/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mentor_has_event', { 
    Mentor_idMentor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Event_idEvent: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
