// import useState 
import React, { useState } from 'react';
import Form from "./components/Form"
import './App.css';

import {team} from "./components/Data"; 
import DisplayTeam from './components/DisplayTeam';

const App = () => {
  const [newTeam, setTeam] = useState(team);
  
  
  return (
    <div className="App">
      <Form/>
      {newTeam.map((member) => {console.log(member); return <DisplayTeam props ={member}/>})}

    </div>
  );
}

export default App;
