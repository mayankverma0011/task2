import React from'react'
import { useState } from 'react';

function Editpopup({ closeModel, initialTitle, initialDescription, updateCard }) {
  // const [title, setTitle] = useState(currentTitle);
  // const [description, setDescription] = useState(currentDescription);
  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [editedDescription, setEditedDescription] = useState(initialDescription);

  // const handleUpdate = () => {
  //   updateCard(title, description);
  //   closeModel();
  // };
  
  const handleEdit = () => {
    updateCard(editedTitle, editedDescription);
    closeModel();
  };

  return (
    <>
     <div className='popup-model'>
        <div className="m">
         
          {/* <p id='close'><i className="fa-solid fa-pen-to-square"></i></p> */}
          <p id='close' onClick={handleEdit}><i className="fa-solid fa-pen-to-square" ></i></p>

        </div>
        <div className="inp-group">
          <h3>Title</h3>
          {/* <input type='text' placeholder='add a title' /> */}
          {/* <input type='text' placeholder='add a title' value={title} onChange={e => setTitle(e.target.value)} /> */}
          <input
          type='text'
          placeholder='add a title'
         value={initialTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />

        </div>

        <div className="inp-group">
          <h3>Description</h3>
          {/* <input type='text' placeholder='add a description' id='inpt' /> */}
          {/* <input type='text' placeholder='add a description' id='inpt' value={description} onChange={e => setDescription(e.target.value)} /> */}
          <input
          type='text'
          placeholder='add a description'
          value={initialDescription}
          id='inpt'
          onChange={(event) => setEditedDescription(event.target.value)}
        />

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




















