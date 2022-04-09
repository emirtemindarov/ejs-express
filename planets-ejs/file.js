
var async = require("async")

async.series([
        firstWord,
        secondWord,
        thirdWord
    ],
    function(err,result){
        if(err) throw err;
        console.log(result.join(' '))
    });

function firstWord(callback){
    callback(null, 'МАМА')
}
function secondWord(callback){
    callback(null, 'МЫЛА')
}
function thirdWord(callback){
    callback(null, 'РАМУ')
}