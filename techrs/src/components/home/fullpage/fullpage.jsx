import React from "react";
import { BrowserRouter, Routes, Route } from "react-dom";
import Navbar from "../navbar/Navbar"
import "./fullpage.css";

function fullpage() {

return(

    <>

    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
    
    </>

);

}

export default fullpage;