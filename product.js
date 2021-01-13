const product = (input) => {
    let result = [];
    for (let i = 0; i < input.length; i++){
        let copy = [...input]
        copy.splice(i, 1)
        result[i] = copy.reduce((total, current) => current * total)
    }
    return result;
}

console.log(product([1, 3, 9, 4]))