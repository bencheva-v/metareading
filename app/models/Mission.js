/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Mission = sequelize.define('Mission', { 
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
  return Mission;
};
