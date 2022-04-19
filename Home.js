
import BlogList from "./BlogList";
import useFetch from "./useFetch.js";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8080/api/v1/blog')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="List of Articles" /> }
    </div>
  );
}
 
export default Home;