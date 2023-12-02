import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { gapi, loadAuth2 } from "gapi-script";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/authSlice";

const GoogleAuth = () => {
    useEffect(() => {
        const setAuth2 = async () => {
            const auth2 = await loadAuth2(gapi, "559425720818-4k4q1hkc0dsrlk40ddrgvnoljja57psh.apps.googleusercontent.com", '')
            if (auth2.isSignedIn.get()) {
                console.log("signed in");
            } else {
                console.log("not signed in");
            }
        }
        setAuth2();
    }, []);

    const dispatch = useDispatch();
    const isSignedIn = useSelector(state => state.auth.isSignedIn);

    const ggLogin = useGoogleLogin({
        onSuccess: (response) => dispatch(login()),
        onError: (error) => console.log('Login Failed:', error)
    });

    const ggLogout = () => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            dispatch(logout())
        });
    }

    return (
        <div className="container mt-2" style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h2 className="mb-2 text-primary">Google Login</h2>
            {
                isSignedIn
                    ? (
                        <button className="btn btn-info" onClick={() => ggLogout()}>Sign out</button>
                    )
                    : (
                        <button className="btn btn-info" onClick={() => ggLogin()}>Sign in with Google 🚀 </button>
                    )
            }
        </div>
    )
}

export default GoogleAuth;