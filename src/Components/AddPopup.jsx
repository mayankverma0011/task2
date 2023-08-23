// import React, { useState } from 'react'
// import Home from './Home';

// function AddPopup({ closeModel }) {
// const [title, settitle] = useState('');
// const [Titledata, SetTitledata ] = useState([])
// const [descriptionData, SetdescriptionData ] = useState([])
// const [description, setdescription] = useState('');


// // console.log("title1111 array",Titledata)a
// // console.log("description22222 array",descriptionData)
// const additem = () =>{
//     Titledata.push({title:title,des:description})
//   SetTitledata([...Titledata ])
//   settitle('')
//   SetdescriptionData([...descriptionData, description])
//   setdescription('')
 

//   console.log("title array",Titledata)
//   // console.log("description array",descriptionData)
// }

//   return (
//     <>
//       <div className='popup-model'>
//         <div className="m">
//           <p onClick={closeModel} id='close'>cancel</p>
//           <p id='close'><i className="fa-solid fa-plus" onClick={additem}></i></p>
//         </div>
//         <div className="inp-group">
//           <h3>Title</h3>
//           <input type='text' placeholder='add a title' value={title} onChange={(e)=>settitle(e.target.value)} />
//         </div>

//         <div className="inp-group">
//           <h3>Description</h3>
//           <input type='text' placeholder='add a description ' value={description} id='inpt'onChange={(event) =>setdescription(event.target.value)} />
//         </div>
//         <div className="tags">
//           <h3>tags</h3>
//           <div className="t">
//           <div className="D"> <h2>work</h2></div>
//           <div className="E"><h2>study</h2></div>
//           <div className="F"><h2>entertainment</h2></div>
//           <div className="G"><h2>famliy</h2></div>
         
//           </div>
//         </div>
//       </div>
      
//       {/* <Card Titledata={Titledata}/> */}
//       <Home Titledata={Titledata} />
//     </>
//   )
// }
// export default AddPopup



