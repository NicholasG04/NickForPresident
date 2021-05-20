import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';
import NavBar from './NavBar';

const TitlePane: NextPage = () => (
  <PaneLayout bgGradient="linear-gradient(180deg, #C8C4C4 0%, rgba(255, 255, 255, 0.50) 50%, rgba(155, 154, 154, 0.80) 100%);">
    <NavBar />
    <Heading h1 style={{ textTransform: 'uppercase' }}>Nicholas Gregory</Heading>
  </PaneLayout>
);

export default TitlePane;
