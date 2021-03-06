
var users       = require('../app/controllers/users');
var articles    = require('../app/controllers/articles');
var events    = require('../app/controllers/events');
var index       = require('../app/controllers/index');


exports.init = function(app, passport, auth) {

    console.log('Initializing Routes');

    // User Routes
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);
    app.get('/users/me', users.me);

    // Setting up the users api
    app.post('/users', users.create);

    // Setting the local strategy route
    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: true
    }), users.session);

    // Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

    // Setting the twitter oauth routes
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.authCallback);

    // Setting the google oauth routes
    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }), users.signin);

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin'
    }), users.authCallback);

    // Finish with setting up the userId param
    app.param('userId', users.user);

    // Article Routes
    app.route('/articles')
        .get(articles.all)
        .post(auth.requiresLogin, articles.create);
    app.route('/articles/:articleId')
        .get(articles.show)
        .put(auth.requiresLogin, auth.article.hasAuthorization, articles.update)
        .delete(auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);

    // Finish with setting up the articleId param
    // Note: the articles.article function will be called everytime then it will call the next function.
    app.param('articleId', articles.article);

    // Events Routes
    app.route('/events')
    .get(events.all)
    .post(auth.requiresLogin, events.create);
    app.route('/events/:eventId')
    .get(events.show)
    .put(auth.requiresLogin, auth.article.hasAuthorization, events.update)
    .delete(auth.requiresLogin, auth.article.hasAuthorization, events.destroy);

    // Finish with setting up the articleId param
    // Note: the articles.article function will be called everytime then it will call the next function.
    app.param('eventsId', events.event);



    // Home route
    app.get('/', index.render);

};
