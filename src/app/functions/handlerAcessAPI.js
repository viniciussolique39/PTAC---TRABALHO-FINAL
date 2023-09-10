'use server'

const usuarios = [
    {name:"vinicius", email:"vinicius@gmail.com", password:"solique", token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"},
    {name:"ingrid", email:"ingrid@gmail.com", password:"souza", token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}
]

const getUserAuthenticated = (user) => {
    let userAuth = {};
    usuarios.find((e) => {
        if(e.email === user.email && e.password === user.password){
            userAuth = e;
        };
    })
    return userAuth;
}

const getUsers = () =>{
        return usuarios
}
export { getUsers, getUserAuthenticated };
