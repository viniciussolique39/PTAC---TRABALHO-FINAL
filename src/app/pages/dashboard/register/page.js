'use client'
import { updateUser } from "@/app/functions/handlerAcessAPI";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import {ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export default function RegistrarUsuario() {
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
        await updateUser(user);
        await new Promise((resolve) => {
        toast.success ('Usuário cadastrado com sucesso!');
        setTimeout(resolve, 5000);
      });
      return push("/pages/dashboard");
  }catch{
      return toast.error('Erro');
  }
};
return (
  <div>
      <h1 className='conta'>Registrar Usuário</h1>
      <div className='container'>
      <form className='contact_form' onSubmit={handlerFormSubmit}>
          
          <div className='nome'> 
          <input required placeholder='Digite seu nome' type="text" name="name" value={user.name}
           onChange={(e) => { setUser({ ...user, name: e.target.value }) }}/>
          </div>

          <div className='email'>
          <input required placeholder='Digite seu email' type="email" name="email" value={user.email}
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}/>
          </div>

          <div className='password'>
          <input required placeholder='Digite uma senha' type="password" name="password" value={user.password}
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}/>
          </div>


          <div className='submit'> 
          <button className="botao" type='submit'>Registrar</button>
          </div>   
      </form>
      <ToastContainer/>
      </div>
      </div>
);
}