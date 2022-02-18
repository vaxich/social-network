import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { postType } from "./../Redux/state";

type ProfilePropsType = {
    profilePage:  any
    dispatch: any

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                      />
            
            

        </div>
    )
}

export default Profile;