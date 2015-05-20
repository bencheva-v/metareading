/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

/**
 * Find event by id
 * Note: This is called every time that the parameter :eventId is used in a URL.
 * Its purpose is to preload the event on the req object then call the next function.
 */
exports.event = function(req, res, next, id) {
    console.log('id => ' + id);
    db.Event.find({ where: {id: id}, include: [db.User]}).success(function(event){
        if(!event) {
            return next(new Error('Failed to load event ' + id));
        } else {
            req.event = event;
            return next();
        }
    }).error(function(err){
        return next(err);
    });
};

/**
 * Create an event
 */
exports.create = function(req, res) {
    // augment the event by adding the UserId
    req.body.UserId = req.user.id;
    // save and return and instance of event on the res object.
    db.Event.create(req.body).success(function(event){
        if(!event){
            return res.send('users/signup', {errors: err});
        } else {
            return res.jsonp(event);
        }
    }).error(function(err){
        return res.send('users/signup', {
            errors: err,
            status: 500
        });
    });
};

/**
 * Update an event
@TODO: Update with proper values (currently Article ones)
*/
exports.update = function(req, res) {

    // create a new variable to hold the event that was placed on the req object.
    var event = req.event;

    event.updateAttributes({
        title: req.body.title,
        content: req.body.content
    }).success(function(a){
        return res.jsonp(a);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Delete an event
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the event that was placed on the req object.
    var event = req.event;

    event.destroy().success(function(){
        return res.jsonp(event);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an event
 */
exports.show = function(req, res) {
    // Sending down the event that was just preloaded by the events.event function
    // and saves event on the req object.
    return res.jsonp(req.event);
};

/**
 * List of events
 */
exports.all = function(req, res) {
    db.Event.findAll({include: [db.User]}).success(function(events){
        return res.jsonp(events);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
