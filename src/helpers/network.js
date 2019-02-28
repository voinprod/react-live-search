

export const httpGet = async (urlEnd) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${urlEnd}`)
        return response.ok ? await response.json() : new Error(response.status)
    } catch (error) {
        console.warn('httpGet error ', error)
    }
}