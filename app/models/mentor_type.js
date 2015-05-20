/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mentortype', { 
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
