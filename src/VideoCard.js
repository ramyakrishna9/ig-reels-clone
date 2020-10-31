import React, { useState, useRef} from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({likes, url, avatarSrc, shares, channel, song }) {
    const [isVideoPlaying, setIsVideoPlaying] =
    useState(false);

    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(isVideoPlaying) {
          //stop
          videoRef.current.pause();
          setIsVideoPlaying(false);
        } else {
          //play 
          videoRef.current.play();
          setIsVideoPlaying(true);
        }
    };
    return(
        <div className="videocard">
            <VideoHeader />
            <video 
            ref = {videoRef}
            onClick ={onVideoPress}
            className="video__player" 
             src={url}
            alt="IG-reels-video"
            loop
            />
            <VideoFooter
            channel={channel}
            likes={likes}
            shares={shares}
            song={song}
            avatarSrc={avatarSrc}
             />
            

        </div>
    )
}

export default  VideoCard;