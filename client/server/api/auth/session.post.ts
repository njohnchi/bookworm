export default defineEventHandler(async (event) => {
    const token = getRequestHeader(event, 'authorization')

    const res = await fetch('http://127.0.0.1:3001/users/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        }
    })
    return await res.json();
})