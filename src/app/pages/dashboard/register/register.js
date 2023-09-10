'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function RegisterUsers() {
    const [user, setUser] = useState({ name: '', email: '', password: '', })

    return (
        <div>
      <h1>Cadastrar Usuários</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            placeholder="digite seu nome"
            name="nome"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="digite seu email"
            name="email"
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            placeholder=" digite a senha que foi cadastrada!"
            name="senha"
            value={user.password}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}