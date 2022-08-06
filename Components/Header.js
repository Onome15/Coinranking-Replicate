import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header>
            <div className='text-center text-md grid lg:grid-cols-2'>
                <pre className='p-2'> Mcap$1.17T  BTC 39.47%  New  Best Coins 15,257</pre>
                <hr className='border-sky-200 lg:hidden'/>
                <p className='p-2'> Send Us <span className='font-medium'>Your Feedback</span></p>
            </div>
            <div className='bg-sky-100 h-32'>

            </div>
         
<Navbar/>

            <hr className='border-sky-200'/>
            
        </header>
    )
}

export default Header