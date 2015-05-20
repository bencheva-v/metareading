/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gamification_points', { 
    idGamification_Points: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    from: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Event: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
