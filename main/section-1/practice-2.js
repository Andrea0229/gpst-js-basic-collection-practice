'use strict';
/**
 * 选出A集合中与B集合中子数组的元素相同的元素
 * @param collectionA
 * @param collectionB
 * @returns {Array}
 */
module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];

    for (let collection of collectionB) {
        getUnionArray(collectionA, collection, result);
    }

    return result;
};

function getUnionArray(collectionA, collection, result) {
    for (let item of collectionA) {
        if (collection.indexOf(item) >= 0)
            result.push(item);
    }
}