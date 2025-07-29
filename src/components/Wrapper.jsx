function Wrapper({children}) {
    return(
        <div style={{backgroundColor: "red", padding: "20px", borderRadius: "10px", margin: "10px"}}>
            {children}
        </div>
    )
}
export default Wrapper;