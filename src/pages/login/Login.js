import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

// ===HOOKS===

import {useLogin} from '../../hooks/useLogin'

// ===STYLES===
import './Login.css'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error , isPending }= useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <form className='login-form' onSubmit={handleSubmit}  >
            <h2> <i class='bx bxs-user'></i> Login</h2>            
      <label>
        <span><i class='bx bxl-gmail'></i>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span><i class='bx bxs-key'></i>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <div className='navigate' > Don't have a Account ? <Link to="/signup">SignUp</Link> </div>
      {  ! isPending && <button className="login_btn">Login</button> }
      { isPending && <button className="login_btn" disabled>loading</button> }
      { error && <p>{error}</p> }
    </form>
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
    </div>
  )
}
