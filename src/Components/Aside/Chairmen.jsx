import React from 'react';
import './Aside.css'

const Chairmen = () => {
    return (
        <div className='aside_chairmen'>
            <img className='chairmenImg' style={{backgroundColor:'red'}} src="http://rajshahieducationboard.gov.bd/sites/default/files/files/rajshahieducationboard.portal.gov.bd/office_head/5f446e11_58bb_4854_aac7_86e21db5350b/01.jpg" alt=""/>
            <br/>
            <small>প্রফেসর ড. মোহা: মোকবুল হোসেন</small><br/>
            <small>চেয়ারম্যান, মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড রাজশাহী...</small><br/>
            <small><a style={{color:'grey',textDecoration:'underline'}} href="#">বিস্তারিত</a></small>
        </div>
    );
};

export default Chairmen;