/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mentor', { 
    idMentor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Field: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
