import {
  chakra, Heading, Text, Image, HStack, VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useTranslation } from 'next-i18next';
import PaneLayout from '../Base/PaneLayout';

const VoicePane: NextPage = () => {
  const { t } = useTranslation('voicePane');
  return (

    <PaneLayout>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            children: (
              <video
                autoPlay
                loop
                playsInline
                preload="auto"
                muted
                src="/voice_vid.mp4"
                style={{
                  height: '150vh',
                  width: '100vw',
                  opacity: '0.6',
                  objectFit: 'cover',
                }}
              />
            ),
            expanded: true,
          },
        ]}
        style={{
          minHeight: '100vh',
          objectFit: 'cover',
        }}
      >

        <VStack pos="relative" zIndex={2} p="30px">

          <Heading textTransform="uppercase" size="5xl" w="100%">
            {t('titleBlack')}
            <chakra.span color="purple">{t('titlePurple')}</chakra.span>
            {t('titleBlack2')}
          </Heading>

          <HStack flexGrow={1} spacing={10} justify="center" align="flex-start" w="100%" h="100%">
            <Text size="paneBody" fontWeight="600" w="80vw" flexBasis="50%" flexGrow={1}>
              {t('paneBody')}
            </Text>
            <Image display={['none', null, null, 'block']} src="/kimberley_logo.png" alt="Kimberley College Logo" minWidth="250px" maxWidth="30%" flexBasis="40%" flexGrow={9999} p={5} m="auto 0 !important" />
          </HStack>

        </VStack>
      </ParallaxBanner>
    </PaneLayout>
  );
};

export default VoicePane;
