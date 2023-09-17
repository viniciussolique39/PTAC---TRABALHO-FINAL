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
         <div className='container'>
            <h3 className='h3'>Cadastrar Usuários</h3>

            <form className='contact_form' onSubmit={alterar}>

                <div className='nome'> 
                <input id='text' placeholder='digite seu nome' type="text" name="name" value={name}
                onChange={e => setName(e.target.value)}/>  
                </div>

                <div className='email'>
                <input placeholder='digite seu email' type="email" name="email" value={email}
                onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='password'>
                <input id='text' placeholder='digite uma senha' type="text" name="password" value={password}
                onChange={e => setPassword(e.target.value)}/> 
                </div>


                <div className='submit'> 
                <button id="form_button" type='submit'>Alterar Usuários</button>
                </div>   
            </form>
            </div>
    );
}
