import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {render} from "react-dom";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, setAuthUserData} from "../Redux/auth-Reduser";

class HeaderContainer  extends React.Component<any>   {

    componentDidMount(): void {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {withCredentials:true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        return (
            <Header  {...this.props} />
        )
    }

}

const mapStateToProps = (state:any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);