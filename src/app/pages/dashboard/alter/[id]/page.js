'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import {ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { updateUser } from "@/app/functions/handlerAcessAPI";
import { resolve } from "styled-jsx/css";

export default function AlterarUsuario({params}) {
    const [user, setUser] = useState ({
        name: '',
        email: '',
        password: ''
});

const {push} = useRouter();

const enviado = () => {
    toast.success("Dados enviados!");
};

const handlerFormSubmit = async(event) =>{
    event.preventDefault();
    try{
        await updateUser(user, params.id);
        await new Promise((resolve) => {
        toast.success ('Usuário cadastrado com sucesso!');
        setTimeout(resolve, 5000);
      });
      return push("/pages/dashboard");
  }catch{
      return toast.error('Erro');
  }
};
return(
    <div>
    <h1 className='conta'>Alterar Usuário</h1>
    <div className='container'>
    <form className='contact_form' onSubmit={handlerFormSubmit}>
        
        <div className='nome'> 
        <input required placeholder='Digite seu nome' type="text" name="name" 
        onChange={(e) => { setUser({ ...user, name: e.target.value }) }}/>  
        </div>

        <div className='email'>
        <input required placeholder='Digite seu email' type="email" name="email" 
        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}/>
        </div>

        <div className='password'>
        <input required  placeholder='Digite uma nova senha' type="password" name="password"
        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}/> 
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
