import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
const V_reg = () => {
  const nav=useNavigate()
    const login =(e)=>{
        e.preventDefault()
        
        // nav('/Home')
    }
    return (
  
      <div>
  
          <center><h1><b>Vendor Registration</b></h1></center>
  
         
          <div className='col-6 offset-3'>
             <div className='border border-2 p-5 rounded rounded-5'>
                <form onSubmit={login}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Mobile</label>
        <input type="tel" class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
      
      </div>
     <div className='text-center'>
      <button type="submit" class="btn btn-primary">Registration</button>
      <center><Link to={'/v_log'}><u>Login Here...</u></Link></center>
      </div>
    </form>
  
  </div>
  </div>
  
        
      </div>
    )
}

export default V_reg
