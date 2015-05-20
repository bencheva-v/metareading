/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var User_Company = sequelize.define('User_Company', {
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EmployeeNum: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    associate: function(models){
      User_Company.belongsTo(models.User);
    }
  }
);
  return User_Company;
};
