import React, { useEffect } from 'react';
import routeObj from '../routeData';

const Route = ({ setLog }) => {
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

    let hasCollected = () => {
        return routeObj.dirtLocations.some(el => el[0] === x && el[1] === y);

    }

    let log = [{ step: 1, loc: [x, y], action: "", totalDirtCollected: 0, totalWallHits: 0 }];

    routeObj.drivingInstructions.map(dir => {
        let prev = log[log.length - 1];
        let wallHits = prev.totalWallHits;
        let dirtCollected = prev.totalDirtCollected;

        if (!move(dir)) { wallHits++; }
        if (hasCollected()) { dirtCollected++; }

        let next = {
            step: prev.step + 1,
            loc: [x, y],
            action: dir,
            totalDirtCollected: dirtCollected,
            totalWallHits: wallHits
        };

        log.push(next);
    });

    useEffect(() => setLog(log), []);

    return (
        <div></div>
    )
}

export default Route;