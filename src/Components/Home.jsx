import React,{useState} from 'react'
import Card from './Card'
import Model from './Model';

function Home() {
  const [showmodel, setshowmodel] = useState(false);
  const closeModel = () => setshowmodel(false);
  return (
    <>
      <div className="header">
        <p id='h'>todo</p>
        <p id='h'><i class="fa-solid fa-plus" onClick={() => setshowmodel(true)}></i></p>
        {/* {showmodel && <Model closeModel = {closeModel}/> } */}
      </div>
      {showmodel && <Model closeModel = {closeModel}/> }

      <div className="body">
        <div className="list">
          <div className="dot1"><li>work</li></div>
          <div className="dot2"><li>study</li></div>
          <div className="dot3"><li>entertainment</li></div>
          <div className="dot4"><li>famliy</li></div>
        <h6 id='hide'> <i class="fa-regular fa-square-check"></i> hide task</h6>
        </div>
        
<Card/>

        </div>
    

    </>
  )
}

export default Home