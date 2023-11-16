'use client'
import  React,{ useState } from "react";
import { useRouter } from 'next/navigation';
import { postUser } from '@/app/functions/handlerAcessAPI';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Register() {
    const [user, setUser] = useState({
      name: "",
        email: "",
        password: ""
      });
  
      const { push } = useRouter();
      const handlerSubmit = async (event) => {
        event.preventDefault();
          
          try {
            await postUser(user);
           /* await new Promise((resolve) => {
              setTimeout(()=> resolve, 5000);
            });*/
            return push ("/pages/dashboard");
            } catch {
              return toast.error ("Erro");
        
            }
      }

    return (
         <div className='conteiner'>
          <fieldset>
            <legend><b>Registrar Usuários</b></legend>
                <form method="post" onSubmit={handlerSubmit}>
                <div className='inputBox'> 
                <input id='text' placeholder='Digite seu nome' type="text" name="name"  className="inputUser" value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>  
                <label for="nome" class="labelInput">Nome:</label>
                </div>
                <br/><br/>
                <div className='inputBox'>
                <input placeholder='Digite seu email' type="email" name="email"  className="inputUser" value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                <label for="email"  class="labelInput">  E-mail: </label>
                </div>
                <br/><br/>
                <div className='inputBox'>
                <input id='text' placeholder='Digite uma senha' type="text" name="password"  className="inputUser" value={user.password} onChange={e => setUser({...user, password: e.target.value})}/> 
                <label for="senha"  class="labelInput">  Senha: </label>
                </div>
                <br/><br/>
                <button className="botao">Registrar Usuários</button>
            </form>
            </fieldset>
            </div>
    );
  };
