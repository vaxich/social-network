import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../Redux/profile-reduser";
import { withRouter } from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component<any, any>{

    componentDidMount(): void {
        let userId = this.props.match.params.userID;
        if(!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render () {



        return (
            <div>
                <Profile  {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>

            </div>
        )
    }

}


let mapStateToProps = (state:any) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status


    }
)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter

)(ProfileContainer);




