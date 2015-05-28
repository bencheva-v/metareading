var db = require('../../config/sequelize');
var user = require('users.js');

/**
* Gamification methods
*/

exports.add_points = function(new_points, event_string){
  update_score_and_level(this.new_points);
  log_event(new_points, event_string);
};

exports.update_score_and_level = function(new_points){
  var current_score = db.Users.find();
  //current_score += this.new_points;


};

exports.log_event = function(points, text) {
  //Create Gamification_Events insert
};
