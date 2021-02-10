import React from 'react';
import AsideTittle from './AsideTittle';
import YoutubeVideo from './YoutubeVideo';

const PublicSector = () => {
    return (
        <div className='aside_hotline'>
            <AsideTittle info={'পাবলিক সেক্টর ইনোভেশন একটি দেশের রূপান্তর'}/>
            <YoutubeVideo link='https://www.youtube.com/embed/GQcmbqD0r7o'/>
        </div>
    );
};

export default PublicSector;