import './App.css';
import React from 'react'
import Task from './component/Task';

import Addtask from './component/Addtask';
function App() {
  return (
    <div className="App">
     <h1 className="nav" >ToDo Application</h1>
        <Task/>
        <Addtask/>
      
    </div>
  );
}

export default App;
