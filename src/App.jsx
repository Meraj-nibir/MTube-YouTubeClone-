import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import Video from "./pages/video/video";
const App=()=>{
  const [sidebar,setsidebar]= useState(true);
  return(
    <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path="/" element={<HomePage sidebar={sidebar} />} />
        <Route path="/video/:categoryID/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;