import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";

const MyPosts = () => {
    let postsData = [
        {id:1, message:"hello",likesCount:12},
        {id:2, message:"how are you", likesCount:3}
        
    ]

    return (
        <div>
            <div>
                <h3> My posts</h3>
            </div>
            <div>
                <div>
                    <textarea name="" id="" ></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.description__block}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>



    )
}

export default MyPosts;