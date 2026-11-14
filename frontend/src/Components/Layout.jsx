import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className='flex'>
        <Sidebar />

        <div className='flex-1'>
            <Navbar />
        </div>
    </div>
  )
}

export default Layout; 