const zeroify = (input) => {
    let copy = [...input.map(row => [...row])]
    for (let i = 0; i < input.length; i++){
        for (let j = 0; j < input[i].length; j++){
            if (copy[i][j] === 0) transformToZero(input, j, i)
        }
    }
    
}

const transformToZero = (input, x, y) => {
    input[y].fill(0)
    for (let i = 0; i < input.length; i++){
        input[i][x] = 0;
    }
    console.log(input)
    return input;
}

const input = [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]];

zeroify(input)
console.log(input)