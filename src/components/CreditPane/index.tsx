import {
  Heading, UnorderedList, ListItem, Stack, Divider, Center, Box, StackDivider,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const CreditPane: NextPage = () => (
  <PaneLayout minH="300px">
    <Heading pt={2} pl={8} pb={2} as="h1" size="2xl">Credits</Heading>
    <Stack pl={8} spacing={3} direction="row" divider={<StackDivider />}>
      <Box h="20vw">
        <Heading pb={1} pt={1} as="h4" size="lg" textDecoration="underline" top="5%">Campaign Team</Heading>
        <UnorderedList>
          <ListItem>Nick - Candidate/Dev</ListItem>
          <ListItem>Dustin - Dev</ListItem>
          <ListItem>Josh - Media</ListItem>
          <ListItem>John - Dev</ListItem>
          <ListItem>Raffi - Memes</ListItem>
          <ListItem>Dave - Memes</ListItem>
          <ListItem>Adam - Memes</ListItem>
        </UnorderedList>
      </Box>
      <Box h="20vw">
        <Heading pb={1} pt={1} as="h4" size="lg" textDecoration="underline" top="5%">Other Supporters</Heading>
        <UnorderedList>
          <ListItem>Luke - Media</ListItem>
        </UnorderedList>
      </Box>
    </Stack>
  </PaneLayout>
);

export default CreditPane;
