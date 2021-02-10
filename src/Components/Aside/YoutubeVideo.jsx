import React from 'react';
import './Aside.css'

const YoutubeVideo = ({link}) => {
    return (
        <div>
            <iframe className='youtubeVideo' src={`${link}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default YoutubeVideo;