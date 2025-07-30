import CollageDetails from "./CollageDetails";

function Collage({ collage }) {
    const collageData = [
        {
            id: 1,
            name: "Collage 1",
            // image: "https://picsum.photos/150/150?random=1",
            description: "This is the first collage",
            students: [
                {
                    id: 1,
                    name: "John Doe",
                    age: 20,
                    gender: "Male",
                    email: "john.doe@example.com",
                    phone: "123-456-7890",
                },
                {
                    id: 2,
                    name: "Jane Doe",
                    age: 21,
                    gender: "Female",
                    email: "jane.doe@example.com",
                    phone: "123-456-7890",
                }

            ],
        },
        {
            id: 2,
            name: "Collage 2",
            // image: "https://picsum.photos/150/150?random=2",
            description: "This is the first collage",
            students: [
                {
                    id: 1,
                    name: "John Doe",
                    age: 20,
                    gender: "Male",
                    email: "john.doe@example.com",
                    phone: "123-456-7890",
                },
                {
                    id: 2,
                    name: "Jane Doe",
                    age : 21,
                    gender: "Female",
                    email: "jane.doe@example.com",
                    phone: "123-456-7890",
                }

            ],
        },
        {
            id: 3,
            name: "Collage 3",
            // image: "https://picsum.photos/150/150?random=3",
            description: "This is the first collage",
            students: [
                {
                    id: 1,
                    name: "John Doe",
                    age: 20,
                    gender: "Male",
                    email: "john.doe@example.com",
                    phone: "123-456-7890",
                },
                {
                    id: 2,
                    name: "Jane Doe",
                    age: 21,
                    gender: "Female",
                    email: "jane.doe@example.com",
                    phone: "123-456-7890",
                }

            ],
        }
    ]
    return (
        <div>
            <CollageDetails collage={collageData} />
        </div>
    )
}
export default Collage;