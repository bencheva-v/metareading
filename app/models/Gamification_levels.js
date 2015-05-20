/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Gamification_Level = sequelize.define('Gamification_Level', {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    required_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    associate: function(models){
      Gamification_Level.hasMany(models.User);
    }
  });

  return Gamification_Level;
};
