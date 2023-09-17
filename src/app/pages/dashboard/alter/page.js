'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Alterar() {
    const [user, setUser] = useState({ name: '', email: '', password: ''})
    const route = useRouter();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const alterar = (e) => {
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
            <legend><b>Alterar Usuários</b></legend>
            <form onSubmit={alterar}>
                <div className='inputBox'> 
                <input id='text' placeholder='Digite seu Nome' type="text" name="name" className="inputUser" value={name} onChange={e => setName(e.target.value)}/>
                <label for="nome" class="labelInput">Nome:</label>
                </div>
                <br/><br/>
                <div className='inputBox'>
                <input placeholder='Digite seu E-mail' type="email" name="email" className="inputUser" value={email} onChange={e => setEmail(e.target.value)}/>
                <label for="email"  class="labelInput">  E-mail: </label>
                </div>
                <br/><br/>
                <div className='inputBox'>
                <input id='text' placeholder='Digite uma Senha' type="text" name="password"  className="inputUser" value={password} onChange={e => setPassword(e.target.value)}/>
                <label for="senha"  class="labelInput">  Senha: </label>
                </div>
                <br/><br/>
                <button className="botao">Alterar Usuários</button>
            </form>
            </fieldset>
            </div>
    );
}
