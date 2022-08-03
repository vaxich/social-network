import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { getAuthUserData} from "../Redux/auth-Reduser";


class HeaderContainer  extends React.Component<any>   {

    componentDidMount(): void {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);