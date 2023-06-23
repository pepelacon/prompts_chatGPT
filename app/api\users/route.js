export async function GET(request) {
    const users = [
        { id:1, name: 'John'},
        { id:2, name: 'JRick'},
        { id:3, name: 'Tom'},

    ]
    return new Response(JSON.stringify(users))
}