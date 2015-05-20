/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('readerchild', { 
    idReaderChild: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Reader_reader_id: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
