'use strict';

const countSameElements = require('../section-2/practice-1');
// const createUpdatedCollection = require('./practice-2');


module.exports = function createUpdatedCollection(collectionA, objectB) {
    var newC = countSameElements(collectionA);
//    console.log(newC);
//    var result = createUpdatedCollection(newC, objectB);
    
    var list_b = objectB.value;
    newC.forEach(item =>{
        if(list_b.indexOf(item.key) >= 0)
            item.count = item.count - parseInt(item.count/3);      
    })
//    console.log(newC);
  return newC;
}
