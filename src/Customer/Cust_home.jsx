import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import axios from 'axios'
const Cust_home = () => {

 const Cust_status = useSelector(state=>state.Cust_status)
//       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//   <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
// </svg>

        const dispatch=useDispatch()

      useEffect(()=>{
              console.log('useEffect')
              dispatch({type:'CUSTOMER'})
              dispatch({type:'RM_VENDOR'})

      },[])

      console.log('status :',Cust_status)


  const Likebutton=(index)=>{
    console.log('like button')
    dispatch({type:'LIKE',property:index})
   let svg= document.querySelector(`#like${index} > path`)
    if (svg.getAttribute('d') === 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z'){
        svg.setAttribute('d','M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z')
    }else{
       svg.setAttribute('d','M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z')
    }


    
  }



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
    
        console.log(final_records)


  return (
    <div>

        <center><h2><b><u>Property List</u></b></h2></center>

        <div className='container'>

       
                <div className='row '>

    {final_records.map((x,index)=><div className='col-lg-3 col-md-4 col-sm-6'>
        <div className='p-2'>
                                    <div class="card " >
        <img src={x.Property_image}  class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{x.Property_type}</h5>
            <span>{x.Property_cost}</span>
            <p class="card-text">{x.P_Info.slice(0,60)}.....</p>
           
           <div className='d-flex justify-content-between'>
            <svg id={'like'+index }onClick={()=>Likebutton(index)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
         
        <Link to={`/property_details/${index}`} class="card-link">Read more...</Link>
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

export default Cust_home
