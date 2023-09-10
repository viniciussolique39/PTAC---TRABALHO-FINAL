import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div>
            <h1>Dashboard</h1>
        {users.map(user => (
            <div>
                <h2>{user.name}</h2>
                
                <h2>{user.email}</h2>
            </div>
        ))} 
            
        </div>
    );
};