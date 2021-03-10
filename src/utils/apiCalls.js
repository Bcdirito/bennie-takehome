const apiCalls = {
    getAll: async (objType) => {
        const response = await fetch(`${process.env.REACT_APP_CALLOUT_URL}/${objType}`)
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

        const response = await fetch(`${process.env.REACT_APP_CALLOUT_URL}/users`, metadata)
        const data = await response.json()
        return data
    }
}

module.exports =  apiCalls