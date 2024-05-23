export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const res = await fetch('http://127.0.0.1:3001/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const data = await res.json()

    return {
        token: { accessToken: data.access_token },
    }
})