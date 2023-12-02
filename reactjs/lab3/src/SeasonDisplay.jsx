import React, { useEffect, useState } from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
    summer: {
        text: "Too hot, i need Vitamin C",
        iconName: 'sun',
    },
    winter: {
        text: "Oh my god, it's so cool",
        iconName: 'snowflake',
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    }
    else {
        return lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = () => {
    const [latitude, setLatitude] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude);
                console.log(position);
            },
            error => {
                setError(error.message);
                console.log(error);
            }
        )

        return () => { }
    }, []);

    const season = getSeason(latitude, new Date().month);
    const { text, iconName } = seasonConfig[season];

    const randomLatitue = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const getComponent = () => {
        return (
            <div className={`season-display ${season}`}>
                <i className={`icon-left fa-solid fa-${iconName}`}></i>
                <div className="flex">
                    <h1>{text}</h1>
                    <button className="button" onClick={() => setLatitude(randomLatitue(-100, 100).toFixed(2))}>Random latitude</button>
                    <h1>Latitude: {latitude}</h1>
                </div>
                <i className={`icon-right fa-solid fa-${iconName}`}></i>
            </div>
        )
    }

    return (
        <>
            {
                getComponent()
            }
        </>
    )
}

export default SeasonDisplay;