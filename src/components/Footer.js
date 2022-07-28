import React from 'react'

// ===STYLES===
import './css/Footer.css'


export default function Footer() {
  return (
    <div className='footer pt-3 ' >

       <div className="socials d-flex justify-content-center">        
              <u l>
                <li><a href="https://www.instagram.com/__.neeraj3062.__/"><i class='bx bxl-facebook-square'></i></a></li>
                <li><a href="https://www.instagram.com/__.neeraj3062.__/"><i class='bx bxl-instagram-alt' ></i></a></li>
                <li><a href="https://github.com/NsbTechno"><i class='bx bxl-github'></i></a></li>
                <li><a href="https://www.linkedin.com/in/neeraj-bukane-9023b7206/"><i class='bx bxl-linkedin-square' ></i></a></li>
                   
              </u>
        
            </div>
            <div className='text-center pb-3'>
       <span className='cr '>A NsbCreation ©2022</span>
       <br />
       {/* <span className='lr'>All Rights Reserved</span> */}
       </div>
    </div>
  )
}
