
var async = require("async")

async.waterfall([
    function(callback){
        callback(null, "МАМА", "МЫЛА","РАМУ")
    },
    function(arg1, arg2, arg3, callback){
        callback(null, arg1 + ' ' + arg2 + ' ' + arg3)
    }
],
function(err, result){
    if(err) throw err
    console.log(result)
});
