const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const tempArr = [...arr];
    for (let i = 0; i < tempArr.length; i++) {
        const elem = tempArr[i];

        if (isControl(elem)) {
            const indexAlter = getIndexAlterableElem(i, tempArr);
            if (indexAlter) {
                if (isDiscard(elem)) {
                    tempArr.splice(indexAlter, 1);
                    if (!isNext(elem)) i--;
                } else {
                    tempArr.splice(indexAlter, 0, tempArr[indexAlter]);
                    if (!isNext(elem)) i++;
                }
            }

        }
    };

    return tempArr.filter(elem => !isControl(elem));
}

const getIndexAlterableElem = (index, arr) => {
    if (isNext(arr[index])) {
        if (index !== arr.length - 1) {
            return index + 1;
        }
    } else {
        if (index !== 0) {
            return index - 1;
        }
    }
}

const isControl = (elem) => {
    const regex = new RegExp("^--(discard|double)-(next|prev)$");
    return regex.test(elem);
}

const isNext = (control) => {
    const regex = new RegExp("next");
    return regex.test(control);
}

const isDiscard = (control) => {
    const regex = new RegExp("discard");
    return regex.test(control);
}


module.exports = {
  transform
};
