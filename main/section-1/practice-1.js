'use strict';

/*
 * 选出A集合中与B集合中相同的元素
 */
module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];

    for (let item of collectionA) {
        if (collectionB.indexOf(item) >= 0) {
            result.push(item)
        }
    }

    return result;
};


