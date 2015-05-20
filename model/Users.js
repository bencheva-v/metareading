/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RefNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CourseCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BirthCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BirthDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BirthHour: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CoursePreference: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EGN: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Progress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Permission: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CVFilePath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebookUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    twitterUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    twitterKey: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitterSecret: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    openId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
};
