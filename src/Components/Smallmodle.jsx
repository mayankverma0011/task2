import React,{useState} from 'react'
import EditPopup from './EditPopup'
function Smallodel({toggle, handleToggleChange,}) {
  const [showmodel, setshowmodel] = useState(false);
  const closeModel = () => setshowmodel(false);
  return (
    <>
    <div className='toggle-container' onClick={handleToggleChange}> </div>
            {
            toggle ?
            
            <div className='Edit-delte'>
              <p id='smallpopup' onClick={() => setshowmodel(true)}>Edit</p>
              {showmodel && <EditPopup closeModel = {closeModel}/> }
              <p id='smallpopup'>Delete</p>
            </div>
            :
            ""}
       
   
    </>
  )
}

export default Smallodel

