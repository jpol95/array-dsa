// const product = (input) => {
//     let result = [];
//     for (let i = 0; i < input.length; i++){
//         let copy = [...input]
//         copy.splice(i, 1)
//         result[i] = copy.reduce((total, current) => current * total)
//     }
//     return result;
// }

const product = (input) => {
    let result = [];
    let product = input.reduce((total, current) => total * current)
    for (let i = 0; i < input.length; i++){
        result[i] = product / input[i]
    }
    return result;
}

console.log(product([1, 3, 9, 4]))