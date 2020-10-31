import React, {useEffect, useState }from 'react';
import db from "./firebase"
import './App.css';
import VideoCard from './VideoCard';

function App() {
  const [reels , setReels] = useState([]);

  useEffect(()=> {
    db.collection('reels').onSnapshot((snapshot) => (
      setReels(snapshot.docs.map((doc)=> doc.data()))
      ))
  }, [])
  return (
    <div className="App">
      
        <div className="app__top">
          <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/786px-Instagram_logo_2016.svg.png" alt="" />
        <h1> Reels </h1>
        {/* image at top - logo */}
         {/* Reels text */}
      </div>
      <div className="app__videos">
        {/* Container of app videos */}
      {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (  

        <VideoCard
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
          shares={shares} 
        /> 
      ))} 
      </div>
    </div>
  );
}

export default App;
