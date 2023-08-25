import { logDOM } from '@testing-library/react';
import React from 'react'

function Navbar() {
    console.log("navbar");
    return (
        <div className='flex p-6 text-lg text-green space-x-4'>
            <img src="./trashlogo.svg" alt='Image Missing'/>
            <p className='text-green'>Waste Recognizer</p>
            <a className='flex-align-right' href='https://github.com/ranvirsinghst/waste-sorting' target='_blank'>Github</a>
        </div>
    )
}

export default Navbar