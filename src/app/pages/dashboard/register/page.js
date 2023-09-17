'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Register() {
    const [user, setUser] = useState({ name: '', email: '', password: '', })
    const route = useRouter();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const registrar = (e) => {
      e.preventDefault()
      
      const user = {
        name: name,
        password: password,
        email: email
      }

    }

    return (
         <div className='conteiner'>
          <fieldset>
            <legend><b>Registrar Usuários</b></legend>
                <form onSubmit={registrar}>
                <div className='inputBox'> 
                <input id='text' placeholder='Digite seu nome' type="text" name="name"  className="inputUser" value={name} onChange={e => setName(e.target.value)}/>  
                <label for="nome" class="labelInput">Nome:</label>
                </div>
                <br/><br/>
                <div className='inputBox'>
                <input placeholder='Digite seu email' type="email" name="email"  className="inputUser" value={email} onChange={e => setEmail(e.target.value)}/>
                <label for="email"  class="labelInput">  E-mail: </label>
                </div>
                <br/><br/>
                <div className='inputBox'>
                <input id='text' placeholder='Digite uma senha' type="text" name="password"  className="inputUser" value={password} onChange={e => setPassword(e.target.value)}/> 
                <label for="senha"  class="labelInput">  Senha: </label>
                </div>
                <br/><br/>
                <button className="botao">Registrar Usuários</button>
            </form>
            </fieldset>
            </div>
    );
}
