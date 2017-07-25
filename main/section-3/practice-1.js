'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var list_b = objectB.value;
 //   console.log("===========================");
    collectionA.forEach(item =>{
 //      if(item.key instanceof list_b)
        if(list_b.indexOf(item.key) >= 0)
            item.count--;      
    })
 //   console.log(collectionA);
  return collectionA;
}
