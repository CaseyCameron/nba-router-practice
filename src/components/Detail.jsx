import React from 'react';

export default function Teams(team) {
  const { name, city, conference, division } = team;
  return (
    <>
      <div className="details">
        <h1>{name}</h1>
        <p>City: {city}</p>
        <p>Conference: {conference}</p>
        <p>Division: {division}</p>
      </div>
    </>
  );
}
