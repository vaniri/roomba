import React, { useEffect } from 'react';

const Route = ({ input, setLog }) => {
    let log = [];
    
    useEffect(() => setLog(log), [input]);

    if (!input) { return <div></div>; }

    let x = input.initialRoombaLocation[0];
    let y = input.initialRoombaLocation[1];
    const maxX = input.roomDimensions[0];
    const maxY = input.roomDimensions[1];

    log.push({ step: 1, loc: [x, y], action: "", totalDirtCollected: 0, totalWallHits: 0 });

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
        return input.dirtLocations.some(el => el[0] === x && el[1] === y);

    }

    input.drivingInstructions.map(dir => {
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

    return (
        <div></div>
    )
}

export default Route;