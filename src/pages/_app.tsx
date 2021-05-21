import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useAnalytics } from '@happykit/analytics';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useAnalytics({ publicKey: 'analytics_pub_60b6210453' });
  return (
    <>
      <Head>
        <title>Nick for College President</title>
        <meta name="description" content="Website for Nick's College President Campaign 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
