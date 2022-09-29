import React from "react";
import style from "./ProfileInfo.module.css";


type PropsProfileStatusType = {
    status: string
    updateStatus: (status:string)=>void
}

class ProfileStatus extends React.Component <PropsProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode =()=> {
        this.setState(
            {editMode: true}
        )
    }
    deActivateEditMode =()=> {
        this.setState(
            {editMode: false}
        );
        this.props.updateStatus(this.state.status);
    }

    onStatusChange =(e:any)=> {
        this.setState(
            {
                status: e.currentTarget.value
            }

        )

    }

    componentDidUpdate(prevProps: Readonly<{status:string}>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----" }</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}>{this.props.status}</input>
                    </div>
                }

            </div>
        )
    }


}

export default ProfileStatus;