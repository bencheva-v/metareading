/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('readercompany', { 
    idReaderCompany: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EmployeeNum: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
