/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('possibleanswers', { 
    idPossibleAnswers: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Questionnaire_idQuestionnaire: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Answer: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
