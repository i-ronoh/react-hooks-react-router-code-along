import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Navbar from "./NavLink";

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/about" element={<About />} />
                    <Route pexact ath="/login" element={<Login />} />
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;