import React from 'react';
import AsideList from './AsideList';
import AsideTittle from './AsideTittle';
import AsroyounOdhikar from './AsroyounOdhikar';
import BonnarSomoy from './BonnarSomoy';
import Chairmen from './Chairmen'; 
import CoronaTraser from './CoronaTraser';
import CoronaVirus from './CoronaVirus';
import Ekdesh from './Ekdesh';
import Hotline from './Hotline';
import PublicSector from './PublicSector';
import SavedDengu from './SavedDengu';
import ThemeSong from './ThemeSong';

const AsideMain = () => {
    return (
        <div className='asideMain'>
            <AsideTittle info={'চেয়ারম্যান'}/>
            <Chairmen/>
            <AsideTittle info={'কেন্দ্রীয় ই-সেবা'}/>
            <AsideList/>
            <AsideTittle info={'সকল'}/>
            <AsideTittle info={'গুরুর্তপূর্ন লিঙ্ক সমূহ'}/>
            <AsideTittle info={'সকল লিংক'}/>
            <AsroyounOdhikar/>
            <AsideTittle info={'বঙ্গবন্ধু কুইজ'}/>
            <Hotline/>
            <CoronaVirus/> 
            <CoronaTraser/>
            <BonnarSomoy/>
            <Ekdesh/>
            <ThemeSong/>
            <PublicSector/> 
            <SavedDengu/>
            <AsideTittle info={'ইনোভেশন কর্নার'}/>
            <AsideTittle info={'সামাজিক যোগাযোগ'}/> 
        </div>
    );
};

export default AsideMain;