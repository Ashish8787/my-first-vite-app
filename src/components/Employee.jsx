
function Employee({empData}) {
    const tableStyles = {
        container: {
            padding: "20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh"
        },
        header: {
            textAlign: "center",
            color: "#2c3e50",
            marginBottom: "30px",
            fontSize: "2.5rem",
            fontWeight: "300",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            margin: "0 auto",
            maxWidth: "1400px"
        },
        thead: {
            backgroundColor: "#3498db",
            color: "white"
        },
        th: {
            padding: "16px 12px",
            textAlign: "left",
            fontWeight: "600",
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            borderBottom: "2px solid #2980b9"
        },
        tbody: {
            backgroundColor: "white"
        },
        tr: {
            borderBottom: "1px solid #ecf0f1",
            transition: "all 0.3s ease"
        },
        trHover: {
            backgroundColor: "#f8f9fa",
            transform: "scale(1.01)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        },
        td: {
            padding: "16px 12px",
            fontSize: "14px",
            color: "#2c3e50",
            verticalAlign: "middle"
        },
        image: {
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #3498db",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "transform 0.3s ease"
        },
        department: {
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
        },
        itDept: {
            backgroundColor: "#e8f5e8",
            color: "#27ae60"
        },
        hrDept: {
            backgroundColor: "#fff3cd",
            color: "#f39c12"
        },
        salary: {
            fontWeight: "600",
            color: "#27ae60"
        },
        gender: {
            padding: "4px 8px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "uppercase"
        },
        male: {
            backgroundColor: "#e3f2fd",
            color: "#1976d2"
        },
        female: {
            backgroundColor: "#fce4ec",
            color: "#c2185b"
        }
    };

    return (
        <div style={tableStyles.container}>
            <h1 style={tableStyles.header}>Employee Directory</h1>
            <table style={tableStyles.table}>
                <thead style={tableStyles.thead}>
                    <tr>
                        <th style={tableStyles.th}>S.No</th>
                        <th style={tableStyles.th}>Name</th>
                        <th style={tableStyles.th}>Age</th>
                        <th style={tableStyles.th}>Email</th>
                        <th style={tableStyles.th}>Phone</th>
                        <th style={tableStyles.th}>Address</th>
                        <th style={tableStyles.th}>Image</th>
                        <th style={tableStyles.th}>Department</th>
                        <th style={tableStyles.th}>Salary</th>
                        <th style={tableStyles.th}>DOB</th>
                        <th style={tableStyles.th}>Gender</th>
                    </tr>
                </thead>
                <tbody style={tableStyles.tbody}>
                    {empData.map((emp, index) => (
                        <tr 
                            key={index} 
                            style={{
                                ...tableStyles.tr,
                                backgroundColor: index % 2 === 0 ? "white" : "#f8f9fa"
                            }}
                            onMouseEnter={(e) => {
                                e.target.parentElement.style.backgroundColor = "#e3f2fd";
                                e.target.parentElement.style.transform = "scale(1.01)";
                                e.target.parentElement.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.parentElement.style.backgroundColor = index % 2 === 0 ? "white" : "#f8f9fa";
                                e.target.parentElement.style.transform = "scale(1)";
                                e.target.parentElement.style.boxShadow = "none";
                            }}
                        >
                            <td style={{...tableStyles.td, fontWeight: "600"}}>{index + 1}</td>
                            <td style={{...tableStyles.td, fontWeight: "600"}}>{emp.name}</td>
                            <td style={tableStyles.td}>{emp.age}</td>
                            <td style={{...tableStyles.td, color: "#3498db"}}>{emp.email}</td>
                            <td style={tableStyles.td}>{emp.phone}</td>
                            <td style={tableStyles.td}>{emp.address}</td>
                            <td style={tableStyles.td}>
                                <img 
                                    src={emp.image} 
                                    alt={`${emp.name}'s profile`}
                                    style={tableStyles.image}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "scale(1.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "scale(1)";
                                    }}
                                />
                            </td>
                            <td style={tableStyles.td}>
                                <span style={{
                                    ...tableStyles.department,
                                    ...(emp.department === "IT" ? tableStyles.itDept : tableStyles.hrDept)
                                }}>
                                    {emp.department}
                                </span>
                            </td>
                            <td style={{...tableStyles.td, ...tableStyles.salary}}>
                                ${emp.salary.toLocaleString()}
                            </td>
                            <td style={tableStyles.td}>{emp.dob}</td>
                            <td style={tableStyles.td}>
                                <span style={{
                                    ...tableStyles.gender,
                                    ...(emp.gender === "Male" ? tableStyles.male : tableStyles.female)
                                }}>
                                    {emp.gender}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                 </div>
     )
 }
export default Employee;