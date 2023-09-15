import Content from "../components/Content.jsx";
import { useGetPostsQuery } from "../reducers/posts.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function PostDetails({ post }) {
   
    return (
        <div className='post'>
            <h3>{post.title}</h3>
            <p>Description: {post.description}</p>
            <p>Price: {post.price}</p>
            <p className="lastEle">Posted By: {post.author.username}</p>
            <Link to={`/posts/${post._id}`}>View Post Details</Link>
        </div>
    );
}


function PostsPage(){

    const {data, isLoading} = useGetPostsQuery();

    const [input, setInput] = useState("");

    return (
        <>
            <Content>
                <div className="searchBar">
                <h3 className="searchHeader">Search Posts</h3>
                <input className="searchInput"
                    type={"text"}
                    placeholder="Search..."
                    onChange={(event) => setInput(event.target.value)}
                />
                </div>
                {isLoading ? <h1>Is Loading....</h1> : input.trim().length > 0 ? data.data.posts.filter(post => post.title.includes(input)).map((post, idx) => 
                    <PostDetails key={idx} post={post} />) : data.data.posts.map((post, idx) => 
                    <PostDetails key={idx} post={post} />)
                }
            </Content>
        </>

    )

}

export default PostsPage;