import React from 'react'

function Navbar() {
    return (
        <div className='flex flex-row justify-items-cetner p-6 text-lg space-x-6'>
            <img src={require('../images/trash.png')} className='trashlogo' alt='missing'/>
            <p className='text-emerald-600'>Waste Recognizer</p>
            <a className='text-blue-600 self-stretch hover:italic' href='https://github.com/ranvirsinghst/waste-sorting' target='_blank'>Github</a>
        </div>
    )
}

export default Navbar