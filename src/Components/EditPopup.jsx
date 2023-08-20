import React from 'react'

function Editpopup({closeModel}) {
  return (
    <>
     <div className='popup-model'>
        <div className="m">
          <p onClick={closeModel} id='close'>cancle</p>
          <p id='close'><i class="fa-solid fa-pen-to-square"></i></p>
        </div>
        <div className="inp-group">
          <h3>Title</h3>
          <input type='text' placeholder='add a title' />
        </div>

        <div className="inp-group">
          <h3>Description</h3>
          <input type='text' placeholder='add a description' id='inpt' />
        </div>
        <div className="tags">
          <h3>tags</h3>
          <div className="t">
          <div className="D"> <h2>work</h2></div>
          <div className="E"><h2>study</h2></div>
          <div className="F"><h2>entertainment</h2></div>
          <div className="G"><h2>famliy</h2></div>
         
          </div>
        </div>
      </div>

    </>
  )
}

export default Editpopup




















