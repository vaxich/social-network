import React from "react";
import { postType } from "../../..";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";

type MyPostsPropsType = {
    posts:  Array<postType>
}

const MyPosts = (props: MyPostsPropsType) => {

let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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
                {postsElements}
            </div>
        </div>



    )
}

export default MyPosts;