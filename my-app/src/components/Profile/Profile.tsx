import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { postType } from "../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props:any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;