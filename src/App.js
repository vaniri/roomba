import React from 'react';
import Table from './components/Table'
import './App.css';
import routeObj from './routeData';

const App = () => {

  let x = routeObj.initialRoombaLocation[0];
  let y = routeObj.initialRoombaLocation[1];
  const maxX = routeObj.roomDimensions[0];
  const maxY = routeObj.roomDimensions[1];

  let move = dir => {
        if (dir === "N" && y < maxY - 1) {
          y++;
          return true;
        } else if (dir === "S" && y > 0) { 
          y--;
          return true;
        } else if (dir === "W" && x > 0) {
          x--;
          return true;
        } else if (dir === "E" && x < maxX - 1) { 
          x++;
          return true;
        } 
        return false;
  }

  let log = [
    {step: 1, loc: [x, y], action: "", totalDirtCollected: 0, totalWallHits: 0}
  ]
  
  routeObj.drivingInstructions.map( dir => {
    let moved = move(dir);
    let prev = log[log.length - 1];
    let wallHits = prev.totalWallHits;
    if (!moved) { wallHits++;}
    let next = {step: prev.step + 1, loc: [x, y], action: dir, totalDirtCollected: 0, totalWallHits: wallHits};
    log.push(next);
  });

  return (
    <div className="App">
      <Table log={log}/>
    </div>
  );
}

export default App;
