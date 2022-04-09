
var async = require("async")

async.series([
    async.apply(anyWord, "МАМА"),
    async.apply(anyWord, "МЫЛА"),
    async.apply(anyWord, "РАМУ")
],
function(err,result){
    if(err) throw err;
    console.log(result.join(' '))
});

function anyWord(arg, callback){
callback(null, arg)
}
