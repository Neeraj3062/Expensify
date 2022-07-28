import React from 'react'

// ===STYLES===
import './Notfound.css'
import error_svg from './error_svg.svg'
export default function Notfound() {
  return (
    <div className='notfound'>
      <img src={error_svg} className="error_img" />
       
        <h2>Page not Found</h2>
    </div>
  )
}
