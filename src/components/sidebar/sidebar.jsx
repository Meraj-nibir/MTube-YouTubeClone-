import React from 'react';
import './sidebar.css';
import home from "../../assets/Icons/home.png";
import game_icon from "../../assets/Icons/game.png";
import automobiles from "../../assets/Icons/automobiles.png";
import sports from "../../assets/Icons/sports.png";
import entertainment from "../../assets/Icons/entertainment.png";
import tech from "../../assets/Icons/tech.png";
import music from "../../assets/Icons/music.png";
import blog from "../../assets/Icons/blog.png";
import news from "../../assets/Icons/news.png";
import mime from "../../assets/Images/mime.png";
import riolu from "../../assets/Images/riolu.png";
import greninja from "../../assets/Images/greninja.png";

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className="side-link" onClick={()=> setCategory(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className="side-link" onClick={()=> setCategory(0)}>
                <img src={game_icon} alt="" /><p>Games</p>
            </div>
            <div className="side-link" onClick={()=> setCategory(0)}>
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className="side-link" onClick={()=> setCategory(0)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className="side-link" onClick={()=> setCategory(0)}>
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className="side-link" onClick={()=> setCategory(0)}>
                <img src={tech} alt="" /><p>Technologies</p>
            </div>
            <div className="side-link" onClick={()=> setCategory(0)}>
                <img src={music} alt="" /><p>Musics</p>
            </div>
            <div className="side-link" onClick={()=> setCategory(0)}>
                <img src={blog} alt="" /><p>Blogs</p>
            </div>
            <div className="side-link" onClick={()=> setCategory(0)}>
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={riolu} alt="Riolu" /><p>Riolu</p>
            </div>
            <div className="side-link">
                <img src={greninja} alt="Greninja" /><p>Greninja</p>
            </div>
            <div className="side-link">
                <img src={mime} alt="Mr.Mime" /><p>Mr.Mime</p>
            </div>
        </div>
    </div>
  )
} 
export default Sidebar;