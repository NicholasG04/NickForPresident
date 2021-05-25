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
    <Box pos="relative" zIndex={2} p="30px">
      <Heading textTransform="uppercase" size="5xl">
        {t('titleBlack')}
        <chakra.span color="purple">{t('titlePurple')}</chakra.span>
      </Heading>
      <Text size="paneBody" fontWeight="600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </Box>
  );
};

const DesktopContent: React.FC = () => (
  <HStack minH="100vh" align="stretch">
    <TextSection />
    <Spacer />
    <Parallax y={[-10, 10]}>
      <Image src="/teams.png" h="120vh" minH="1100px" maxW="none" />
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
