const maxsum = (input) => {
    if (input.length < 2) return undefined
    let biggest = -Infinity;
    let secondBiggest = -Infinity;
    for (let i = 0; i < input.length; i++){
        if (input[i] >= biggest){
            secondBiggest = biggest;
            biggest = input[i]
        }
        else if (input[i] >= secondBiggest){
            secondBiggest = input[i]
        }
    }
    return biggest + secondBiggest;
}

console.log(maxsum([4, 6, -3, 5, -2, 1]))