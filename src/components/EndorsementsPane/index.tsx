import {
  Heading, VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const EndorsementsPane: NextPage = () => (
  <PaneLayout bgColor="blackAlpha.900" color="white">
    <VStack minH="100vh">
      <Heading style={{ textTransform: 'uppercase' }} fontSize="calc(48px + 3vw)" p={8} w="100%">
        Endorsements
      </Heading>

      {/* TODO: Dustin to add quotes here */ }

    </VStack>
  </PaneLayout>
);

export default EndorsementsPane;
