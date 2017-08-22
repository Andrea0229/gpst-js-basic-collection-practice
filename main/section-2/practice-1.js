'use strict';

/**
 * s数组中是否存在某个指定元素
 * @param arr
 * @param value
 * @returns {boolean}
 */
function include(mapArr, value) {
    for (let index in mapArr) {
        if (mapArr[index].key === value) {
            return index;
        }
    }
    return -1;
}

function countSameElements(collection) {
    let result = [];

    for (let item of collection) {
        let index = include(result, item);
        if (index != -1) {
            result[index].count++;
        }
        else {
            let temp = {key: item, count: 1}
            result.push(temp);
        }
    }

    return result;
};

module.exports = countSameElements;
