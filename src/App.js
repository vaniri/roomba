import React, { useState } from 'react';
import Table from './components/Table';
import Route from './components/Route';
import RouteInfo from './components/RouteInfo';
import UploadForm from './components/UploadForm';
import './App.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const App = () => {

  const [log, setLog] = useState([]);
  const [input, setInput] = useState(null);

  return (
    <div className="App">
      <Route setLog={setLog} input={input} />
      <Table log={log} />
      <RouteInfo log={log} />
      <UploadForm setInput={setInput} />
    </div>
  );
}

export default App;
