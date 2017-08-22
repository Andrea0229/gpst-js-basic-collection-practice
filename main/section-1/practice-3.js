'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let arr= objectB.value;                     //将objectB中的值存入arr数组当中
    let result = [];

    for(let item of collectionA){
        if(arr.indexOf(item) >= 0){
            result.push(item);
        }
    }

    return result;
}
