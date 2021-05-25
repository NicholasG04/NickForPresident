import {
  Heading, chakra, Image, Text, VStack, HStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const EducationPane: NextPage = () => (
  <PaneLayout bgColor="blackAlpha.900" color="white" textAlign="right">
    <VStack minH="100vh">
      <Heading textTransform="uppercase" size="5xl" width="100%" p={8}>
        Education
        <chakra.span color="purple"> For the many</chakra.span>
      </Heading>

      <HStack flexWrap="wrap" p={10} flexGrow={1} spacing={10} justify="center" align="stretch" width="100%">
        <Image src="/education.svg" alt="Generic education vector" minWidth="250px" maxWidth="500px" flexBasis="40%" flexGrow={9999} p={5} />
        <Text textAlign="left" size="paneBody" fontWeight="600" flexBasis="50%" maxWidth="100%" flexGrow={1} marginInlineStart="0 !important">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </HStack>
    </VStack>
  </PaneLayout>
);

export default EducationPane;
