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
      if (userAuth.token === undefined) {
      }
      push('/pages/dashboard');
    } catch {
      refresh()
      toast.error("Erro na aplicação");
    }
  }

  return (
    <div className="conteiner">
      <fieldset>
        <legend><b>Faça Login</b></legend>
        <form onSubmit={handlerLogin} >
          <div className="inputBox">
            <input placeholder='E-mail' type="email" class="inputUser" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></input>
            <label form="email" class="labelInput">Email:</label>
          </div>
          <br /><br />
          <div className="inputBox">
            <input placeholder='Nome' type='name' class="inputUser" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></input>
            <label form="name" class="labelInput">Nome:</label>
          </div>
          <br /><br />
          <div className="inputBox">
            <input placeholder='Senha' type='password' class="inputUser" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></input>
            <label form="senha" class="labelInput">Senha:</label>
          </div>
          <br /><br />
          <button className="botao">Entrar no Sistema</button>
          <ToastContainer />
        </form>
      </fieldset>
    </div>
  )
}
