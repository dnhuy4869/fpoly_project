import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice";

const Counter = () => {
    const currCount = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <div className="" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "48px"
            }}>
                <h1>{currCount}</h1>
                <div className="" style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    gap: "8px"
                }}>
                    <button className="btn btn-info p-2" style={{minWidth: "100px", color: "white",}}
                        onClick={() => dispatch(decrement())}>-</button>
                    <button className="btn btn-info p-2" style={{minWidth: "100px", color: "white",}}
                        onClick={() => dispatch(increment())}>+</button>
                    <button className="btn btn-info p-2" style={{minWidth: "100px", color: "white",}}
                        onClick={() => dispatch(reset())}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter;