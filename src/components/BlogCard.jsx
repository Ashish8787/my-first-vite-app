function BlogCard({blogs}) {
    if(blogs.length === 0) {
        return <p>No blogs found</p>
    }
    return (
        <div>
            <h1>Blog Card</h1>
            {blogs.map((blog, index) => (
               <div
               key={index}
               style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}
             >
               <h3>{blog.title}</h3>
               <p>{blog.summary}</p>
               <p><strong>Date:</strong> {blog.date}</p>
               <p><strong>Author:</strong> {blog.author}</p>
             </div>
            ))}
        </div>
    )
    // return (
    //     <div style={{display: 'flex', border: '1px solid gray', padding: '10px', margin: '10px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    //         <h1 style={{color: 'red', fontSize: '2rem', fontWeight: 'bold'}}>Blog Card</h1>
    //         <h4 style={{color: 'blue', fontSize: '1.5rem', fontWeight: 'bold'}}>Title: {props.title}</h4>
    //         <h6 style={{color: 'green', fontSize: '1.2rem', fontWeight: 'bold'}}>Author: {props.author}</h6>
    //         <p style={{color: 'black', fontSize: '1rem', fontWeight: 'bold'}}>Date: {props.date}</p>
    //         <p style={{color: 'black', fontSize: '1rem', fontWeight: 'bold'}}>Summary: {props.summery}</p>
    //     </div>
    // );
}
export default BlogCard;