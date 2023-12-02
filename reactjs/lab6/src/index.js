import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./redux/authSlice";
import { Provider } from 'react-redux';

const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GoogleOAuthProvider clientId='559425720818-4k4q1hkc0dsrlk40ddrgvnoljja57psh.apps.googleusercontent.com'>
                <App />
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>
);