import React from 'react'
import './App.css'
import GetStart from './Components/GetStart'
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
function App() {
  return (
    <>
     <Routes>
        <Route path='/' Component={GetStart} />
        <Route path='/home' Component={Home} />
      </Routes> 
     
    </>
  )
}

export default App