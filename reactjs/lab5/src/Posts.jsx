import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/postSlice";

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.posts);
    
    const postStatus = useSelector(state => state.posts.status)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [])

    //console.log(posts);

    return (
        <>
            <div className="container">
                {posts.map((post, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Posts;