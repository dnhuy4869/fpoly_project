import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        //console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await getPosts();
    return response;
});

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: 'idle',
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
          // Add user to the state array
          state.posts = action.payload;
          state.status = 'done'
        })
    },
})

export const {  } = postSlice.actions;
export default postSlice.reducer;