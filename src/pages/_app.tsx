import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useAnalytics } from '@happykit/analytics';
import { appWithTranslation } from 'next-i18next';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const theme = extendTheme({
  components: {
    Heading: {
      sizes: {
        '5xl': {
          fontSize: ['6xl', '7xl', null, '8xl'],
        },
      },
    },
    Text: {
      sizes: {
        paneBody: {
          fontSize: ['xl', null, '2xl', '3xl'],
        },
      },
    },
  },
});

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useAnalytics({ publicKey: 'analytics_pub_60b6210453' });
  return (
    <>
      <Head>
        <title>Nick for College President</title>
        <meta name="description" content="Website for Nick's College President Campaign 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ChakraProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
