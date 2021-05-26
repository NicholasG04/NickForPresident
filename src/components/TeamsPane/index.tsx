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
    <Box p={8} pos="relative" zIndex={2}>
      <Heading textTransform="uppercase" size="5xl">
        {t('titleBlack')}
        <chakra.span color="purple">{t('titlePurple')}</chakra.span>
      </Heading>
      <Text size="paneBody" fontWeight="600">
        {t('paneBody')}
      </Text>
    </Box>
  );
};

const DesktopContent: React.FC = () => (
  <HStack align="stretch">
    <TextSection />
    <Spacer />
    <Parallax y={[-10, 10]}>
      <Image src="/teams.png" minH="140vh" maxW="none" />
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
      minHeight: '200vh',
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
