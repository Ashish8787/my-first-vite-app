import Employee from "./Employee";

function ShowEmpData() {
    const empData = [{
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        phone: "123-456-7890",
        address: "123 Main St, Anytown, USA",
        image: "https://i.pravatar.cc/150?img=1",
        department: "IT",
        salary: 100000,
        dob: "1990-01-01",
        gender: "Male",
    },
    {
        name: "Jane Doe",
        age: 25,
        email: "jane.doe@example.com",
        phone: "123-456-7890",
        address: "123 Main St, Anytown, USA",
        image: "https://i.pravatar.cc/150?img=2",
        department: "HR",
        salary: 80000,
        dob: "1995-01-01",
        gender: "Female",
    },
    {
        name: "Jim Beam",
        age: 35,
        email: "jim.beam@example.com",
        phone: "123-456-7890",
        address: "123 Main St, Anytown, USA",
        image: "https://i.pravatar.cc/150?img=3",
        department: "IT",
        salary: 120000,
        dob: "1985-01-01",
        gender: "Male",
    },
    {
        name: "Jill Johnson",
        age: 28,
        email: "jill.johnson@example.com",
        phone: "123-456-7890",
        address: "123 Main St, Anytown, USA",
        image: "https://i.pravatar.cc/150?img=4",
        department: "HR",
        salary: 90000,
        dob: "1992-01-01",
        gender: "Female",
    }]
    return (
        <div>
            <Employee empData={empData} />
        </div>
    )
}
export default ShowEmpData;