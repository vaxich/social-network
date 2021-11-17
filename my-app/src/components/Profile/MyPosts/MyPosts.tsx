import React from "react";
import { postType } from "./../../Redux/state";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";

type newPostElementTypr = any

type MyPostsPropsType = {
    posts:  Array<postType>
    addPost:any
}

const MyPosts = (props: MyPostsPropsType) => {

let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

let newPostElement:any = React.createRef();

let addPost =()=> {
    let text = newPostElement.current.value;
    console.log(text);
    
    props.addPost(text);
    newPostElement.current.value = "";
}


    return (
        <div>
            <div>
                <h3> My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref= {newPostElement} ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.description__block}>
                {postsElements}
            </div>
        </div>



    )
}

export default MyPosts;