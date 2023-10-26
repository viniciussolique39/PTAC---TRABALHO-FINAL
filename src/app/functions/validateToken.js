import { jwtDecrypt, jwtVerify } from "jose";


  const validateToken = async(token) => {
    const secret = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA";
    try{
        const isTokenValidate = await jwtVerify(token, 
            new TextEncoder().encode(secret));
            if(isTokenValidate){
                return true;
            
            }
    } catch {
        return false;
    }
     
  };
  
export {validateToken};