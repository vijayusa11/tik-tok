import React from 'react'
import './VideoFooter.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter({ channel, description, song }) {
    return (
        <div className='videofooter'>
            <div className='videofooter__text'>
                <h3>{channel}</h3>
                <p>{description}</p>
                <div className='videoFooter__ticker'>
                    <MusicNoteIcon className='videofooter__icon'/>
                   
                    <Ticker mode='smooth'>
                        {({ index }) => (
                            <>
                            <p>{song}</p> 
                            </>       
                        )}
                    </Ticker>
                </div>
               
            </div>
            <img className='videofooter__record' alt='vijay' src='https://www.flaticon.com/svg/static/icons/svg/26/26554.svg' />
        </div>
    )
}

export default VideoFooter
