import {
  Heading, Box, Center,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { ParallaxBanner } from 'react-scroll-parallax';
import PaneLayout from '../Base/PaneLayout';

const VoicePane: NextPage = () => (

  <PaneLayout minH="500px">
    <ParallaxBanner
      layers={[
        {
          amount: 1,
          children: (
            <video
              autoPlay
              loop
              playsInline
              preload="auto"
              muted
              src="/banner_vid.mp4"
              style={{
                width: '100vw',
                minHeight: '1500px',
                opacity: '0.7',
                objectFit: 'cover',
              }}
            />
          ),
          expanded: true,
        },
      ]}
      style={{
        height: '500px',
        objectFit: 'cover',
      }}
    >

      <Box pos="relative" zIndex={2} p={5}>
        <Center flexFlow="column nowrap" h="500px" justifyContent="center" alignItems="center" textAlign="center">

          <Heading size="5xl">
            Vote Nick
          </Heading>
          <Heading size="xl">
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

export default VoicePane;
