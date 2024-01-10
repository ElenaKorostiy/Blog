import { useDispatch } from "react-redux";
import React from 'react';
import { Link } from 'react-router-dom';
import { addLike } from "../store/blogSlice";
import { addThumbsUp } from "../store/blogSlice";


import './Poststyle.css';

export const Post = ({ post}) => {

const dispatch = useDispatch();
const onLike = (id) => () => { 
    dispatch(addLike({ id: id })); 
    };
const onThumbsUp = (id) => () => { 
    dispatch(addThumbsUp({ id: id })); 
    };


   return (
     <div className="post-container">
       <div className="reaction-buttons">
        <button onClick={onLike(post.id)}>
          ❤️ {post.likes===0 ? '': post.likes}
        </button>
        <button onClick={onThumbsUp(post.id)}>
          👍 {post.thumbsUp===0 ? '': post.thumbsUp}
        </button> 
      </div>
      <Link to={post.url} className="bloglink">
              <button className="go-to-blog-button">Go to Blog</button>
      </Link>
    </div>
  );
};