/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book_has_reader', { 
    Book_idBook: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Reader_reader_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Mission_idMission: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
