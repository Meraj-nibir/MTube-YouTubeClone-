import React, { useEffect, useState } from "react";
import "./feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=BD&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_URL)
      .then(response => response.json())
      .then(data => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {Array.isArray(data) &&
        data.map((item, index) => (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            key={item.id}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="Video thumbnail" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} Views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        ))}
    </div>
  );
};

export default Feed;
