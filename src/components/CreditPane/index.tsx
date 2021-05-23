import {
  Heading, UnorderedList, ListItem, Stack, Box, StackDivider,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const CreditPane: NextPage = () => (
  <PaneLayout minH="auto" p={2}>
    <Heading pl={4} pb={1} fontSize="calc(30px + 0.2vw)">Credits</Heading>
    <Stack pl={5} spacing={3} direction="row" divider={<StackDivider />}>
      <Box mr={5}>
        <Heading pb={1} pt={1} fontSize="calc(20px + 0.2vw)" textDecoration="underline" top="5%">Campaign Team</Heading>
        <UnorderedList fontSize="calc(14px + 0.2vw)">
          <ListItem>Nick - Candidate/Dev</ListItem>
          <ListItem>Dustin - Dev</ListItem>
          <ListItem>John - Dev</ListItem>
          <ListItem>Josh - Media</ListItem>
          <ListItem>Adam - Memes</ListItem>
          <ListItem>Raffi - Memes</ListItem>
          <ListItem>Dave - Memes</ListItem>
        </UnorderedList>
      </Box>
      <Box ml={5}>
        <Heading pb={1} pt={1} fontSize="calc(20px + 0.2vw)" textDecoration="underline" top="5%">Other Supporters</Heading>
        <UnorderedList fontSize="calc(14px + 0.2vw)">
          <ListItem>Luke - Media</ListItem>
          <ListItem>RunAManDown2001 - Ket To Keep The Devs Going</ListItem>
          <ListItem>Roch - Heptagon</ListItem>
        </UnorderedList>
      </Box>
    </Stack>
  </PaneLayout>
);

export default CreditPane;
