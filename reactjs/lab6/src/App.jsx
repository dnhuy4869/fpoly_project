import React from "react";
import Router from "./Router";
import GoogleAuth from "./GoogleAuth";

const App = () => {
    return (
        <>
            <GoogleAuth />
            <Router />
        </>
    )
}

export default App;