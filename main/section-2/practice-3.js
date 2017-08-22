'use strict';

/**
 * 若包含，返回map下标
 * @param mapArr
 * @param value
 * @returns {*}
 */
function getIndex(mapArr, value) {
    for (let index in mapArr) {
        if (mapArr[index].name === value) {
            return index;
        }
    }
    return -1;
}

/**
 * 数组中是否包含某个字符
 * @param str
 * @param value
 */
function isInclude(str, value) {
    for (let ch of str) {
        if (ch === value) {
            return true;
        }
    }
    return false;
}

/**
 * 由特殊符号分割字符串
 * @param item
 * @returns {[null,null]}
 */
function getNewItem(item) {

    let [item_ch, item_num] = [item, 1];
    //是否包含特殊字符
    let special = getSpecial(item);
    console.log(`special:${special}`)
    if (special) {
        let temp = item.split(special);
        console.log(`item is ${item},special is ${special}:${item}=${temp[0]}, ${parseInt(temp[1])}`)
            [item_ch, item_num] = [temp[0], parseInt(temp[1])];
    }

    return [item_ch, item_num];
}

/**
 * 是否包含特殊字符
 * @param str
 */
function getSpecial(str) {
    let special = ['-', ':', '[', ']'];
    for (let ch of special) {
        if (isInclude(str, ch)) {
            return ch;
        }
    }
    return null;
}

/**
 * 是否包含某个字符
 * @param str
 * @param ch
 * @returns {boolean}
 */
function isInclude(str, ch) {
    for (let item of ch) {
        if (ch === item) {
            return true;
        }
    }
    return false;
}

function pushArr(item, result) {
    let [item_ch, item_num] = getNewItem(item);
    let index = getIndex(result, item);
    if (index > -1) {
        result[index].summary += item_num;
    }
    else {
        result.push({name: item_ch, summary: item_num});
    }
    return result;
}

module.exports = function countSameElements(collection) {
    let result = [];

    for (let item of collection) {
        result = pushArr(item, result);
    }
    return result;
}
