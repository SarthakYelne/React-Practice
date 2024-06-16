import React from "react";
import Headers from "./Components/Headers";
import Counter from "./Components/Counter";
import "./Counter.css";


function Hello() {
    return(
        <>
        <div className="main">
            <Headers />
            <Counter />
        </div>
        </>
    )
}

export default Hello;