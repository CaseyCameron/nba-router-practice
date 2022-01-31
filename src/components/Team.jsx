import React from 'react';
import { Link } from 'react-router-dom';

export default function Team(team) {
  const { id, name } = team;
  return (
    <>
      <Link to={`/team/${id}`}>
        <h1>{name}</h1>
      </Link>
    </>
  );
}
