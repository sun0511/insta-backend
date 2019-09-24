export const isAuthenticated = (request) => {
    if(!request.user){
        throw Error("asdsdad")
    }
    return;
}