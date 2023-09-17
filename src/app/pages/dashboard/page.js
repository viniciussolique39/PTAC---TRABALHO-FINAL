import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div className="lista"> 
        <fieldset>
        <legend><b>Listando Usuários</b></legend>

        {users.map(user => (
            <div className="inputBox">
                <h2>{user.name}</h2>
                
                <h2>{user.email}</h2>
            </div>
        ))}
        </fieldset>
        </div>
    );
};