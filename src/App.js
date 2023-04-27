import './App.css';
import Header from './components/Header'
import React from 'react';
import { useState } from 'react';

function App() {
  const [score,setScore] = useState(0)
  const [hiscore,setHiscore] = useState(0)


  return (
    <Header scores={{score,hiscore}}/>
  );
}

export default App;
