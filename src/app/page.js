'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      await handlerAcessUser(user);
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
      }
      push('/pages/dashboard');
    } catch {
      refresh()
      toast.error("Erro na aplicação");
    }
  }

  return (
    <div className="conteiner">
      <h1>Preencha o Formulário de Login</h1>
      <form className="tv" onSubmit={handlerLogin} >
        <input placeholder='E-mail' type="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></input>
        <br/>
        <br/>
        <input placeholder='Senha' type='password' onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></input>
        <br/>
        <br/>
        <button className="botao">Entrar no Sistema</button>
        <ToastContainer/>
      </form>
    </div>
  )
}
