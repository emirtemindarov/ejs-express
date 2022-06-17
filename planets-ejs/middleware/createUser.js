var User = require("./../models/user").User

var CreateUser = function(req,res,next) {
    res.locals.user = null

    User.findById(req.session.user, function (err, user) {
        if(err) return next(err)
        res.locals.user = user;
        next();
    })
}

module.exports.CreateUser = CreateUser
