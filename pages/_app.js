/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

// FIXME(Renzo): this file is required for injecting Chakra UI theme
// see: https://nextjs.org/docs/advanced-features/custom-app
//      https://chakra-ui.com/getting-started
// I'm just going to disable eslint for this file until I find a better fix
import React from 'react';
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core';

const customIcons = {
  logo: {
    path: (
      <path
        fill="currentColor"
        d="M70.1 38c-27.7 12.7-51 23-51.7 23-1.1 0-1.4 2.4-1.4 11v11h18v10.9l4.5.7 4.5.6v63.6l-4.5.6-4.5.7V171H17v22h210v-22h-20v-10.9l-4.5-.7-4.5-.6V95.2l4.5-.6 4.5-.7V83h20V72c0-8.9-.3-11-1.4-11-.8 0-24.3-10.4-52.1-23-27.8-12.7-51.2-23-51.8-23-.7.1-23.9 10.4-51.6 23zM80 88.4v5.4l4 .7 4 .7v63.6l-4 .7-3.9.7-.3 5.1c-.3 5.1-.4 5.2-3.5 5.5l-3.3.3v-11l-4.5-.7-4.5-.6V95.2l4.5-.6 4.5-.7V83h7v5.4zm44 0v5.4l4.5.6 4.5.7v63.8l-4.5.7-4.5.6v5.4c0 5.3 0 5.4-3 5.4s-3-.1-3-5.4v-5.4l-4.5-.6-4.5-.7V95.1l4.5-.7 4.5-.6v-5.4c0-5.3 0-5.4 3-5.4s3 .1 3 5.4zm45 0v5.4l4 .7 4 .7v63.6l-4 .7-4 .7v10.9l-3.2-.3c-3.2-.3-3.3-.4-3.6-5.5l-.3-5.1-3.9-.7-4-.7V95.2l4-.7 4-.7v-4.7c0-5.6.4-6.1 4.2-6.1 2.7 0 2.8.1 2.8 5.4zM144 197.5c0 1.3 5 1.5 39 1.5s39-.2 39-1.5-5-1.5-39-1.5-39 .2-39 1.5zM164 203.5c0 1.3 5 1.5 39 1.5s39-.2 39-1.5-5-1.5-39-1.5-39 .2-39 1.5z"
      />
    ),
    viewBox: '0 0 247 212',
  },
};

const learnBuildTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={learnBuildTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
