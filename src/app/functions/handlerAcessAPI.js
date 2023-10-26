'use server'

//const usuarios = [
    
    //{name:"Vinícius de Souza Solique",
    // email:"vinicius@gmail.com", 
     //password:"solique", 
     //token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
     //},

     //{
        //name:"Marcelino Vitor",
        //email: "marcelino@ifms.edu.br",
        //senha: "vitor",
        //token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

     //}
//]

const url="https://aula-17-10-lemon.vercel.app";

const getUserAuthenticated = async (user) => { 
   
   const responseOfApi = await fetch(url + "/user/authenticate",
    
   {
      method:'POST',
      headers:{"content-type": "aplication/json"},
      body: JSON.stringify(user)
    }

   );
   const userAuth = await responseOfApi.json();
   return userAuth;
    
 }
 
 const getUsers =  async () => {
   const responseOfApi = await fetch(url + "/users", {
      method:"GET",
      headers: { "Content-Type": "aplication/json" }
   })
   
   const users = await responseOfApi.json();
   return users;

 }
 export { getUsers, getUserAuthenticated };