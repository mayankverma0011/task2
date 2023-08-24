import React, { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Editpopup from './EditPopup';

function Home() {
  const navigate = useNavigate();
  const GotoGetstart = () => {
    navigate('/');
  }

  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [activeComponent, setActiveComponent] = useState("work");
  const [showPopup, setShowPopup] = useState(false); // for add popup modle
  const [showmodel, setshowmodel] = useState(false); // this state for delete-edit popup
  const closeModel = () => setshowmodel(false); // this also for delete edit to send props EditPopup component
  const [cardToggles, setCardToggles] = useState(new Array(activeComponent.length).fill(false));// this state for small popup
  const [editIndex, setEditIndex] = useState(-1);// this state for edit functionality

//=======difrrent diffrent Component with get data from localstorage==============
  const [workData, setWorkData] = useState(() => {
    const storedData = localStorage.getItem('work');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [studyData, setStudyData] = useState(() => {
    const storedData = localStorage.getItem('study');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [entertainmentData, setEntertainmentData] = useState(() => {
    const storedData = localStorage.getItem('entertainment');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [familyData, setFamilyData] = useState(() => {
    const storedData = localStorage.getItem('family');
    return storedData ? JSON.parse(storedData) : [];
  });


 
//====================this fucntion for change compoennt=============
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

//========= save data in diffrent component conditions ==================
  const activeComponentData =
    activeComponent === "work"
      ? workData
      : activeComponent === "study"
        ? studyData
        : activeComponent === "entertainment"
          ? entertainmentData
          : familyData;


//===============small togglecard==================
  const toggleCard = (index) => {
    const updatedToggles = [...cardToggles];
    updatedToggles[index] = !updatedToggles[index];
    setCardToggles(updatedToggles);
  }

  //===================set deta in localstorage ===========
  useEffect(() => {
    localStorage.setItem(activeComponent, JSON.stringify(activeComponentData));
  }, [activeComponentData, activeComponent]);

  //==================add item=================

  const additem = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      alert("Please fill in the title");
    } else {
      const newItem = { title: trimmedTitle, des: description, completed: false };

      if (activeComponent === "work") {
        setWorkData([...workData, newItem]);
      } else if (activeComponent === "study") {
        setStudyData([...studyData, newItem]);
      } else if (activeComponent === "entertainment") {
        setEntertainmentData([...entertainmentData, newItem]);
      } else if (activeComponent === "family") {
        setFamilyData([...familyData, newItem]);
      }

      settitle('');
      setdescription('');
    }
  };

  //==================delete item=================

  const delItem = (index) => {
    if (activeComponent === "work") {
      const updatedWorkData = [...workData];
      updatedWorkData.splice(index, 1);
      setWorkData(updatedWorkData);
    } else if (activeComponent === "study") {
      const updatedStudyData = [...studyData];
      updatedStudyData.splice(index, 1);
      setStudyData(updatedStudyData);
    } else if (activeComponent === "entertainment") {
      const updatedEntertainmentData = [...entertainmentData];
      updatedEntertainmentData.splice(index, 1);
      setEntertainmentData(updatedEntertainmentData);
    } else if (activeComponent === "family") {
      const updatedFamilyData = [...familyData];
      updatedFamilyData.splice(index, 1);
      setFamilyData(updatedFamilyData);
    }
  };

  //==================edit item=================

  const updateCard = (newTitle, newDescription, index) => {
    const updatedComponentData = [...activeComponentData];
    updatedComponentData[index] = { title: newTitle, des: newDescription };

    // Update the appropriate state based on the active component
    if (activeComponent === "work") {
      setWorkData(updatedComponentData);
    } else if (activeComponent === "study") {
      setStudyData(updatedComponentData);
    } else if (activeComponent === "entertainment") {
      setEntertainmentData(updatedComponentData);
    } else if (activeComponent === "family") {
      setFamilyData(updatedComponentData);
    }
  };


  //==================Complete and uncomplete=================
  const toggleComplete = (index) => {
    const updatedComponentData = [...activeComponentData];
    updatedComponentData[index].completed = !updatedComponentData[index].completed;

    // Update the appropriate state based on the active component
    if (activeComponent === "work") {
      setWorkData(updatedComponentData);
    } else if (activeComponent === "study") {
      setStudyData(updatedComponentData);
    } else if (activeComponent === "entertainment") {
      setEntertainmentData(updatedComponentData);
    } else if (activeComponent === "family") {
      setFamilyData(updatedComponentData);
    }
  };



  return (
    <>
      <div className="header">
        <p id='h' onClick={GotoGetstart}>todo</p>
        <p id='h'><i className="fa-solid fa-plus" onClick={() => setShowPopup(!showPopup)}></i></p>
      </div>

      <div className="body">
        <div className="list">
          <div className="flex">
            <div className="dot1" onClick={() => handleComponentChange("work")}>
              <Link to="work">work</Link>
            </div>
            <div className="dot2" onClick={() => handleComponentChange("study")}>
              <Link to="study">study</Link>
            </div>
            <div className="dot3" onClick={() => handleComponentChange("entertainment")}>
              <Link to="entertainment">Enjoy</Link>
            </div>
          </div>
          <Outlet />
          <h6 id='hide'> <i className="fa-regular fa-square-check"></i> hide task</h6>
        </div>

      </div>

      {/*==================show card using map function===============*/}

      {activeComponentData.map((ele, index) => (
        <div className="card" key={index}>
          <div className="main-card" >
            <div className="first">
              <h1 className={`mk ${ele.completed ? 'completed' : ''}`} >{ele.title}</h1>
              <h6 id='trippledots' key={index} onClick={() => toggleCard(index)}>...</h6>
            </div>
            <p className={`mk ${ele.completed ? 'completed' : ''}`} >{ele.des}</p>
            <div className="sec">
              <div className="cricle">
                <div className="A"></div>
                <div className="B"></div>
                <div className="C"></div>
              </div>
              <i className={`fa-regular ${ele.completed ? 'fa-check-square' : 'fa-square'}`}  onClick={() => toggleComplete(index)}></i>
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

      {/*=====================add popup part==========================*/}

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
          {/* <div className="tags">
            <h3>tags</h3>
            <div className="t">
              <div className="D"> <h2>work</h2></div>
              <div className="E"><h2>study</h2></div>
              <div className="F"><h2>entertainment</h2></div>
              <div className="G"><h2>famliy</h2></div>
            </div>
          </div> */}
        </div>
      )}

      {/* ===================== edit popup part=========================*/}
      {editIndex !== -1 && activeComponentData[editIndex] && (
        <Editpopup
          closeModel={() => setEditIndex(-1)}
          initialTitle={activeComponentData[editIndex].title}
          initialDescription={activeComponentData[editIndex].des}
          updateCard={(newTitle, newDescription) =>
            updateCard(newTitle, newDescription, editIndex)
          }
        />
      )}
    </>
  )
}


export default Home



