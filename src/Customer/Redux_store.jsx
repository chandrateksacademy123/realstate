import React from 'react'

import { createStore } from 'redux'

const Status={
    Cust_status:false,
    Vendor_status:false,
    likes:[],
}


const Redux_store =(state=Status,action) => {
  switch(action.type){
    case 'CUSTOMER':
        return {...state,Cust_status:true}
    case 'RM_CUSTOMER':
        return {...state,Cust_status:false}
    case 'VENDOR':
        return {...state,Vendor_status:true}
    case 'RM_VENDOR':
        return {...state,Vendor_status:false}
    case 'LIKE':
        return {...state,likes:[...state.likes,action.property]}
    case 'DISLIKE':
        return {...state,likes:[...action.property]}
    default:
        return {...state}
  }
}



const Store=createStore(Redux_store)
export default Store