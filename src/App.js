import React, { useState } from 'react';
import Table from './components/Table';
import Route from './components/Route';
import UploadForm from './components/UploadForm';
import './App.css';

const App = () => {

const [ log, setLog ] = useState([]);
const [ input, setInput] = useState(null);

  return (
    <div className="App">
      <Route setLog={setLog} input={input}/>
      <Table log={log}/>
      <UploadForm setInput={setInput} />
    </div>
  );
}

export default App;
