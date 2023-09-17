import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div className="asus"> 
            <h1>Dashboard - Listando Usuários</h1>
        {users.map(user => (
            <div>
                <h2>{user.name}</h2>
                
                <h2>{user.email}</h2>
            </div>
        ))} 
            
        </div>
    );
};