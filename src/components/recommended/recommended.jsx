import React, { useEffect, useState } from 'react';
import './recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link, useParams } from 'react-router-dom';



const Recommended = () => {
  
  const {categoryId} = useParams();

  const [apiData, setApiData] = useState(null);

  const fetchRecomendedVideo = async () => {
    const recommendedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=55&regionCode=BD&key=${API_KEY}`;
    await fetch(recommendedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  }

  useEffect(() => {
    fetchRecomendedVideo();
  }, [categoryId]);




  return (
    <div className='recommended'>
      {apiData && apiData.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div className="video-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} view</p>
          </div>
        </Link>
      ))}

    </div>
  );
}

export default Recommended;