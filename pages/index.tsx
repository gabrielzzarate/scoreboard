import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function HomePage() {
  return (
    <Container>
      <h1>Barstool Challenge</h1>
      <p>Click below to see a scoreboard:</p>
      <div className="button-wrapper">
        <Link href="/nba">
          <a className="button button__nba">NBA</a>
        </Link>
        <Link href="/mlb">
          <a className="button button__mlb">MLB</a>
        </Link>
      </div>
    </Container>
  )
}


export default HomePage;