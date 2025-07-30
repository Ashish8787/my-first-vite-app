function UserCard(props) {
    const userData = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "123-456-7890"
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "jane.doe@example.com",
            phone: "123-456-7890"
        },
        {
            id: 3,
            name: "Jim Doe",
            email: "jim.doe@example.com",
            phone: "123-456-7890"
        },
        {
            id: 4,
            name: "Jill Doe",
            email: "jill.doe@example.com",
            phone: "123-456-7890"
        }
    ]
    return (
        <>
            <h1>
                User Card
            </h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => 
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                )}
                </tbody>

            </table>

        </>
    );
}

export default UserCard;