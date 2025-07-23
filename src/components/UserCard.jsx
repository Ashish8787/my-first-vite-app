function UserCard(props) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px',alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <h1>User Card</h1>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    );
}

export default UserCard;