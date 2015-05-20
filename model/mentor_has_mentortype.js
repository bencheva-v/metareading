/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mentor_has_mentortype', { 
    Mentor_idMentor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    MentorType_idMentorType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
