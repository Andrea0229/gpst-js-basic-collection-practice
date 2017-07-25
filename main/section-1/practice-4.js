'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result = []
    var arr_a = [];
    var arr_b = [];
   
    collectionA.forEach(collection =>{          //将objectB中的每个元素的kkey值cu存放在arr数组中
        arr_a.push(collection.key);
    })

    objectB.value.forEach(ch =>{
        arr_b.push(ch);
    })
   
  
 //   console.log("--------------------------------------"+arr);
    arr_a.forEach(item =>{
        if(arr_b.indexOf(item) >= 0)
            result.push(item);
    })
    
    return result;
  
}
