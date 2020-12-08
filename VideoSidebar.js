import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

function VideoSidebar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className='videosidebar'>
            <div className='videosidebar__button'>
                {liked ? <FavoriteIcon fontSize='large' onClick={e => setLiked(false)} /> : <FavoriteBorderIcon fontSize='large' onClick={e => setLiked(true)} /> }
                <p>{ liked ? (likes-1) : likes }</p>
            </div>   
            <div className='videosidebar__button'>
                <ChatIcon />
                <p>{messages}</p>
            </div> 
            <div className='videosidebar__button'>
                <ShareIcon />
                <p>{shares}</p>
            </div>  
        </div>
    )
}

export default VideoSidebar
