import React from 'react';
import './Aside.css';
const AsideTittle = ({info}) => {
    return (
        <div className='aside_tittle my-1'>
            <p>{info}</p>
        </div>
    );
};

export default AsideTittle;