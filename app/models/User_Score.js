/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var User_Score = sequelize.define('User_Score', {
    timestamp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PossibleAnswers_idPossibleAnswers: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  },
  {
    associate: function(models){
      User_Score.belongsTo(models.User);
    }
  }
);
  return User_Score;
};
