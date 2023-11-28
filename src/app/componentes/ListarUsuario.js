import { getUsers } from '../functions/handlerAcessAPI';
import Link from 'next/link';
export default async function ListarUsuario(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
   const users = await getUsers()
    return(
         
        <div className='divUsers'>
            <h2>Lista de Usuários:</h2>
           
                {users?.map((user, index) => (
                    <Link key={index} href={`/pages/dashboard/alter/${user.id}`}> 
                    <p className='users' >{user.name}, {user.email}</p>
                    </Link>
                ))}
        </div>
        
    )
}