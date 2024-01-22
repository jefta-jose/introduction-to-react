import './Middlegrid.css';

import React from 'react'

const Middlegrid = () => {
    return (
        <div className='middlegrid'>
            <div>
                Select Tip %
            </div>
            <div className='upperbuttons'>
                <button className='buttons'>5%</button>
                <button className='buttons'>10%</button>
                <button className='buttons'>15%</button>
            </div>
            <div className='lowerbuttons'>
                <button className='buttons'>20%</button>
                <button className='buttons'>25%</button>
                <button>
                    <input id='custom' placeholder='custom' />
                </button>
            </div>
        </div>
    )
}

export default Middlegrid;