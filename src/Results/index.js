import React from 'react';

export default (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Distance</th>
          <th>Time</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <tr>
            <td>{result.distance}</td>
            <td>{result.speed}</td>
            <td>{result.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};