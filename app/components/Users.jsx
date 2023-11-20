"use client"
import Link from 'next/link'
import React from 'react'

function users({ users }) {
  return (
    <ul>
      {users.map(users => (
        <Link 
          key={users.id}
          href={`/users/${users.id}`}
        >
          
             <li className="bg-slate-400 mb-2 
                              p-4 rounded-md flex justify-between"
        onClick={() => {
            alert(users.id)
        }}
        >
            <div>
                <h5 className="font-semibold">{users.id} {users.first_name} {users.last_name}</h5>
            <p className="text-slate-100">email: {users.email}</p> 
            </div>
          
          <img src={users.avatar} alt=""  className="rounded-full w-20"/>
       </li>
        </Link>
      
      ))}
    </ul>
  )
}

export default users
