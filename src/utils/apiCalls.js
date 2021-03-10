const apiCalls = {
    getAll: async (objType) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${objType}`)
        const data = await response.json()
        return data
    },
    newUserRequest: async (newUser) => {
        const metadata = {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', metadata)
        const data = await response.json()
        return data
    }
}

module.exports =  apiCalls