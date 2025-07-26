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
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const filtered = users.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredUsers(filtered)
    }, [searchTerm, users])

    return (
        <div>
            <h2>User List</h2>
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    placeholder="Search users..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ 
                        padding: '8px 12px', 
                        fontSize: '16px', 
                        border: '1px solid #ccc', 
                        borderRadius: '4px',
                        width: '300px'
                    }}
                />
            </div>
            {filteredUsers.map((user) => 
            <div key={user.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '4px' }}>
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
    