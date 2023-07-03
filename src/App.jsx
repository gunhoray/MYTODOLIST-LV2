import React from "react";
import "./App.css";
import Router from "./shared/Router";

function App() {
 
    return (
        <div className="centered-container">
            <div className="wholebox">
                <div className="titleofpage">
                    <h1 className="title">
                        MY TO-DO LIST<span className="subtitle">react</span>
                    </h1>
                </div>
                <Router />
            </div>
        </div>
    );
}
export default App;
