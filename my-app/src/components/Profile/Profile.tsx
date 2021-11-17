import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { postType } from "./../Redux/state";

type ProfilePropsType = {
    posts:  Array<postType>
    addPost: any
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            
            <MyPosts posts={props.posts}  addPost={props.addPost} />
            
            

        </div>
    )
}

export default Profile;