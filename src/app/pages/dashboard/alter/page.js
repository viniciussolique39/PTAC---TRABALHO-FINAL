'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import {ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export default function AlterarUsers() {
    const route = useRouter();
    const [nameAlter, setnameAlter] = useState("");
    const [passwordAlter, setpasswordAlter] = useState("");
    const [emailAlter, setEmailAlter] = useState("");


    const alterar = (e) => {
        e.preventDefault()

        const user = {
            nameAlter: nameAlter,
            passwordAlter: passwordAlter,
            emailAlter: emailAlter
        }
        toast.success('Usuário alterado com sucesso!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
        });
    }
return(
    <div>
    <h1 className='conta'>Alterar Usuário</h1>
    <div className='container'>
    <form className='contact_form' onSubmit={alterar}>
        
        <div className='nome'> 
        <input required placeholder='Digite seu nome' type="text" name="name" value={nameAlter}
        onChange={e => setnameAlter(e.target.value)}/>  
        </div>

        <div className='email'>
        <input required placeholder='Digite seu email' type="email" name="email" value={emailAlter}
        onChange={e => setEmailAlter(e.target.value)}/>
        </div>

        <div className='password'>
        <input required  placeholder='Digite uma nova senha' type="password" name="password" value={passwordAlter}
        onChange={e => setpasswordAlter(e.target.value)}/> 
        </div>


        <div className='submit'> 
        <button className="botao" type='submit'>Atualizar</button>
        </div>  
       
    </form>
    <ToastContainer/>
    </div>
    </div> 
);
}
