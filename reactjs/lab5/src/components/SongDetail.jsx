import React from "react";
import { useSelector } from "react-redux";

const SongDetail = () => {
    const currSong = useSelector((state) => state.songs.selectedSong);

    return (
        <>
            {
                currSong 
                ? (
                    <div className="">
                        <h5>{currSong.title}</h5>
                        <p>Duration: {currSong.duration}</p>
                    </div>
                )
                : (
                    <p>No song selected</p>
                )
            }
        </>
    )
}

export default SongDetail;