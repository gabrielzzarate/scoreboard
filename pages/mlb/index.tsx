import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Scoreboard from '../../components/Scoreboard'


export default function MLBPage({ data }) {
  let timeout;
  const [updatedData, setData] = useState(null);

  useEffect(() => {
    ping();

    return () => clearTimeout(timeout);
  });

  async function ping() {
    try {
      const response = await axios.get(`${process.env.SERVER_HOST}/api/mlb`);
  
      if (response.status === 200) {
        const data = response && response.data;
        setData(data);

      }
    } catch (err) {
      console.log(err);
    } finally {
      //timeout = () => setTimeout(ping, 2000);
      //timeout();
    }
  }

  if (!data) {
    return null;
  }

  const scoreboard = updatedData || data;
  return (
    <Scoreboard {...scoreboard} />
  )
}

export async function getServerSideProps(ctx) {
  const response = await axios.get(`${process.env.SERVER_HOST}/api/mlb`);
  const data = response && response.data;

  return {
    props: {
      data,
    }
  }
}