import React from 'react';

const Table = ({ log }) => {
    return (
        <div className="table">
            {log.length !== 0 ? <table>
                <tr>
                    <th>Step</th>
                    <th>Roomba Location</th>
                    <th>Action</th>
                    <th>Total Dirt Collected</th>
                    <th>Total Wall Hits</th>
                </tr>
                {log.map(i => (
                <tr key={i.step}>
                    <td>{i.step}</td>
                    <td>{i.loc}</td>
                    <td>{i.action}</td>
                    <td>{i.totalDirtCollected}</td>
                    <td>{i.totalWallHits}</td>
                </tr>
                ))}
            </table> : <div></div>
            }
        </div>
    )
}

export default Table;