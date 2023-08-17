import React from 'react'
// import './model.css'
// import '../model.css'
function Model({closeModel}) {
  return (
    <>
    <div className='popup-model'>
        <div className="model"></div>
    <div className="m">
    <p onClick={closeModel} id='close'>cancle</p>
    <p id='close'><i class="fa-solid fa-plus"></i></p>
    </div>
    <div className="inp-group">
        <h3>Title</h3>
        <input type='text' placeholder='add a title'/>
    </div>
    
    <div className="inp-group">
        <h3>Description</h3>
        <input type='text' placeholder='add a description'id='inpt' />
    </div>
    <div className="tags">
        <h3>tags</h3>
        <div className="t">
      
       <div className="dot1"><h5>work</h5></div>
          <div className="dot2"><h5>study</h5></div>
          <div className="dot3"><h5>entertainment</h5></div>
          <div className="dot4"><h5>famliy</h5></div>
          </div> 
      
        
    </div>
    
    </div>
    
    </>
  )
}

export default Model


