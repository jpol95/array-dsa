const hmFilter = (input) => {
    result = [];
    for (let el of input){
        if (el >= 5) result.push(el)
    }
    return result;
}

console.log(hmFilter([4,2,6,8,4,2,4,5,7,89,4,3,56,4,64,3,234,64,3,5,6,6]))