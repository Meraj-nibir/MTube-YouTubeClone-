import React, { useEffect, useState } from 'react';
import './recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';



const Recommended = ({categoryId}) => {

  const [apiData, setApiData] = useState(null);

  const fetchRecomendedVideo = async()=>{
    const recommendedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2contentDetails%2statistics&chart=mostPopular&maxResults=50&regionCode=BD&videoCategoryId=${categoryId}&key=${API_KEY} `;
    await fetch(recommendedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  }

  useEffect(() => {
    fetchRecomendedVideo();
  }, []);




  return (
    <div className='recommended'>
      {apiData && apiData.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div className="video-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.snippet.viewCount)} view</p>
          </div>
        </Link>
      ))}

    </div>
  );
}

export default Recommended;