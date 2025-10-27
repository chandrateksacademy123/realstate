import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import {useState} from 'react'

import { useNavigate } from 'react-router'

const Cust_reg = () => {

    const [record,setrecord]=useState({
      Name:'',
      Mobile:'',
      Email:'',
      Address:'',
    })

    // https://realestate-c95ac-default-rtdb.firebaseio.com/

      let navigate=useNavigate()

    const formsubmit=(e)=>{
      e.preventDefault()
      axios.post('https://realestate-c95ac-default-rtdb.firebaseio.com/customer.json',record).then((response)=>{
        alert('Registration Successfully Done!')
      })
        navigate('/')
    }

  return (
   
    <div>

        <center><h1><b>Customer Registration</b></h1></center>

       
        <div className='col-6 offset-3'>
           <div className='border border-2 p-5 rounded rounded-5'>
              <form onSubmit={formsubmit}>
                <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input name='Name' onChange={(e)=>{setrecord({...record,[e.target.name]:[e.target.value]})}} type="text" class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Mobile</label>
      <input name='Mobile' onChange={(e)=>{setrecord({...record,[e.target.name]:[e.target.value]})}} type="tel" class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input name='Email' onChange={(e)=>{setrecord({...record,[e.target.name]:[e.target.value]})}} type="email" class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Address</label>
      <textarea name='Address' onChange={(e)=>{setrecord({...record,[e.target.name]:[e.target.value]})}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
   <div className='text-center'>
    <button type="submit" class="btn btn-primary">Register</button>
    <center><Link to={'/'}><u>Login Here...</u></Link></center>
    </div>
  </form>

</div>
</div>

{/* <h1>{record.Name},{record.Email},{record.Mobile},{record.Address}</h1> */}

      
    </div>
  )
}

export default Cust_reg
