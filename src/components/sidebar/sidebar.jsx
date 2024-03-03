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


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="shortcut-links">
            <div className="side-link">
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className="side-link">
                <img src={game_icon} alt="" /><p>Games</p>
            </div>
            <div className="side-link">
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className="side-link">
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className="side-link">
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className="side-link">
                <img src={tech} alt="" /><p>Technologies</p>
            </div>
            <div className="side-link">
                <img src={music} alt="" /><p>Musics</p>
            </div>
            <div className="side-link">
                <img src={blog} alt="" /><p>Blogs</p>
            </div>
            <div className="side-link">
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscride-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src="" alt="jack" /><p>PewPewPew</p>
                <img src="" alt="jhon" /><p>Beast</p>
                <img src="" alt="albart" /><p>Mr.Mime</p>
            </div>
        </div>
    </div>
  )
} 
export default Sidebar;