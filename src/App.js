


import React from 'react';
import './App.css';
import GetStart from './Components/GetStart';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import WorkComponent from './Components/WorkComponent'; // Corrected typo here
import StudyComponent from './Components/StudyComponent';
import Entertainment from './Components/Entertainment';
import FamliyComponent from './Components/FamliyComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetStart />} />
        <Route path="/home" element={<Home />}>
           <Route index element={<WorkComponent />} /> {/*Set WorkComponent as default*/}
          <Route path="/home/work" element={<WorkComponent />} />
          <Route path="/home/study" element={<StudyComponent />} />
          <Route path="/home/entertainment" element={<Entertainment />} />
          <Route path="/home/famliy" element={<FamliyComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

