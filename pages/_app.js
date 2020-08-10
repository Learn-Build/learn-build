import { ThemeProvider, CSSReset } from '@chakra-ui/core';
// TODO(Renzo): Import custom theme here

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
