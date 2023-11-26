import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListarUsuario from "@/app/componentes/ListarUsuario";
import { Suspense } from "react";


export default async function Dashboard() {
    const users = await getUsers();
    return (
        <div>
            <h1>Usuários</h1>
            <Suspense fallback={<p>Carregando...</p>}>
                <ListarUsuario users={users}/>
            </Suspense>
        </div>
        
    );
};