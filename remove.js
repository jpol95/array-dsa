
const remove = (input, removal) => {
    let result = ""
    for (let i = 0; i < input.length; i++){
        if (!removal.includes(input.charAt(i))) result += input.charAt(i)
    }
    return result;
}

console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))