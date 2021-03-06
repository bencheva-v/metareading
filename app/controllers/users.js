/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');
var MCapi = require('mailchimp-api');
mc = new MCapi.Mailchimp('2118cb7aeb1f4e743f68c3586feebcbf-us2');

/**
 * Gamification methods
 */

var add_points = exports.add_points = function(new_points, event_string){
  update_score_and_level(this.new_points);
  //log_event(new_points, event_string);
};

var update_score_and_level = exports.update_score_and_level = function(new_points){
  user_id = me();
  var current_score = db.User.find({id: user_id});
  current_score += this.new_points;
  console.log('Progress of user:' + user_id + 'changed to' + current_score + 'points');
};

var log_event = exports.log_event = function(points, text) {
  //Create Gamification_Events insert
};
/**
 * Auth callback
 */
exports.authCallback = function(req, res, next) {
    res.redirect('/');
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
    res.render('users/signin', {
        title: 'Signin',
        message: req.flash('error')
    });
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {
    res.render('users/signup', {
        title: 'Sign up',
    });
};

/**
 * Logout
 */
exports.signout = function(req, res) {
    console.log('Logout: { id: ' + req.user.id + ', username: ' + req.user.username + '}');
    req.logout();
    res.redirect('/');
};

/**
 * Session
 */
exports.session = function(req, res) {
    res.redirect('/');
};

/**
 * Create user
 */
exports.create = function(req, res) {
    var message = null;

    var user = db.User.build(req.body);

    user.provider = 'local';
    user.salt = user.makeSalt();
    user.hashedPassword = user.encryptPassword(req.body.password, user.salt);
    console.log('New User (local) : { id: ' + user.id + ' username: ' + user.username + ' }');

/**
  Mailchimp opt-in
*/
    var mcReq = {
      id: '31f93108c5',
      email: { email: user.Email },
      merge_vars: {
        EMAIL: user.Email,
        FNAME: user.FirstName,
        LNAME: user.LastName
      },
      double_optin: false
    };

    // submit subscription request to mail chimp
    mc.lists.subscribe(mcReq, function(data) {
      console.log(data);
    }, function(error) {
      console.log(error);
    });

  //  add_points(1, 'asd');
    console.log(user);

    user.save().success(function(){
      req.login(user, function(err){
        if(err) return next(err);
        res.redirect('/');
      });
    }).error(function(err){
      res.render('users/signup',{
          message: message,
          user: user
      });
    });
};

/**
 * Send User
 */
var me = exports.me = function(req, res) {
    res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
    User.find({where : { id: id }}).success(function(user){
      if (!user) return next(new Error('Failed to load User ' + id));
      req.profile = user;
      next();
    }).error(function(err){
      next(err);
    });
};
