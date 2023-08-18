import React,{useState} from 'react'
import { Link, Outlet , useNavigate} from 'react-router-dom';
import Model from './Model';

function Home() {
  const navigate = useNavigate();
  const GotoGetstart = () =>{
  navigate('/');
  }
  const [showmodel, setshowmodel] = useState(false);
  const closeModel = () => setshowmodel(false);
  return (
    <>
  

      <div className="header">
        <p id='h'onClick={GotoGetstart}>todo</p>
        <p id='h'><i class="fa-solid fa-plus" onClick={() => setshowmodel(true)}></i></p>
        {/* {showmodel && <Model closeModel = {closeModel}/> } */}
      </div>
      {showmodel && <Model closeModel = {closeModel}/> }

      <div className="body">
        <div className="list">
          <div className="dot1"><Link to="work"><li>work</li></Link></div>
          <div className="dot2"><Link to="study"><li>study</li></Link></div>
          <div className="dot3"><Link to="entertainment"><li>entertainment</li></Link></div>
          <div className="dot4"><Link to="famliy"><li>famliy</li></Link></div>
          <Outlet/>
        <h6 id='hide'> <i class="fa-regular fa-square-check"></i> hide task</h6>
        </div>
      
        </div>
    

    </>
  )
}

export default Home