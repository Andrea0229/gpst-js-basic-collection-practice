'use strict';

function include(mapArr, value) {
    for (let index in mapArr) {
        if (mapArr[index].key === value) {
            return index;
        }
    }
    return -1;
}

/**
 * 由特殊符号分割字符串
 * @param item
 * @returns {[null,null]}
 */
function getNewItem(item) {
    let [item_ch, item_num] = [item, 1];
    if (item.indexOf('-') >= 0) {
        let temp = item.split('-');
        [item_ch, item_num] = [temp[0], parseInt(temp[1])];
    }
    return [item_ch, item_num];
}

function pushArr(item, result) {
    let [item_ch, item_num] = getNewItem(item);
    let index = include(result, item);
    if (index > -1) {
        result[index].count += item_num;
    }
    else {
        result.push({key: item_ch, count: item_num});
    }
    return result;
}

module.exports = function countSameElements(collection) {
    let result = [];

    for(let item of collection){
        result = pushArr(item, result);
    }
  return result;
}
