'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var list_b = objectB.value;
    collectionA.forEach(item =>{
        if(list_b.indexOf(item.key) >= 0)
            item.count = item.count - parseInt(item.count/3);      
    })

  return collectionA; 
 }
