import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import './homePage.css' ;
import Feed from "../../components/feed/feed";
const HomePage=({sidebar})=>{
  
  const [category,setCategory] = useState(0);
  
  return(
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default HomePage;