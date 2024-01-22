import './Topdiv.css';

import React from 'react'

const Topdiv = () => {
    return (
        <div className='top'>
            <div className='topelements'>
                <div className='text'>
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </div>
                <div className='dollars1'>
                    <p>$ 0.00</p>
                </div>
            </div>

            <div className='bottomelements'>
                <div className='text'>
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </div>
                <div className='dollars1'>
                    <p>$ 0.00</p>
                </div>
            </div>
        </div>
    )
}

export default Topdiv;