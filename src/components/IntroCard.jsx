function IntroCard({stdDetails}) {
    if(stdDetails.length === 0) {
      return <p>No student details found</p>
    }
    return (
      <div style={{ marginTop: 50, textAlign: "center" }}>
        <h1>Student Details</h1>
        {stdDetails.map((stdDetails, index) => (
          <div key={index} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
            <h3>{stdDetails.name}</h3>
            <p>{stdDetails.email}</p>
            <p>{stdDetails.phone}</p>
          </div>
        ))}
      </div>
    )
  }
  export default IntroCard;