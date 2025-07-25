import React from "react";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

function UserList() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>User List</h2>
            {users && users.map((user) => 
            <div key={user.id}>
                <h4>{user.name}</h4>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
            </div>
            )}
        </div>
    )
}
    
    export default UserList;
    