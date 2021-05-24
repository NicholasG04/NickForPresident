import {
  chakra, Heading, Box, Text, HStack, Spacer, Image, useBreakpointValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { useTranslation } from 'next-i18next';
import PaneLayout from '../Base/PaneLayout';

const TextSection: React.FC = () => {
  const { t } = useTranslation('teamsPane');
  return (
    <Box pos="relative" zIndex={2} p="30px" h="100vh">
      <Heading style={{ textTransform: 'uppercase' }} fontSize="calc(48px + 3vw)">
        {t('titleBlack')}
        <chakra.span color="purple">{t('titlePurple')}</chakra.span>
      </Heading>
      <Text fontSize="calc(20px + 0.2vw)" fontWeight="600" minW="300px" maxW="800px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </Box>
  );
};

const DesktopContent: React.FC = () => (
  <HStack maxH="100vh">
    <TextSection />
    <Spacer />
    <Parallax y={[-50, 50]}>
      <Box>
        <Image src="/teams.png" height="120vh" minW="380px" />
      </Box>
    </Parallax>
  </HStack>
);

const MobileContent: React.FC = () => (
  <ParallaxBanner
    layers={[
      {
        image: '/teams.png',
        amount: 0.5,
        props: {
          style: {
            opacity: 0.6,
            filter: 'blur(5px)',
          },
        },
      },
    ]}
    style={{
      height: '120vh',
    }}
  >
    <TextSection />
  </ParallaxBanner>
);
const TeamsPane: NextPage = () => {
  const MainContent = useBreakpointValue({ base: <MobileContent />, md: <DesktopContent /> });
  return (
    <PaneLayout>
      {MainContent}
    </PaneLayout>
  );
};

export default TeamsPane;
