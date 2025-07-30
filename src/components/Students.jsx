function Students({ students }) {
    return (
        <div>
            <h1 style={{textAlign: "center", margin: "20px", fontSize: "20px", fontWeight: "bold"}}>Students Details</h1>
            
                <table style={{border: "1px solid black", width: "100%", margin: "20px", textAlign: "center", borderRadius: "10px", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)"}}>
                    <thead style={{backgroundColor: "black", color: "white"}}>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>

                    <tbody>
                    {students.map((student) =>
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
         
        </div>
    )
}
export default Students;