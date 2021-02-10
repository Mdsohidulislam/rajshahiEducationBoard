import React from 'react';
import AsideTittle from './AsideTittle';
import './Aside.css'

const CoronaTraser = () => {
    return (
        <div className='aside_hotline'>
            <AsideTittle info={'করোনা ট্রেসার বিডি'}/>
            <a href="#"><img className='traserImg' src="http://rajshahieducationboard.gov.bd/sites/default/files/files/admin.portal.gov.bd/npfblock/5d18830f_9fe8_42e1_965d_f94a61510be9/2020-06-16-00-21-94946eae5bcbd226dff95be9d2e49445.jpg" alt=""/></a>
        </div>
    );
};

export default CoronaTraser;