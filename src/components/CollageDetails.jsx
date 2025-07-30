import Students from "./Students";

function CollageDetails({collage}) {
    return (
        <div>
            {collage.map((collage)=> 
            <div key={collage.id}>
                <h1>Name : {collage.name}</h1>
                <p>Description : {collage.description}</p>
                {/* <img src={collage.image} alt={collage.name} /> */}
                <Students students={collage.students} />
            </div>
            )}
        </div>
    )
}
export default CollageDetails;
