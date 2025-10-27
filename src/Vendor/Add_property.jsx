import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
const Add_property = () => {
            const dispatch=useDispatch()
    useEffect(()=>{
            dispatch({type:'VENDOR'})
    },[])

    const [p_records,setproperty]=useState({
      Property_type:'',
      Property_sqrft:'',
      Property_image:'',
      Property_cost:'',
      Mobile:'',
      Address:'',
      P_Info:'',
      V_mobile:'',
    })

    const formsubmit=(e)=>{
      e.preventDefault()
      axios.post('https://realestate-c95ac-default-rtdb.firebaseio.com/property.json',p_records).then(r1=>{
      alert('Property Created Successfully Done!')
      
    })

    }
    

  return (
    <div>

        <center><h1><b>Add Property</b></h1></center>

       
        <div className='col-6 offset-3'>
           <div className='border border-2 p-5 rounded rounded-5'>
              <form onSubmit={formsubmit}>
                <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Property Type</label>
      <input type="text" name='Property_type' onChange={(e)=>{setproperty({...p_records,[e.target.name]:[e.target.value]})}} class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    </div>
      <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Property Image Url</label>
      <input type="text" name='Property_image' onChange={(e)=>{setproperty({...p_records,[e.target.name]:[e.target.value]})}} class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Property SQRFT'S </label>
      <input type="text"  name='Property_sqrft' onChange={(e)=>{setproperty({...p_records,[e.target.name]:[e.target.value]})}} class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    </div>
     <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Property Cost </label>
      <input type="text"  name='Property_cost' onChange={(e)=>{setproperty({...p_records,[e.target.name]:[e.target.value]})}} class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    </div>
     <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"> Mobile </label>
      <input type="tel"  name='Mobile' onChange={(e)=>{setproperty({...p_records,[e.target.name]:[e.target.value]})}} class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
     <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Vendor Mobile </label>
      <input type="tel"  name='V_mobile' onChange={(e)=>{setproperty({...p_records,[e.target.name]:[e.target.value]})}} class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
   
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Address</label>
      <textarea  name='Address' onChange={(e)=>{setproperty({...p_records,[e.target.name]:[e.target.value]})}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
     <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Property infor</label>
      <textarea  name='P_Info' onChange={(e)=>{setproperty({...p_records,[e.target.name]:[e.target.value]})}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

   <div className='text-center'>
    <button type="submit" class="btn btn-primary">Add</button>
    
    </div>
  </form>

</div>
</div>

      
    </div>
  )
}

export default Add_property
