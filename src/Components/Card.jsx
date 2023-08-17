import React,{useState} from 'react'
import Smallmodel from './Smallmodle'
function Card() {
  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
    
    <div className="card">
          <div className="main-card">
            <div className="first">  
            <h1>The first Task title</h1>
            <h6 id='trippledots' onClick={handleToggleChange}>...</h6>
            </div>
            <Smallmodel toggle={toggle} handleToggleChange={handleToggleChange} />
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

    <div>
                {/* <h1>{Myname}</h1> */}
                {/* <button id='btn' onClick={changeName}>Toggle</button> */}

            </div>
    </>
  )
}

export default Card