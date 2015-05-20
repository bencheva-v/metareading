/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('q&a', { 
    idQ&A: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Mission_idMission: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
