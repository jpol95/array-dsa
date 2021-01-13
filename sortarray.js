const mergeArrays = (array1, array2) => {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < array1.length && j < array2.length){
        if (array1[i] < array2[j]){
            result.push(array1[i]);
            i++;
        }
        else {
            result.push(array2[j]);
            j++;
        }
    }
    result = [...result, ...array1.slice(i), ...array2.slice(j)]
    return result;
}

const mergeArraysSorty = (array1, array2) => {
    let result = [...array1, ...array2].sort((a, b) => a - b)
    return result;
}

console.log(mergeArraysSorty([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));