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
          amount: 0.5,
          children: (
            <video
              autoPlay
              loop
              playsInline
              preload="auto"
              muted
              poster="/voice_vid_preview.jpg"
              src="/voice_vid.mp4"
              style={{
                height: '100vh',
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
        height: '500px',
        objectFit: 'cover',
      }}
    >

      <Box pos="relative" zIndex={2}>
        <Center flexFlow="column nowrap" h="500px" justifyContent="center" alignItems="center">

          <Heading fontSize="calc(50px + 3vw)">
            Vote Nick
          </Heading>
          <Heading fontSize="calc(16px + 3vw)" textAlign="center">
            Contact: hello@nickforpresident.co.uk
          </Heading>

        </Center>
      </Box>
    </ParallaxBanner>
  </PaneLayout>
);

export default VoicePane;
