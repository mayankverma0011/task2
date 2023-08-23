import React,{useState} from 'react'
// import EditPopup from './EditPopup'
function Smallodel({toggle, handleToggleChange,}) {
  const [showmodel, setshowmodel] = useState(false);
  // const closeModel = () => setshowmodel(false);
  return (
    <>
            {
            toggle ?
            <div className='Edit-delte'>
              <p id='smallpopup' onClick={() => setshowmodel(true)}>Edit</p>
              {/* {showmodel && <EditPopup closeModel = {closeModel}/> } */}
              <p id='smallpopup'>Delete</p>
            </div>
            :
            ""}
       
   
    </>
  )
}

export default Smallodel

