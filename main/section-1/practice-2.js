'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result = [];
    var arr = [];
    collectionB.forEach(str => {
        str.forEach(ch =>{
            arr.push(ch);
        })
        
    })
 //   console.log("arr------------------------------------------:"+arr);
    
    collectionA.forEach(item =>{
        if(arr.indexOf(item) >= 0)
            result.push(item);
    })
  
//    console.log("result-------------------------------------------------"+result)
  return result;
}
