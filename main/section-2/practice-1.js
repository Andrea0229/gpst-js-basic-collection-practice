'use strict';

module.exports = function countSameElements(collection) {
    var result = [];
    var ch_list = [];
    collection.forEach(item =>{
        var index = ch_list.indexOf(item);
        if(index < 0){
                        ch_list.push(item);
            var list = {};
            list.key = item;
            list.count = 1;
            result.push(list);
        }
        else
            result[index].count++;
   //     console.log(result[index])   ;
    })
    
  return result;
}
