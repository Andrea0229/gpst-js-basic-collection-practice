'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var arr=[];                     //将objectB中的值存入arr数组当中
    var result = [];
    objectB.value.forEach(ch =>{
        arr.push(ch);
    })
    
    collectionA.forEach(item =>{
        if(arr.indexOf(item) >= 0)
            result.push(item);
    })
    
    return result;
}
