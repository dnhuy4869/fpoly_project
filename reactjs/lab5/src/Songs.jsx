import React from "react";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

const Songs = () => {
    return (
        <>
             <div className="container p-2" style={{
                display: "flex",
                alignItems: "center",
                gap: "46px"
            }}>
                <SongList />
                <SongDetail />
            </div>
        </>
    )
}

export default Songs;