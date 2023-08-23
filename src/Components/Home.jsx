import React, { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Editpopup from './EditPopup';

function Home() {
  const navigate = useNavigate();
  const GotoGetstart = () => {
    navigate('/');
  }

  const [title, settitle] = useState('');
  // const [Titledata, SetTitledata] = useState([])
  const [Titledata, SetTitledata] = useState(() => {
    const storedData = localStorage.getItem('Titledata');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [descriptionData, SetdescriptionData] = useState([])
  const [description, setdescription] = useState('');
  const [showPopup, setShowPopup] = useState(false); // for popup modle
  const [showmodel, setshowmodel] = useState(false); // this state for delete-edit popup
  const closeModel = () => setshowmodel(false); // this also for delete edit
  const [cardToggles, setCardToggles] = useState(new Array(Titledata.length).fill(false));// this state for small popup
  const [editIndex, setEditIndex] = useState(-1);// this state is edit
 
  const toggleCard = (index) => {
    const updatedToggles = [...cardToggles];
    updatedToggles[index] = !updatedToggles[index];
    setCardToggles(updatedToggles);
  }
  useEffect(() => {
    localStorage.setItem('Titledata', JSON.stringify(Titledata));
  }, [Titledata]);
//==================add item=================
 
  const additem = () => { 
    const trimmedTitle = title.trim();
    
    if (!trimmedTitle) {
      alert("Please fill in the title");
    } else {
      const newItem = { title: trimmedTitle, des: description };
      
      Titledata.push(newItem);
      SetTitledata([...Titledata]);
      settitle('');
      
      SetdescriptionData([...descriptionData, description]);
      setdescription('');
    }
  }
  

//==================delete item=================
  const delItem = (index) => {
    const updatedItems = Titledata.filter((_, i) => i !== index);
    SetTitledata(updatedItems);
  };

//==================edit item=================
const updateCard = (newTitle, newDescription, index) => {
  const updatedTitleData = [...Titledata];
  updatedTitleData[index] = { title: newTitle, des: newDescription };
  SetTitledata(updatedTitleData);
};

//==================Complete and uncomplete=================

  return (
    <>
      <div className="header">
        <p id='h' onClick={GotoGetstart}>todo</p>
        <p id='h'><i className="fa-solid fa-plus" onClick={() => setShowPopup(!showPopup)}></i></p>
      </div>

      <div className="body">
        <div className="list">
          <div className="flex">
            <div className="dot1"><Link to="work"><li>work</li></Link></div>
            <div className="dot2"><Link to="study"><li>study</li></Link></div>
            <div className="dot3"><Link to="entertainment"><li>Enjoy</li></Link></div>
            <div className="dot4"><Link to="famliy"><li>famliy</li></Link></div>
          </div>
          <Outlet />
          <h6 id='hide'> <i className="fa-regular fa-square-check"></i> hide task</h6>
        </div>

      </div>

 {/* ===============================show card using map function ============================== */}

      {Titledata.map((ele, index) => (
        <div className="card" key={index}>
          <div className="main-card" >
            <div className="first">
              <h1 >{ele.title}</h1>
              <h6 id='trippledots' key={index} onClick={() => toggleCard(index)}>...</h6>
            </div>
            <p className='card-para' >{ele.des}</p>
            <div className="sec">
              <div className="cricle">
                <div className="A"></div>
                <div className="B"></div>
                <div className="C"></div>
              </div>
              <i className="fa-regular fa-square-check" ></i> 
             </div>
          </div>
{/* ==============================small popup============================ */}
          {cardToggles[index] ? (
            <div className='Edit-delte' key={index}>
              <p id='smallpopup' onClick={() => setEditIndex(index)} >Edit</p>
              {showmodel && <Editpopup closeModel={closeModel} />}
              <p id='smallpopup' onClick={() => delItem(index)}>Delete</p>
            </div>
          ) : null}
        </div>
      ))}

{/* ===================== add popup part=========================== */}

  {showPopup && (
        <div className='popup-model'>
          <div className="m">
            <p id='close' onClick={() => setShowPopup(!showPopup)}><i className="fa-solid fa-plus" onClick={additem} ></i></p>
          </div>
          <div className="inp-group">
            <h3>Title</h3>
            <input type='text' placeholder='add a title' value={title} onChange={(e) => settitle(e.target.value)} />
          </div>
          <div className="inp-group">
            <h3>Description</h3>
            <input type='text' placeholder='add a description ' value={description} id='inpt' onChange={(event) => setdescription(event.target.value)} />
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
      )}

{/* ===================== edit popup part=========================== */}
{editIndex !== -1 && (
    <Editpopup
    closeModel={() => setEditIndex(-1)}
      // closeModel={closeModel}
      title={Titledata[editIndex].title}
      description={Titledata[editIndex].des}
      updateCard={(newTitle, newDescription) =>
        updateCard(newTitle, newDescription, editIndex)
      }
    />
  )}
    </>
  )
}


export default Home



