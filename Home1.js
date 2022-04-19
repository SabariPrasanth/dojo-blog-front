import { useState,useEffect } from "react"
import BlogList from "./BlogList"
const Home1 = () => {
    const [name,setName] = useState("click me!")
    const [name1,setName1] = useState("sabari")
    const [blogs, setBlogs] = useState(null)
    const [ispending, setPending] = useState(true)

    const handlClick = (e) =>{
        setName('clicked')
        console.log("clicked", e);
    }
    const handlClickAgain = (hello,e) =>{
        console.log("clicked "+ hello, e);
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => id!==blog.id)
        setBlogs(newBlogs)
    }
    useEffect(() =>{
         fetch('http://localhost:8000/blogs') 
            .then(res => {
                if(!res.ok) throw Error("Server is failed to connect");
                else return res.json();})
            .then(data => {
                setBlogs(data)
                setPending(false)
            })
            .catch(err =>{
                console.log("error connecting server");
            })
    },[])

    return ( 
        <div>
            <div className="Home">Home Page</div>
            <button onClick={handlClick}>{name}</button>
            <button onClick={(e) => handlClickAgain("hello",e)}>click me!</button>
        
            {ispending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>}

             { blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Bolg" handleDelete = {handleDelete}/>}

            <button onClick={()=>setName1("prasanth")}> check useEffect </button>
                <p>{name1}</p>

</div>        

     );
}
 
export default Home1;