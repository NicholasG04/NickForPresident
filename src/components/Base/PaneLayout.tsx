import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { BoxProps } from '@chakra-ui/react';

const PaneLayout: NextPage<BoxProps> = ({ children, ...boxArgs }) => (
  <Box w="100%" minH="100vh" overflow="hidden" {...boxArgs}>
    {children}
  </Box>
);

export default PaneLayout;
