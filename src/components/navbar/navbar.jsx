import React from "react";
import './navbar.css';
import dot_menu from '../../assets/Icons/menu.png';
//import logo from '../../assets/Icons';
import search_icon from '../../assets/Icons/search.png';
import upload_icon from '../../assets/Icons/upload.png';
import more_icon from '../../assets/Icons/more.png';
import notification_icon from '../../assets/Icons/notification.png';
import profile_icon from '../../assets/Icons/profile.png';
const Navbar=({setsidebar})=>{
  return(
    <nav className="flex-div">
        <div className="nav-left flex-div">
            <img className="menu-icon" onClick={()=>setsidebar(prev=>prev===false?true:false)} src={dot_menu} alt="Menu" />
            <img className="logo" src="" alt="Logo" />
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder="Search" />
                <img src={search_icon} alt="Search" />
            </div>
        </div>
        <div className="nav-right flex-div">
            <img src={upload_icon} alt="Upload" />
            <img src={notification_icon} alt="Notifications" />
            <img src={more_icon} alt="More" />
            <img src={profile_icon} className="profile-icon" alt="Profile" />
        </div>
    </nav>
  );
}

export default Navbar;