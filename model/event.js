/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event', { 
    idEvent: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EventType_idEventType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    DateFrom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DateTo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Schedule: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Hour: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Eventcol: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
