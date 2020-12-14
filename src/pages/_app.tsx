import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Github Repos</title>
        <link rel="shortcut icon" href="/img/github-icon.svg" />
        <meta 
          name="description" 
          content="A simple project starter to work NextJs, Typescript, React and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp