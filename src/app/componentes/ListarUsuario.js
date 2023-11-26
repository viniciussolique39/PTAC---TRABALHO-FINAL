import { getUsers } from '../functions/handlerAcessAPI';

export default async function ListarUsuario(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
   const users = await getUsers()
    return(
        <div className='divUsers'>
            <h2>Lista de Usuários:</h2>
           
                {users?.map((user, index) => (
                    <p className='users' key= {index}>{user.name}, {user.email}</p>
                ))}
        </div>
    )
}