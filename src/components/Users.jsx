'use client';
import Link from "next/link";

const Users = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <div key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md">
            <div className="flex justify-end ">
              <img src={user.avatar} className="rounded-full w-12" />
            </div>
            <div>
              <h2 className="font-bold">{user.first_name} {user.last_name}</h2>
              <p>E-mail: {user.email}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Users