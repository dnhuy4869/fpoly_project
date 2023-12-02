import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSong } from "../redux/songSlice";

const SongList = () => {
    const songs = useSelector((state) => state.songs.songs);
    const dispatch = useDispatch();

    return (
        <>
            <div className="" style={{
                minWidth: "400px",
            }}>
                {
                    songs.map((song, index) => {
                        return (
                            <div className="" key={index}>
                                <div className="" style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}>
                                    <h5>{song.title}</h5>
                                    <button className="btn btn-info p-2" style={{
                                        color: "white",
                                        minWidth: "110px",
                                    }} onClick={() => { dispatch(selectSong(song)) }}>Select</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SongList;