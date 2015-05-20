/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var User_Events = sequelize.define('User_Events', {
    PricePaid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    docSigned: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return User_Events;
};

module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EventType_idEventType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DateFrom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DateTo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Venue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Schedule: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Hour: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    associate: function(models) {
      Event.hasMany(models.User, {through: 'User_Events'});
    }
  });

  return Event;
};
