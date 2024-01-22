import './Uppergrid.css';

import React from 'react'

const Uppergrid = () => {
    return (
        <div className='uppergrid'>
            Bill
            <div className='inputholder'>
                <div>
                    <img src='./images/icon-dollar.svg' ></img>
                </div>
                <div className='dollars'>142.55</div>
            </div>
        </div>
    )
}

export default Uppergrid;