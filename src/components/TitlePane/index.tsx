import {
  chakra, Heading, Box, Button, useBreakpoint,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Image from 'next/image';
import PaneLayout from '../Base/PaneLayout';
import NavBar from './NavBar';

const TitlePane: NextPage = () => {
  const isMobile = ['base', 'sm'].includes(useBreakpoint());
  return (
    <PaneLayout position="relative" bgGradient="linear-gradient(180deg, #C8C4C4 0%, rgba(255, 255, 255, 0.50) 50%, rgba(155, 154, 154, 0.80) 100%);">
      <NavBar />
      <Box pos="absolute" right="10vw" top="calc(100px + 20vh)" maxW="calc(300px + 40%)" textAlign="right" zIndex={2}>
        <Heading style={{ textTransform: 'uppercase' }} fontSize="calc(48px + 3vw)">Nicholas Gregory</Heading>
        <Heading>
          A college president
          <chakra.span color="purple"> you can count on</chakra.span>
        </Heading>
        <Button isActive colorScheme="purple" mt={5} size="lg">What can Nick offer me?</Button>
      </Box>
      <Box opacity={isMobile ? '0.7' : '1.0'} pos="absolute" bottom="-5px" maxW="70%">
        <Image layout="intrinsic" src="/face.png" width={600} height={633} priority />
      </Box>
    </PaneLayout>
  );
};

export default TitlePane;
