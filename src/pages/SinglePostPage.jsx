import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "../reducers/posts";
import { Link } from "react-router-dom";


function SinglePostPage(){
    
    const { id } = useParams();
    const {data, isLoading} = useGetPostsQuery();
    
    const singlePost = data.data.posts.find(post => post._id === id);

      return (
        <div className="singlePost">
          <div className="postData">
            {isLoading ? <h1>Is Loading...</h1> : <>
              <h1>{singlePost.title}</h1>
              <p>Description: {singlePost.description}</p>
              <p>Price: {singlePost.price}</p>
              <p className="lastEle">Posted By: {singlePost.author.username}</p>
              <Link to={'/'}>BACK</Link>
            </>}
          </div>
        </div>
      );
    }

export default SinglePostPage;


