import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordStrengthBar from 'react-password-strength-bar';
// ===HOOKS====
import { useSignup } from '../../hooks/useSignup'
// ===STYLES===
import './Signup.css'
import Footer from '../../components/Footer';

export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName)
   
  };

  return (
    <div>
          <form className='su-form' onSubmit={handleSubmit}  >
            <h2>  SignUp</h2>
            <h4  >Create a New Account </h4>
        <label>
        <span><i class='bx bxs-user'></i>Username:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

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
 
      <PasswordStrengthBar password={password} />
      <div className='navigate' > Already a user ? <Link to="/login">Login</Link> </div>
      { !isPending && <button className="login_btn">Sign up</button> }
      { isPending && <button className="login_btn" disabled>loading</button> }
      { error && <p>{error}</p> }
    </form>
    <Footer/>
    </div>
  )
}
