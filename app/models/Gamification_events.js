/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Gamification_Event = sequelize.define('Gamification_Event', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    associate: function(models){
      Gamification_Event.belongsTo(models.User);
    }
  });

  return Gamification_Event;
};
