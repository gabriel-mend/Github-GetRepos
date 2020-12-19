import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Github Repos</title>
      
    </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp