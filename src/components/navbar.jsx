import React from "react"
import logo from '../logo.svg'
import "./index.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src = {logo} />
            <h1>ReactFacts</h1>
            <div>React Course - Project 1</div>
        </nav>
    )
}