// import React,{ useState} from 'react'
// import Smallmodel from './Smallmodle'
// function Card(props) {
//   const Titledata = props.Titledata;
//   const [toggle, setToggle] = useState(false);
//   const handleToggleChange = () => {
//     setToggle(!toggle);
//   };


//   return (
//     <>
     
//     {
//     Titledata.map((ele, index) => (
//   <div className="card" key={index}>
//   <div className="main-card">
//     <div className="first">  
//     <h1>{ele.title}</h1>
//     <h6 id='trippledots' onClick={handleToggleChange}>...</h6>
//     </div>
//     <Smallmodel toggle={toggle} handleToggleChange={handleToggleChange} />
//     <p id='card-para'>{ele.description}</p>
//     <div className="sec">
//       <div className="cricle">
//       <div className="A"></div>
//       <div className="B"></div>
//       <div className="C"></div>
//       </div>
//    <h6> <i className="fa-regular fa-square-check"></i>  Done </h6>    
//     </div>
//   </div>
// </div>

// ))}
    

  
//     </>
//   )
// }

// export default Card


