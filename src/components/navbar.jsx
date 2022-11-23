import React from "react"
import logo from '../logo.svg'
import "./index.css"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "" : "light"}>
            <img src = {logo} />
            <h1>ReactFacts</h1>
            <div className="toggler" onClick={props.toggleDarkMode}>
                {props.darkMode ? "Light" : "Dark"}
            </div>
        </nav>
    ) 
}