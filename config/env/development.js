module.exports = {
    // This is your MYSQL Database configuration
    db: {
        name: "metareading-dev",
        password: null,
        username: "root"
    },
    app: {
        name: "Metareading"
    },
    // You will need to get your own client id's before this will work properly
    facebook: {
        clientID: "1106523276030671",
        clientSecret: "7f86322d870165a405edd21da60ec6f4",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "<CLIENT ID>",
        clientSecret: "<CLIENT SECRET>",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    google: {
        realm: "http://localhost:3000/",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}
