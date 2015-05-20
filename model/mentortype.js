/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mentortype', { 
    idMentorType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
