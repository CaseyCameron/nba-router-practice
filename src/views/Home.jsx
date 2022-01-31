import React, { useEffect, useState } from 'react';
import Team from '../components/Team';
import { getTeams } from '../services/routes';

export default function Home() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTeams();
      console.log(res);
      setTeams(res);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <div className="teamContainer">
        {teams.map((team) => (
          <Team key={team.id} {...team} />
        ))}
      </div>
    </>
  );
}
