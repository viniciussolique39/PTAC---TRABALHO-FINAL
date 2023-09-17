export default async function ListUsers({users}){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return(
        <div>
            <h2>Listando Usuários:</h2>
            <ul>
                {users?.map((user, index) => (
                    <li key= {index}>{user.name}, {user.email}</li>
                ))}
            </ul>
        </div>
    )
}