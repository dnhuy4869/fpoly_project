import React from "react";

const Bai3 = () => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return (
        <>
            <h6>Current time</h6>
            <b>{time}</b>
        </>
    )
}

export default Bai3;