import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
const V_log = () => {
 const nav=useNavigate()
  // const login =(e)=>{
  //     e.preventDefault()
      
  //     nav('/Add_property')
  // }
    const dispatch=useDispatch()
  useEffect(()=>{
        dispatch({type:'RM_CUSTOMER'})
  },[])

  const [Mobile,setmobile]=useState('')
  
   const [record,setrecord]= useState([])
  
        useEffect(()=>{
             axios.get('https://realestate-c95ac-default-rtdb.firebaseio.com/customer.json').then((r1)=>{
        setrecord(r1.data)
      })
        },[])
  
      console.log(record)
      
      let keys=Object.keys(record)
      // console.log(keys)
      let final_records=[]
      for(let x of keys){
        final_records.push(
          {
            Name:record[x].Name[0],
            Email:record[x].Email[0],
            Mobile:record[x].Mobile[0],
            Address:record[x].Address[0],
          }
        )
      }
  
      console.log(final_records)
  
      
       const login =(e)=>{
        e.preventDefault()
        for(let x of final_records){
          console.log(x.Mobile)
          if (String(Mobile)===String(x.Mobile)){
            alert('Login Successfully Done!')
            localStorage.setItem('vendor_mobile',String(x.Mobile))
            nav('/Add_property') 
          }
        }
        
  
        
        // nav('/Home')
    }



  return (

    <div>

        <center><h1><b>Vendor Login</b></h1></center>

       
        <div className='col-6 offset-3'>
           <div className='border border-2 p-5 rounded rounded-5'>
              <form onSubmit={login}>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Mobile</label>
      <input type="tel" onChange={(e)=>{setmobile(e.target.value)}} class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    </div>
   <div className='text-center'>
    <button type="submit" class="btn btn-primary">Login</button>
    <center><Link to={'/v_reg'}><u>Register Here...</u></Link></center>
    </div>
  </form>

</div>
</div>

      
    </div>
  )
}

export default V_log
