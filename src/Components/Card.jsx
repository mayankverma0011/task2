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
            <p id='card-para'>Lorem ipsum dolor sit amet, consecteturadipisicing elit. <br></br>Maxime, mynk kumy ia s dfj develover  incidunt!</p>
            <div className="sec" id='second'>
              <div className="cricle" id='round'>
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
              </div>
           <h6> <i class="fa-regular fa-square-check"></i>  Done </h6>    
            </div>
          </div>
    </div>

  
    </>
  )
}

export default Card