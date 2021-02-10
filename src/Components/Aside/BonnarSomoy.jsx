import React from 'react';
import AsideTittle from './AsideTittle';
import YoutubeVideo from './YoutubeVideo';

const BonnarSomoy = () => {
    return (
        <div className='aside_hotline'>
            <AsideTittle info={'বন্যার সময় কি করণীয়'}/>
            <YoutubeVideo link='https://www.youtube.com/embed/GT9ShGE_qjg'/>
        </div>
    );
};

export default BonnarSomoy;