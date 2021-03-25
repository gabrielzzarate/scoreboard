import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  font-size: 4rem;
`;
const Container = styled.div`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

function HomePage() {
  return (
    <>
      <Head>
        <title>Scoreboard</title>
      </Head>
        <Container>
          <GlobalStyle />
          <h1>Hello, world!</h1>
        </Container>
    </>
  )
}


export default HomePage;