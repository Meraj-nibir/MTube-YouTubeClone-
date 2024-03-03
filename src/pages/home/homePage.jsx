import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import './homePage.css' ;
import Feed from "../../components/feed/feed";
const HomePage=({sidebar})=>{
  return(
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed />
      </div>
    </>
  )
}

export default HomePage;