import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { StyleSheetManager } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': \
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], \
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= \
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); \
        })(window,document,'script','dataLayer','GTM-5PFLX32');",
          }}
        />
      </Head>
      <StyleSheetManager>
        <Component {...pageProps} />
      </StyleSheetManager>
    </>
  );
}

export default MyApp;
