import React from "react";
import style from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/preloader/Preloader";
import styles from "../../../Users/users.module.css";
import userPhoto from "../../../../assets/images/avatar.png";

const ProfileInfo = (props:any) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            <div className={style.description__block}>
                <img className={styles.userPhoto} src={props.photoUrl?.large ? props.photoUrl?.large : userPhoto} />
                ava + deckription
            </div>
            
            

        </div>
    )
}

export default ProfileInfo;