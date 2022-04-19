import { Link } from "react-router-dom";

const BlogList = ({blogs,title,handleDelete}) => {
    //const blogs = props.blogs;
    //const title = props.title;
    return ( <div className="BlofList">
        <h1>{title}</h1>
        {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <Link to={`/blog/${blog.id}`}>
          <p>Written by { blog.author }</p>
          </Link>
         <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
        
        
        </div> 
        
        );
}
 
export default BlogList;