import React from 'react'
import './Count.css'

const Count = () => {
  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        
        <div className="circle" >500+</div>
        <span >Total </span>
        <span>Members</span>
      </div>
      <div className="achievement">
        <div className="circle">32</div>
        <span  >Total </span>
        <span>Volunteers</span>
      </div>
      <div className="achievement">
        <div className="circle">4</div>
        <span >Total </span>
        <span>Donars</span>
      </div>
    </div>
  )
}

export default Count