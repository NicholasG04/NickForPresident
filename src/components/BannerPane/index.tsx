import {
  Heading, Box, Center,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useTranslation } from 'next-i18next';
import PaneLayout from '../Base/PaneLayout';

const VoicePane: NextPage = () => {
  const { t } = useTranslation('bannerPane');
  return (

    <PaneLayout minH="500px">
      <ParallaxBanner
        layers={[
          {
            amount: 0.3,
            children: (
              <video
                autoPlay
                loop
                playsInline
                preload="auto"
                muted
                src="/banner_vid.mp4"
                style={{
                  height: '100%',
                  width: '100vw',
                  opacity: '0.7',
                  objectFit: 'cover',
                }}
              />
            ),
            expanded: true,
          },
        ]}
        style={{
          height: '100%',
        }}
      >

        <Box pos="relative" zIndex={2} p={5}>
          <Center flexFlow="column nowrap" h="500px" justifyContent="center" alignItems="center" textAlign="center">

            <Heading size="5xl">
              {t('voteNick')}
            </Heading>
            <Heading size="xl" maxW="100%">
              Contact: hello@nickforpresident.co.uk
            </Heading>
            <Heading size="xl" mt={5}>
              Instagram: @VoteNick2021
            </Heading>

          </Center>
        </Box>
      </ParallaxBanner>
    </PaneLayout>
  );
};

export default VoicePane;
