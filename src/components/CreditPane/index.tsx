import { Heading, List, ListItem } from '@chakra-ui/react';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const CreditPane: NextPage = () => (
  <PaneLayout>
    <Heading h1 size="2xl">Credits</Heading>
    <Heading as="h4" size="lg">Campaign Team</Heading>
    <List ul>
      <ListItem>Nick - Candidate/Dev</ListItem>
      <ListItem>Dustin - Dev</ListItem>
      <ListItem>Josh - Media</ListItem>
      <ListItem>John - Dev</ListItem>
      <ListItem>Raffi - Memes</ListItem>
      <ListItem>Dave - Memes</ListItem>
    </List>
  </PaneLayout>
);

export default CreditPane;
