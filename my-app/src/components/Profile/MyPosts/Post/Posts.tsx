import React from "react";
import style from "./Post.module.css";

type PropsType = {
    message: string
}

const Post = (props:PropsType) => {
    return (
        <div>
            <div className={style.item}>
                <img src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png" alt="" />
                {props.message}

                <div>
                    <span>like</span>
                </div>
            </div>

        </div>



    )
}

export default Post;