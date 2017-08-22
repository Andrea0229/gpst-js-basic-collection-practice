'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let result = []

    for (let item of collectionA) {
        if (objectB.value.indexOf(item.key) >= 0) {
            result.push(item.key);
        }
    }

    return result;
}
