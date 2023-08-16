import React from 'react'
import Card from './Card'
function Home() {
  return (
    <>
      <div className="header">
        <p id='h'>todo</p>
        <p id='h'><i class="fa-solid fa-plus"></i></p>
      </div>


      <div className="body">
        <div className="list">
          <div className="dot1"><li>work</li></div>
          <div className="dot2"><li>study</li></div>
          <div className="dot3"><li>entertainment</li></div>
          <div className="dot4"><li>famliy</li></div>
        <h5> <i class="fa-regular fa-square-check"></i> hide task</h5>
        </div>
        
<Card/>

        </div>
    

    </>
  )
}

export default Home