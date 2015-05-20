/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var User_Child = sequelize.define('User_Child', {
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Age: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    associate: function(models){
      User_Child.belongsTo(models.User);
    }
  }
);
  return User_Child;
};
