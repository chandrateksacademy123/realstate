import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const View_property = () => {

         const dispatch=useDispatch()
      useEffect(()=>{
              dispatch({type:'VENDOR'})
      },[])

    
     const [record,setrecord]= useState([])

     const[property,setproperty]=useState([1,2,3,4,5])
    
          useEffect(()=>{
             axios.get('https://realestate-c95ac-default-rtdb.firebaseio.com/property.json').then(r1=>{
          setrecord(r1.data)
         })
          },[])
    
        console.log(record)
        
        let keys=Object.keys(record)
        // console.log(keys)
        let final_records=[]
        for(let x of keys){
          if (String(record[x].V_mobile)===localStorage.getItem('vendor_mobile')){
          final_records.push(
            {
               Property_type:record[x].Property_type[0],
              Property_sqrft:record[x].Property_sqrft[0],
              Property_image:record[x].Property_image[0],
              Property_cost:record[x].Property_cost[0],
              Mobile:record[x].Mobile[0],
              Address:record[x].Address[0],
              P_Info:record[x].P_Info[0],
              V_mobile:record[x].V_mobile[0],
            }
          )
           }
        }
    
        console.log(final_records)



  return (
    <div>

         <div className='container'>

       
                <div className='row '>

    {final_records.map((x,index)=><div className='col-lg-3 col-md-4 col-sm-6'>
        <div className='p-2'>
                                    <div class="card " >
        <img src={x.Property_image}  class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{x.Property_type}</h5>
            <p class="card-text">{x.P_Info.slice(0,60)}.....</p>
           
           <div className='d-flex justify-content-between'>
           <span>{x.Property_cost}</span>

         
        <Link to={`/property_details/${x}`} class="card-link">Read more...</Link>
        </div>
        </div>
        </div>
        </div>

                        </div>)}

                         </div>

                        
                </div>
      
    </div>
  )
}

export default View_property
