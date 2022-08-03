import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../Redux/profile-reduser";
import { withRouter } from "react-router-dom";
import Redirect from "react-router-dom"


class ProfileContainer extends React.Component<any, any>{

    componentDidMount(): void {
        let userId = this.props.match.params.userID;
        if(!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId);
    }

    render () {

        //if (!this.props.isAuth ) return <Redirect to="/login" />

        return (
            <div>
                <Profile  {...this.props} profile={this.props.profile} />

            </div>
        )
    }

}

let mapStateToProps = (state:any) => ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
)
//
// type mapStateToPropsType = {
//     profile: usersType ,
//     isAuth: boolean
// }


let WithUrlDataContainerComponent =  withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);