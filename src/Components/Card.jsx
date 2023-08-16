import React from 'react'

function Card() {
  return (
    <>
    
    <div className="card">
          <div className="main-card">
            <div className="first">  
            <h1>The first Task title</h1>
            <i class="fa-regular fa-square-check"></i>
            </div>
            <p>Lorem ipsum dolor sit amet, consecteturadipisicing elit. Maxime, incidunt!</p>
            <div className="sec">
              <div className="cricle">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
              </div>
           <h6> <i class="fa-regular fa-square-check"></i>  Done </h6>    
            </div>
          </div>
    </div>
    </>
  )
}

export default Card