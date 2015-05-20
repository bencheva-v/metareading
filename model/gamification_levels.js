/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gamification_levels', { 
    idGamification_Levels: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Points: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
