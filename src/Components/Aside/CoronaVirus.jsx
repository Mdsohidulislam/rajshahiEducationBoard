import React from 'react';
import AsideTittle from './AsideTittle';
import YoutubeVideo from './YoutubeVideo';
import './Aside.css'

const CoronaVirus = () => {
    return (
        <div className='aside_hotline'>
            <AsideTittle info={'করোনা ভাইরাস প্রতিরোধে যোগাযোগ'}/>
            <img className='coronaImage' src="http://rajshahieducationboard.gov.bd/sites/default/files/files/admin.portal.gov.bd/npfblock//corona_new.jpg" alt=""/>

            <YoutubeVideo link='https://www.youtube.com/embed/GVPJHDp29tg'/> 
        </div>
    );
};

export default CoronaVirus;