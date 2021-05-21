import {
  Heading, chakra, Image, Text, VStack, HStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const EducationPane: NextPage = () => (
  <PaneLayout bgColor="blackAlpha.900" color="white" textAlign="right">
    <VStack minH="100vh">
      <Heading style={{ textTransform: 'uppercase' }} fontSize="calc(48px + 3vw)" p={8} w="100%">
        Education
        <chakra.span color="purple"> For the many</chakra.span>
      </Heading>

      <HStack flexWrap="wrap" p={10} flexGrow={1} spacing={10} justify="center" align="center">
        <Image src="/education.svg" alt="Generic education vector" height="60%" minW="300px" maxW="40%" />
        <Text textAlign="left" fontSize="calc(20px + 0.6vw)" fontWeight="600" minW="300px" maxW="50%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </HStack>
    </VStack>
  </PaneLayout>
);

export default EducationPane;
