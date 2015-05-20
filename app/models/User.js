
/**
	* User Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var User = sequelize.define('User',
		{
			FirstName: DataTypes.STRING,
			LastName: DataTypes.STRING,
			Email: DataTypes.STRING,
			Phone: DataTypes.STRING,
			RefNumber: DataTypes.INTEGER(4),
			CourseCity: DataTypes.STRING,
			BirthCity: DataTypes.STRING,
			BirthDate: DataTypes.STRING,
			BirthHour: DataTypes.STRING,
			CoursePreference: DataTypes.STRING,
			Address: DataTypes.STRING,
			EGN: DataTypes.INTEGER(10),
			Progress: DataTypes.INTEGER(4),
			Permission: DataTypes.STRING,
			CVFilePath: DataTypes.STRING,
			username: DataTypes.STRING,
			hashedPassword: DataTypes.STRING,
			provider: DataTypes.STRING,
			salt: DataTypes.STRING,
			facebookUserId: DataTypes.INTEGER,
			twitterUserId: DataTypes.INTEGER,
			twitterKey: DataTypes.STRING,
			twitterSecret: DataTypes.STRING,
			github: DataTypes.STRING,
			openId: DataTypes.STRING,
			admin: DataTypes.INTEGER(1)
		},
		{
			instanceMethods: {
				makeSalt: function() {
					return crypto.randomBytes(16).toString('base64');
				},
				authenticate: function(plainText){
					return this.encryptPassword(plainText, this.salt) === this.hashedPassword;
				},
				encryptPassword: function(password, salt) {
					if (!password || !salt) return '';
					salt = new Buffer(salt, 'base64');
					return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
				}
			},
			associate: function(models) {
				User.hasMany(models.Article);
				User.hasMany(models.User_Score);
				User.hasMany(models.User_Company);
				User.hasMany(models.User_Child);
				User.hasMany(models.Event, {through: 'User_Events'});
				User.hasMany(models.Gamification_Event);
			}
		}
	);

	return User;
};
