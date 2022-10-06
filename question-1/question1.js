const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        const result = mixedArray.filter((item) => typeof item === 'string').map((item) => item.toLowerCase());
        if (result.length > 0) {
            resolve(result);
        } else {
            reject('No string found in the array');
        }
    });
};

console.log(lowerCaseWords(mixedArray));
