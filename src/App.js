// import useState 
import React, { useState } from 'react';
import Form from "./components/Form"
import './App.css';

import {team} from "./components/Data"; 

const App = () => {
  return (
    <div className="App">
      <Form team={team}/>
    </div>
  );
}

export default App;
