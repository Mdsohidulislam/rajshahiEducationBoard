import React from 'react';
import AsideTittle from './AsideTittle';
import './Aside.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


const AsideList = () => {

    const lists=['জেএসসি/এসএসসি/এইচএসসি নিবন্ধন','জেএসসি/এসএসসি/এইচএসসি ফর্মপূরণ','পরীক্ষা হাজিরা','ছাড়পত্র/ভর্তি/ভর্তি বাতিল/বিভাগ ও বিষয় পরিবর্তন','অন্যান্য ই-সেবা','প্রতিষ্ঠানের ওয়েবসাইট']
    let count=0;
    return (
         <>
            <AsideTittle info={'আভ্যন্তরীণ ই-সেবাসমূহ'}/>
            <ul className='asideUl'>
                {lists.map(l=><li key={count++}><span className='listIcon'>{<FontAwesomeIcon icon={faCheckCircle}/>}</span><a href="#">{l}</a></li>)}
            </ul>
         </>
    );
};

export default AsideList;
