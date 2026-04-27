import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

const App = () => {
  return <div className="h-screen w-full ">
    <Routes>
      <Route path="/" element={<Home/>}/>    
      <Route path="/Details" element={<Details/>}/>    
    </Routes>
  </div>
  
};

export default App;
