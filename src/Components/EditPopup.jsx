import React from 'react'
import { useState } from 'react';

function Editpopup({ closeModel, initialTitle, initialDescription, updateCard }) {
  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [editedDescription, setEditedDescription] = useState(initialDescription);


  const handleEdit = () => {
    updateCard(editedTitle, editedDescription);
    closeModel();
  };
  return (
    <>
      <div className='popup-model'>
        <div className="m">


          <p id='close' onClick={handleEdit}><i className="fa-solid fa-pen-to-square" ></i></p>

        </div>
        <div className="inp-group">
          <h3>Title</h3>
          <input type="text"  placeholder="add a title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)}/>
        </div>

        <div className="inp-group">
          <h3>Description</h3>
          <input  type="text"  placeholder="add a description"  value={editedDescription}  id="inpt"  onChange={(e) => setEditedDescription(e.target.value)}/>
        </div>
        {/* <div className="tags">
          <h3>tags</h3>
          <div className="t">
          <div className="D"> <h2>work</h2></div>
          <div className="E"><h2>study</h2></div>
          <div className="F"><h2>entertainment</h2></div>
          <div className="G"><h2>famliy</h2></div>
          </div>
        </div> */}
      </div>

    </>
  )
}

export default Editpopup










