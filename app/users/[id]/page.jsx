async function GetUsers(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data;
}

async function UsersPage({ params }) {
    const users = await GetUsers(params.id)

    return (
    <div className="bg-slate-400 p-10 rounded-md ">
        <img src={users.avatar} alt="" className="mx-auto my-4 rounded-md"/>
        <h3 className="text-3xl font-semibold ">{users.id} {users.first_name} {users.last_name}</h3>
        <p className="text-slate-100"><span className="font-bold">Email:</span> {users.email}</p> 
        
    </div>
    )
    
}

export default UsersPage