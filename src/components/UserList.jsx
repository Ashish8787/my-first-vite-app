import React from "react";
import { useEffect, useState } from "react";



function UserList() {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(()=> {
        console.log('Fetching users...')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log('Response status:', res.status)
            return res.json()
        })
        .then(data => {
            console.log('Users data:', data)
            setUsers(data)
        })
        .catch(err => {
            console.error('Error fetching users:', err)
        })
    }, [])

    useEffect(() => {
        console.log('Users state:', users)
        console.log('Search term:', searchTerm)
        const filtered = users.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
        )
        console.log('Filtered users:', filtered)
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
            {/* {filteredUsers.map((user) => 
            <div key={user.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '4px' }}>
                <h4>{user.name}</h4>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
            </div>
            )} */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) =>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
    
export default UserList;
    