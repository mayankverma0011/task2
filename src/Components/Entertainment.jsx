import React from 'react'
import Card from './Card'
import "../App.css";
function Entertainment() {
 
  return (
   
    <div className='card-parant ' style={{display:"flex",flexWrap:"wrap"}}>
      <Card/>
      <Card/>
      <Card/>
     
    </div>
  )
}

export default Entertainment