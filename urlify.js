const urlify = (url) => {
    return url.trim().replace(/\s/g, '%20')
}

console.log(urlify("Hello my name is jesse"))