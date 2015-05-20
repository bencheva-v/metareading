/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questionnaire', { 
    idQuestionnaire: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Question: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EventType_idEventType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
