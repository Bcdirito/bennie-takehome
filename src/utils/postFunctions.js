const postFunctions = {
    titleize: (string) => {
        const splitString = string.split(" ")
        return splitString.map(word => {
            return `${word[0].toUpperCase()}${word.slice(1)}`
        }).join(" ")
    }
}

module.exports = postFunctions