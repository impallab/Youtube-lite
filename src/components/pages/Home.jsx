import React from 'react'
import Sidebar from '../sidebar/Sidebar'

export default function Home() {
  return (
    <div className='min-h-screen overflow-hidden'>
      {/* sidebar */}
      <div className='flex'>
        <Sidebar />
      </div>
    </div>
  )
}
