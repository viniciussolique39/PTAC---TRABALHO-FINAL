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

  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      await handlerAcessUser(user);
      const userAuth = await handlerAcessUser(user);
      if (userAuth.token === undefined) {
      }
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação");
      refresh();
    }
  }

  return (
    <div>
      <h1>Autenticação de acesso</h1>
    <div className="principal">

        <form onSubmit={handlerLogin}>

        <input placeholder='E-mail' type="email" onChange={(e) => { setUser({ ...user, email: e.target.value })}}></input>

        <input placeholder='Senha' type='password' onChange={(e) => { setUser({ ...user, password: e.target.value })}}></input>

        <button className="botao">Entrar</button>
        
        </form>
        <ToastContainer />
    </div>
    </div>
  )
}