/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reader', { 
    reader_id: {
      type: DataTypes.STRING,
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
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RefNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CourceCity: {
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
    ReaderCompany_idReaderCompany: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    Facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LinkedIn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Skype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Twitter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Google+: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CVFile: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
