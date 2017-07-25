'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var result = []
  var k=0
  for(var i in collectionA){
      if(collectionB.indexOf(collectionA[i]) >=0 ){
        result.push(collectionA[i])
//            result[k++] = collectionA[i]
//            console.log(result[k-1])
      }

  }
  //  console.log(result)
  return result;
}


