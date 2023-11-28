import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListarUsuario from "@/app/componentes/ListarUsuario";
import { Suspense } from "react";


export default async function Dashboard() {
    const users = await getUsers();
    return (
        <div>
            <h1>Usuários</h1>
            <Suspense fallback={<p>Aguarde um instante. Estamos carregando as informações...</p>}>
                <ListarUsuario users={users}/>
            </Suspense>
        </div>
        
    );
};