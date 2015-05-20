/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reader_has_gamification_points', { 
    Reader_reader_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Gamification_Points_idGamification_Points: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
