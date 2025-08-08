import React from 'react'
import Galaxy from './Galaxy'
import Expandable from '../Expandable/Expandable'

const GalaxySection = () => {
  return (
    <div className='h-screen'>
      <Galaxy>
        <div className='w-[800px] h-[500px]'>
        <Expandable/>
        </div>
      </Galaxy>
    </div>
  )
}

export default GalaxySection