import React from 'react';

const RouteInfo = ({ log }) => {
  let lastLog = log[log.length - 1];

  return (
    <div>
      {log.length !== 0 ? <div className="route-info">
        <h5>Final Position: {`${lastLog.loc[0]}, ${lastLog.loc[1]}`}</h5>
        <h5>Total Dirt Collected: {lastLog.totalDirtCollected}</h5>
        <h5>Total Distance Traveled: {(log.length - lastLog.totalWallHits) - 1}</h5>
        <h5>Total Walls Hit: {lastLog.totalWallHits}</h5>
      </div> : <div></div>
      }
    </div>
  )
}

export default RouteInfo;