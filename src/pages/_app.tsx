import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Nick for College President</title>
      <meta name="description" content="Website for Nick's College President Campaign 2021" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ChakraProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default MyApp;
