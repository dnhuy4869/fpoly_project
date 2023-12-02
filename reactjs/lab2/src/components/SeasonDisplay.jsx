import React, { useState } from 'react';

const SeasonDisplay = () => {
    const [currPosition, setCurrPosition] = useState({});

    window.navigator.geolocation.getCurrentPosition((position) =>{
        console.log(position);
        //setCurrPosition(position);
    })

    return (
        <>
            Latitude: 
        </>
    )
}

export default SeasonDisplay;