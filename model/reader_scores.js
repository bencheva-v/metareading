/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reader_scores', { 
    idScore: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Reader_reader_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PossibleAnswers_idPossibleAnswers: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
