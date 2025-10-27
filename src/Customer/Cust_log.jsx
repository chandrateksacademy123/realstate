import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Cust_log = () => {
  const nav=useNavigate()

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
          nav('/Home') 
        }
      }
      

      
      // nav('/Home')
  }




  return (

    <div>

        <center><h1><b>Customer Login</b></h1></center>

       
        <div className='col-6 offset-3'>
           <div className='border border-2 p-5 rounded rounded-5'>
              <form onSubmit={login}>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Mobile</label>
      <input type="tel" name='Mobile' onChange={(e)=>{setmobile(e.target.value)}} class="form-control" placeholder='Enter Your Mobile Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    </div>
   <div className='text-center'>
    <button type="submit" class="btn btn-primary">Login</button>
    <center><Link to={'/reg'}><u>Register Here...</u></Link></center>
    </div>
  </form>

</div>
</div>

      
    </div>
  )
}

export default Cust_log
