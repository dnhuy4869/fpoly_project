import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "songs",
    initialState: {
        songs: [
            { title: "No Scrubs", duration: "4:05" },
            { title: "Macarena", duration: "2:30" },
            { title: "All Star", duration: "3:15" },
            { title: "I Want It That Way", duration: "1:45" },
        ],
        selectedSong: null,
    },
    reducers: {
        selectSong: (state, action) => {
            state.selectedSong = action.payload;
        }
    }
})

export const { selectSong } = songsSlice.actions;
export default songsSlice.reducer;