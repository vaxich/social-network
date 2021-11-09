import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { postType } from "./../Redux/state";

type ProfilePropsType = {
    posts:  Array<postType>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            
            <MyPosts posts={props.posts} />
            
            

        </div>
    )
}

export default Profile;