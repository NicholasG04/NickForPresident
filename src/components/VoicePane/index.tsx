import {
  chakra, Heading, Box, Text,
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
              src="/voice_vid.mp4"
              style={{
                height: '120vh',
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
        height: '100vh',
        objectFit: 'cover',
      }}
    >

      <Box pos="relative" zIndex={2} p="30px">

        <Heading textTransform="uppercase" size="5xl">
          Giving students
          <chakra.span color="purple"> a voice</chakra.span>
        </Heading>

        <Text size="paneBody" fontWeight="600" minW="300px" maxW="1000px" w="80vw">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

      </Box>
    </ParallaxBanner>
  </PaneLayout>
);

export default VoicePane;
