import React from 'react'
import { useNavigate } from 'react-router'
import logo from '../static/images/logo.webp'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
const Cust_nav = () => {
  const nav=useNavigate()
  const cust_status= useSelector(state=>state.Cust_status)
  const vendor_status= useSelector(state=>state.Vendor_status)
  console.log(cust_status)
  return (
    <div>
        
            <h1 className='bg-dark text-white' >
                <center><b>REAL ESTATE</b></center>
            </h1>
      <center></button onClick={()=>{nav('/')}}>Login<button></button></div>
       {vendor_status?
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={logo} width={100} height={60} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/Add_property'}>Add Property</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/View_property'}>View Property</Link>
        </li>
        
      </ul>
        <Link to={'/Home'} class="btn btn-outline-warning me-1" type="submit">Customer</Link>
        <button class="btn btn-outline-success me-1" type="submit">Admin</button>
        <button class="btn btn-outline-danger me-1" type="submit">Logout</button>
    </div>
  </div>
</nav>
       :cust_status ?
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={logo} width={100} height={60} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/Home'}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/liked_properties'}>Liked Properties</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/'}>About us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/'}>Contact us</Link>
        </li>
        
      </ul>
        <Link to={'/v_log'} class="btn btn-outline-warning me-1" type="submit">Vendor</Link>
        <button class="btn btn-outline-success me-1" type="submit">Admin</button>
        <button class="btn btn-outline-danger me-1" type="submit">Logout</button>
    </div>
  </div>
</nav> :null}
        



      
    </div>
  )
}

export default Cust_nav
