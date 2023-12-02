import React from "react";
import "./ApprovalCard.css";

const ApprovalCard = ({ name, avatar, date, content }) => {
    return (
        <>
            <div className="card">
                <div className="card-name">
                    <img className="image" src={avatar} />
                    <div className="">
                        <div className="name">
                            <h3>{name}</h3>
                            <p>{date}</p>
                        </div>
                        <p className="content">{content}</p>
                    </div>
                </div>

                <div className="button-wrap">
                    <button class="transparent-button-green">Approve</button>
                    <button class="transparent-button-red">Reject</button>
                </div>
            </div>
        </>
    )
}

export default ApprovalCard;