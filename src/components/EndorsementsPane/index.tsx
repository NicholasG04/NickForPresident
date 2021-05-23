import {
  Heading, VStack, UnorderedList, ListItem,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const EndorsementsPane: NextPage = () => (
  <PaneLayout bgColor="blackAlpha.900" color="white">
    <VStack minH="100vh">
      <Heading style={{ textTransform: 'uppercase' }} fontSize="calc(48px + 3vw)" p={8} w="100%">
        Endorsements
      </Heading>
      <UnorderedList fontSize="calc(20px + 0.6vw)">
        <ListItem>Main Sponsor: Cheese Skating</ListItem>
        <ListItem>J. Murphy - &quot;I trust Nick to put the needs of our students before the needs of himself&quot;</ListItem>
      </UnorderedList>
    </VStack>
  </PaneLayout>
);

export default EndorsementsPane;
