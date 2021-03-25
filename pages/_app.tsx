import GlobalStyles from '../styles/GlobalStyles';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp;