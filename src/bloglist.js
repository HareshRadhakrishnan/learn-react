const BlogList = ({blogs,title}) => {
    return (  
        <div>
            <h1>{title}</h1>
            {
                blogs.map((blog)=>( <div className="blog-preview" key={blog.id}>
                                    <h3>{blog.title}</h3>
                                    <h4>{blog.body}</h4>
                                    <p>{blog.author}</p>
                                    </div>))
                }
        </div>
    );
}
 
export default BlogList;