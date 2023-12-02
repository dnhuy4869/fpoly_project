import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import songsReducer from './redux/songSlice';
import { Provider } from 'react-redux';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from "./redux/loggerMiddleware";
import counterReducer from "./redux/counterSlice";
import postReducer from "./redux/postSlice";

const store = configureStore({
    reducer: {
      songs: songsReducer,
      counter: counterReducer,
      posts: postReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);