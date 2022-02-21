import React from "react";
import { postType } from "./../../Redux/state";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";
import {type} from "os";

type newPostElementTypr = any

type MyPostsPropsType = {
    posts:  Array<postType>
    newPostText:string
    dispatch:any

}

const MyPosts = (props: MyPostsPropsType) => {

let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

let newPostElement:any = React.createRef();

let addPost =()=> {
    let text = newPostElement.current.value;
     //props.addPost(text);
    //props.updateNewPostText("")
    props.dispatch({type: "ADD-POST"});
}


let onPostChange =() => {
    let newText = newPostElement.current.value;
    //props.updateNewPostText(text)
    let action = {type:"UPDATE-NEW-POST-TфEXT", newText};
    props.dispatch(action);

    }

    return (
        <div>
            <div>
                <h3> My posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref= {newPostElement} value={props.newPostText}/>
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