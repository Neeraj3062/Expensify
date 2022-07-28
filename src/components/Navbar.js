import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// ===STYLES===
import './css/Navbar.css'

export default function Navbar() {

  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar' >
      <nav className="navbar navbar-expand-lg p-0 m-0  ">
        <div className="container-fluid">
          <Link className="navbar-brand" id="brand" to="/">EXPENSIFY</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class='bx bx-menu'></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 navbar-nav ms-auto" id='ul_link' >
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">About</Link>
              </li>
              {!user && (
                <>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/login"  >Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">SignUp</Link>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" to="/login">   <li>Hello, {user.displayName}</li></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  > Logout   </a>
                  </li>
                </>
              )}
            </ul>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content rounded-4 shadow">
                  <div class="modal-body p-4 text-center">
                    <h5 class="mb-0 text-warning ">Are you sure you want logout ?</h5>
                 
                  </div>
                  <div class="modal-footer flex-nowrap p-0">
                    <button type="button" onClick={logout} data-bs-dismiss="modal" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right text-danger"><strong>Yes, Logout</strong></button>
                    <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">No thanks</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
