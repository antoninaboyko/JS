import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SinglePost = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            if(!data.id){
                navigate('/posts')
                return
            } setPosts(data)
        })
    },[id, navigate])
  return (
    <div>
        {posts && (
            <>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
            </>
        )}
    </div>)}
export default SinglePost;