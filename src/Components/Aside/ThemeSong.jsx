import React from 'react';
import AsideTittle from './AsideTittle';

const ThemeSong = () => {
    return (
        <div className='aside_hotline'>
            <AsideTittle info={'জাতীয় সংগীত'}/>
            <audio style={{width:'100%'}} src="http://rajshahieducationboard.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/e5f25d4e_f0a7_4b2a_a07c_3ec69a793516/bd_national_anthem.mp3" controls/>
        </div>
    );
};

export default ThemeSong;