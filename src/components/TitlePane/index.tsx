import {
  chakra, Heading, Box, Button, useBreakpoint,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import PaneLayout from '../Base/PaneLayout';
import NavBar from './NavBar';

const TitlePane: NextPage = () => {
  const isNotDesktop = ['base', 'sm', 'md', 'lg'].includes(useBreakpoint());
  const { t } = useTranslation('titlePane');
  return (
    <PaneLayout position="relative" bgGradient="linear-gradient(180deg, #C8C4C4 0%, rgba(255, 255, 255, 0.50) 50%, rgba(155, 154, 154, 0.80) 100%);">
      <NavBar />
      <Box pos="absolute" right="10vw" top="calc(100px + 20vh)" maxW="calc(300px + 40%)" textAlign="right" zIndex={2}>
        <Heading style={{ textTransform: 'uppercase' }} fontSize="calc(48px + 3vw)">Nicholas Gregory</Heading>
        <Heading>
          {t('sloganBlack')}
          <chakra.span color="purple">{t('sloganPurple')}</chakra.span>
        </Heading>

        <ScrollLink to="voicePane" smooth offset={-105}>
          <Button isActive colorScheme="purple" mt={5} size="lg">{t('button')}</Button>
        </ScrollLink>
      </Box>
      <Box opacity={isNotDesktop ? '0.7' : '1.0'} pos="absolute" bottom="-6px" maxW="70%">
        <Image layout="intrinsic" src="/face.png" width={600} height={633} priority />
      </Box>
    </PaneLayout>
  );
};

export default TitlePane;
