import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea name="" id="" ></textarea>
                <button>Add post</button>
            </div>
            <div>
            <Post message="Hi, how are you" />
            <Post message="this is my first post"/>
            </div>
        </div>
            
            
            
    )
}

export default MyPosts;