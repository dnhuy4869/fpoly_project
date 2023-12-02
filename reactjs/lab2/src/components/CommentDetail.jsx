import React from "react";
import "./CommentDetail.css";

const CommentDetail = ({ name, avatar, date, content }) => {
    //console.log(avatar);
    return (
        <>
            <div className="comment">
                <img className="image" src={avatar}/>
                <div className="">
                    <div className="name">
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}

export default CommentDetail;