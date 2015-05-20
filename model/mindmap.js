/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mindmap', { 
    idMindMap: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Mission_idMission: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
