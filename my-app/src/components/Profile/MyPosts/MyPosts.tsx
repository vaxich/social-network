import React from "react";
import {postType} from "../../Redux/store";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";
import {type} from "os";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reduser";

type newPostElementTypr = any

type MyPostsPropsType = {
    posts: Array<postType>
    newPostText: string
    updateNewPostText: any
    addPost:any

}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement: any = React.createRef();

    let onAddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText("")

    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)


    }

    return (
        <div>
            <div>
                <h3> My posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.description__block}>
                {postsElements}
            </div>
        </div>


    )
}

export default MyPosts;