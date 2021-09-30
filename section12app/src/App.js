import React, { useState,useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Demo/DemoOutput';
function App() {
  const [showParagraph,setShowParagraph]=useState(false)
  const [allowToggling,setAllowToggling]=useState(false)
  const toggleParagraph=useCallback(()=>{
    if(allowToggling){
      setShowParagraph(preShowParagraph=>!preShowParagraph);
    }
  },[allowToggling]);
  const allowToggle=()=>{
    setAllowToggling(preAllowToggling=>!preAllowToggling);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraph}>Show paragraph</Button>
      <Button onClick={allowToggle}>Allow Toggle</Button>
    </div>
  );
}

export default App;
