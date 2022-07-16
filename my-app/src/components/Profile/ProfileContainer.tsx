import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { postType } from "../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profile-reduser";
import { withRouter } from "react-router-dom";

type ProfilePropsType = {
    store:  any


}

class ProfileContainer extends React.Component<any, any>{

    componentDidMount(): void {
        let userId = this.props.match.params.userID;
        if(!userId) {
            userId = 2
        }
        console.log(userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);

        });
    }

    render () {
        return (
            <div>
                <Profile  {...this.props} profile={this.props.profile} />

            </div>
        )
    }

}

let mapStateToProps = (state:any) => ({
        profile: state.profilePage.profile
    }
)

let WithUrlDataContainerComponent =  withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);