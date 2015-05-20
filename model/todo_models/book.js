/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book', { 
    idBook: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
