// replace object keys with new keys
export const replaceObjectKeys = (obj, newKeys) => {
    const newObj = {};
    Object.keys(obj).forEach(key => {
        newObj[newKeys[key] || key] = obj[key];
    });
    return newObj;
}

// replaceObjectKeys of an array
export const replaceObjectKeysOfArray = (arr, newKeys) => {
    return arr.map(item => replaceObjectKeys(item, newKeys));
}
