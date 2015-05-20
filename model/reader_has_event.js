/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reader_has_event', { 
    Reader_reader_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Event_idEvent: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    PricePaid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DocSigned: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
