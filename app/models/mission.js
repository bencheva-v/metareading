/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mission', { 
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
