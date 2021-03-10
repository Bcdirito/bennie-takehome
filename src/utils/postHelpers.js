const postHelpers = {
    titleize: (string) => {
        const splitString = string.split(" ")
        return splitString.map(word => {
            return `${word[0].toUpperCase()}${word.slice(1)}`
        }).join(" ")
    },
    titleSort: (posts) => {
        return posts.sort((a, b) => a.title.localeCompare(b.title))
    }
}

module.exports = postHelpers