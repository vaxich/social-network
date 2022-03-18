import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { postType } from "../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store:  any


}

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            
            <MyPostsContainer

                      />
            
            

        </div>
    )
}

export default Profile;