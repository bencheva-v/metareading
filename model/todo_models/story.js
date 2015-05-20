/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('story', { 
    idStory: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Storycol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Mission_idMission: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
