import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import About from "./Components/About";

const App = () => {
  return (
    <div>
      <nav className="flex  justify-center gap-9 mt-10">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
  
    </div>
  );
};

export default App;
