import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { useState } from 'react'

const Liked_properties = () => {
 const properties=  useSelector((state)=>state.likes)
let dispatch=useDispatch()
  useEffect(()=>{
               console.log('useEffect')
               dispatch({type:'CUSTOMER'})
               dispatch({type:'RM_VENDOR'})
 
       },[])
 console.log('properties :',properties)


 const [record,setrecord]= useState([])
    
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
        
        let result_data=[]
        properties.forEach((x)=>{
             final_records.filter((y,index)=>{
                if (x==index){
                    result_data.push(y)
                }
        })
        })
       
    
        console.log('liked properties :',result_data)
      
        
  const Likebutton=(index)=>{
    console.log('like button')
    // dispatch({type:'DISLIKE',property:index})
    let updated_properties=[]
    properties.forEach((x)=>{
      if (x!=index){
        updated_properties.push(x)
      }
    })
    dispatch({type:'DISLIKE',property:updated_properties})
   


    
  }


  return (
     <div>

        <center><h2><b><u>Liked Property List</u></b></h2></center>

        <div className='container'>

       
                <div className='row '>

    {result_data.map((x,index)=><div className='col-lg-3 col-md-4 col-sm-6'>
        <div className='p-2'>
                                    <div class="card " >
        <img src={x.Property_image}  class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{x.Property_type}</h5>
            <span>{x.Property_cost}</span>
            <p class="card-text">{x.P_Info.slice(0,60)}.....</p>
           
           <div className='d-flex justify-content-between'>
            <svg id={'like'+index }onClick={()=>Likebutton(index)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
         
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

export default Liked_properties
