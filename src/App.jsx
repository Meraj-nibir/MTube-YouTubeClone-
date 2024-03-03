import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import VideoPlay from "./pages/videoPlay/videoPlay";
const App=()=>{
  const [sidebar,setsidebar]= useState(true);
  return(
    <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path="/" element={<HomePage sidebar={sidebar} />} />
        <Route path="/videoPlay/:categoryID/:videoId" element={<VideoPlay />} />
      </Routes>
    </div>
  );
}

export default App;