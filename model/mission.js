/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mission', { 
    idMission: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Mission: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AccomplishmentCriteria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BenefitCriteria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Inspiration: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
