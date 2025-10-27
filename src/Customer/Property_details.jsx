import React from 'react'
import { useParams } from 'react-router'
const Property_details = () => {

  const {propertyid}= useParams()
  return (
    <div>

      <center><h2><b>Property Details</b></h2></center>
      <h1>{propertyid}</h1>
    </div>
  )
}

export default Property_details
