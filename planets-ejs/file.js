var async = require("async")

var from_one_two_five = [1,2,3,4,5]

async.each(
    from_one_two_five,
    function(elem,report){
        if(typeof elem === "number"){
            report()
        } else {
            report("Нашли не число")
        }
    },
    function(info){
        if(info){
            console.log(info)
        } else {
            console.log("Проверка прошла успешно. Все элементы массива являются числами")
        }
    }
)
