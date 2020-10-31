import React from 'react';
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './VideoFooter.css';

function VideoFooter({ channel, song, shares, avatarSrc, likes }) {
  return (
    <div className="videofooter">
        <div className="videofooter__text">
           <Avatar src={avatarSrc} />
           <h3>
               {channel} . <Button>Follow</Button>
           </h3>
        </div>
        <div className="videofooter__ticker">
            <MusicNoteIcon className="videofooter__icon"/>
            <Ticker mode="smooth">
                {({ index }) => (
                    <>
                      <h1>{song}</h1>
                    </>  
                )}
            </Ticker>

        </div>
        <div className="videofooter__actions">
            <div className="videofooter__actionsleft">
              
                <SendIcon fontSize="large" />
                < MoreHorizIcon fontSize="large" />

            </div>
            <div className="videofooter__actionsright">
                <div className="videofooter__stat">
                   <FavoriteIcon />
                    <p>{likes}</p>
                </div>
                <div className="videofooter__stat">
                    <ModeCommentIcon />
                     <p>{shares}</p> 

                </div>

            </div>
        </div>
    </div>
  );
}

export default VideoFooter;