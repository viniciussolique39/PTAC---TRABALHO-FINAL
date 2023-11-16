import { jwtVerify } from "jose";
  const validateToken = async(token) => {
    const secret = "AERJKLMNO";
    try{
      /*const isTokenValidate = await jwtVerify(token, 
            new TextEncoder().encode(secret));
            if(isTokenValidate){
              console.log(isTokenValidate)*/
                return true;
  }
     catch {
        return false;
    }
     
  };
  
export {validateToken};