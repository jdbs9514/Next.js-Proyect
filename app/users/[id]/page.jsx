const dataUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json();
  return data.data;
}


const UserPage = async ({ params }) => {
  
  const user = await dataUser(params.id);
  return (
    <div className="bg-slate-400 rounded-md p-8">
      <div>
        <img src={user.avatar} alt="image" className="m-auto rounded-full" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{user.first_name} {user.last_name}</h2>
        <p className="">{user.email}</p>
      </div>
    </div>
  )
}

export default UserPage