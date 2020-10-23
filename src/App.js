import React, { useState } from 'react';
import Table from './components/Table'
import Route from './components/Route'
import './App.css';

const App = () => {

const [ log, setLog ] = useState([]);

  return (
    <div className="App">
      <Route setLog={setLog}/>
      <Table log={log}/>
    </div>
  );
}

export default App;
