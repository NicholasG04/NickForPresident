import {
  chakra, Heading, Box,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { ParallaxBanner } from 'react-scroll-parallax';
import PaneLayout from '../Base/PaneLayout';

const VoicePane: NextPage = () => (
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
              poster="/voice_vid_preview.jpg"
              src="/voice_vid.mp4"
              style={{
                height: '120vh',
                opacity: '0.7',
                objectFit: 'cover',
              }}
            />
          ),
          expanded: true,
        },
      ]}
      style={{
        height: '100vh',
        objectFit: 'cover',
      }}
    >

      <Box pos="relative" zIndex={2} p="30px">

        <Heading style={{ textTransform: 'uppercase' }} fontSize="calc(48px + 3vw)">
          Giving students
          <chakra.span color="purple"> a voice</chakra.span>
        </Heading>
      </Box>
    </ParallaxBanner>
  </PaneLayout>
);

export default VoicePane;
