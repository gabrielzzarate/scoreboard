import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GameType } from '../../types';
import Scoreboard from '../../components/Scoreboard'

export interface Props {
  data: GameType;
}

export default function NBAPage({ data }: Props) { 
  let timeout;
  const [updatedData, setData] = useState(null);

  useEffect(() => {
    ping();

    return () => clearTimeout(timeout);
  });

  async function ping() {
    try {
      const response = await axios.get(`${process.env.SERVER_HOST}/api/nba`);
  
      if (response.status === 200) {
        const data = response && response.data;
        setData(data);

      }
    } catch (err) {
      console.log(err);
    } finally {
      timeout = () => setTimeout(ping, 2000);
      timeout();
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

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.SERVER_HOST}/api/nba`);
  const data = response && response.data;

  return {
    props: {
      data
    }
  }
}