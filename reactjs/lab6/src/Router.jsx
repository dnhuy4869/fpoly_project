import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import StreamList from "./components/streams/StreamList"
import StreamDelete from "./components/streams/StreamDelete";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <div className="container">
                    <div className="" style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}>
                        <Link to="/">List</Link>
                        <Link to="/create">Create</Link>
                        <Link to="/edit">Edit</Link>
                        <Link to="/delete">Delete</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<StreamList />} />
                        <Route path="/create" element={<StreamCreate />} />
                        <Route path="/edit" element={<StreamEdit />} />
                        <Route path="/delete" element={<StreamDelete />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Router;