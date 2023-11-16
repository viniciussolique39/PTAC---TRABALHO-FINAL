'use server'
const url="https://aula-17-10-delta.vercel.app";

const getUserAuthenticated = async (user) => { 
   
   const responseOfApi = await fetch(url + "/user/authenticated",
    
   {
      method:'POST',
      headers:{"Content-type": "application/json"},
      body: JSON.stringify(user)
    }

   );
   const userAuth = await responseOfApi.json();
   console.log (userAuth)
   return userAuth;
    
 }
 
 const getUsers =  async () => {
   const responseOfApi = await fetch(url + "/users", {
    next:{revalidate:1},
      method:"GET",
      headers: { "Content-Type": "aplication/json" }
   })

   const users = await responseOfApi.json();
   return users;

 }

 const postUser = async (user) => {
  try{
    const responseOfApi = await fetch(url + "/user", {
      method: "POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify(user)
    });
    const userSave = await responseOfApi.json();
    console.log(userSave)
    return userSave;
  }
  catch{
    return null
  }
 }

 export { getUsers, getUserAuthenticated, postUser};