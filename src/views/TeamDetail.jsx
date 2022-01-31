import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTeam } from '../services/routes';
import Detail from '../components/Detail';

export default function TeamDetail() {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await getTeam(id);
      console.log('Team useEffect res', res);
      setTeam(res);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  const handleClick = () => {
    navigate('/');
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <Detail {...team} />
      <button onClick={handleClick}>Back Home</button>
    </>
  );
}
