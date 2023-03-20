const apiGraphQlService = (query: Object) => {
    return fetch(import.meta.env.VITE_RICKMORTY_API_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ query }),
    }).then(async res => {
        return await res.json()
    }).catch(err => {
        throw err
    })
}

export default apiGraphQlService