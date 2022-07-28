import React from 'react'
import Footer from '../../components/Footer'

// ===STYLES===
import './About.css'
import expense from './expense.svg'
import me_2  from'./me_2.jpeg'


export default function About() {
  return (
    <div className='about ' >
        <div className='container-fluid '>
        <h2 className=' d-flex  justify-content-center align-items-center' >About </h2>
      <div class="container my-1 d-flex justify-content-center align-items-center">
        <img className='img-fluid' src={expense} alt="This is an img" width={360} />
      </div>
      <h3>💲EXPENSIFY💲</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum eaque aliquid voluptates recusandae ea non minima distinctio cum in amet nam eum iure labore nihil qui ducimus, quod sint.
      </p>
        </div>
      <div className=' container-fluid container_profile pt-3 '>
        <div className="container ">
        <h2 className='pt-2' >Developer</h2>
        <div className="row  ">
          <div className="col-lg-6 col-md-12  ">
            <img src={me_2} alt="" className='img-fluid my_img center-block d-block mx-auto pt-2 pb-4 mb-3 ' width={240} />
            <div className="name  d-flex justify-content-center">NEERAJ SUNIL BUKANE</div>
          </div>
          <div className="col-lg-6  col-md-12 pb-4">
            <div className="profile ">
            <a href="https://neerajbukane.github.io/DigitalPortfolio/" className='text-white'><button className='btn btn-p  mb-3 fs-5'>Portfolio</button></a>
            <a href="mailto:neerajbuakne@gmail.com" className='text-white'><button className='btn btn-p  mb-3 fs-5'>Email</button></a>
            </div>


            </div>
        </div>
        </div>
      </div>
      <Footer/> 
    </div>
 
  )
}
