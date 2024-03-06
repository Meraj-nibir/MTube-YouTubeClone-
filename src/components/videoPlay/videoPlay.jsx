import React, { useEffect, useState } from "react";
import share from '../../assets/Icons/share.png';
import like from '../../assets/Icons/like.png';
import dislike from '../../assets/Icons/dislike.png';
import download from '../../assets/Icons/download.png';
import './videoPlay.css';
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from 'react-router-dom';

const VideoPlay = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  const fetchVideoData = async () => {
    const videoDtails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDtails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    if (apiData) {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      await fetch(channelData_url)
        .then((res) => res.json())
        .then((data) => setChannelData(data.items[0]));
    }
  };

  const fetchVideoComment = async () => {
    if (apiData) {
      const videoComment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
      await fetch(videoComment_url)
        .then((res) => res.json())
        .then((data) => setCommentData(data.items));
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      fetchChannelData();
      fetchVideoComment();
    }
  }, [apiData]);


  return(
    <div className="play-video">
       {/*<video src={animatedCar} controls autoPlay muted></video>*/}
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameByorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <h3>{apiData?apiData.snippet.title:"title here"}</h3>
       <div className="play-video-info">
          <p>
            {apiData?value_converter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}
          </p>
          <div>
            <span><img src={like} alt="Like" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
            <span><img src={dislike} alt="Dislike" /></span>
            <span><img src={download} alt="Download" />Save</span>
            <span><img src={share} alt="Share" />Share</span>
          </div>
       </div>
       <hr />
       <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="Publisher" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
       </div>
       <div className="video-description">
          <p>{apiData?apiData.snippet.description.slice(0,600):"Description"}</p>
          <hr />
          <h4>{apiData?value_converter(apiData.statistics.commentCount):111} Comments</h4>
          {commentData && commentData.map((item,index)=>{
            return(
              <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="Profile Icon" />
                <div>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className="comment-action">
                    <img src={like} alt="Like" /><span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="Dislike" /><span>12</span>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
    </div>
  );
}

export default VideoPlay;