import React from "react";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import VideoPlay from "./pages/videoPlay/videoPlay";
const App=()=>{
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videoPlay/:categoryID/:videoId" element={<VideoPlay />} />
      </Routes>
    </div>
  );
}

export default App;