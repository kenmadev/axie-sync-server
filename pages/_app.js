import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { StyleSheetManager } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <StyleSheetManager>
        <Component {...pageProps} />
      </StyleSheetManager>
    </>
  );
}

export default MyApp;
