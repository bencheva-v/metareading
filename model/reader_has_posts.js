/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reader_has_posts', { 
    Reader_reader_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Posts_idPosts: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Reader_has_Postscol: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
