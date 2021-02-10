import React from 'react';
import AsideTittle from './AsideTittle';
import YoutubeVideo from './YoutubeVideo';

const AsroyounOdhikar = () => {
    return (
        <div className='aside_hotline'>
            <AsideTittle info={'আশ্রয়ণের অধিকার শেখ হাসিনার উপহার'}/>

            <YoutubeVideo link='https://www.youtube.com/embed/l7G3TPz6P24'></YoutubeVideo>
            <YoutubeVideo link='https://www.youtube.com/embed/z6llDxY5JFs'></YoutubeVideo>
            <YoutubeVideo link='https://www.youtube.com/embed/MvTLqrU9ZbQ'></YoutubeVideo>
            <YoutubeVideo link='https://www.youtube.com/embed/AJaPUGE6gnc'></YoutubeVideo>
        </div>
    );
};

export default AsroyounOdhikar;