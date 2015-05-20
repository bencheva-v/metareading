/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', { 
    idPosts: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    TItle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minLevel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Author: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
