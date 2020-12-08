import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar'

function Video({ url, channel, description, song, likes, shares, messages }) {
    const [ play, setPlay ] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } 
        else {
            videoRef.current.play();
            setPlay(true);
        }
        }
    return (
        <div className='video'>
            <img className='image' src={url} alt='Vijay' />
            <video className='video__player' loop onClick={onVideoPress} ref={videoRef}  
            src="https://fb.watch/2bsKDBde4M/"></video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video
