import {
  Heading, HStack, VStack, Spacer, useDisclosure, useBreakpointValue, IconButton, UseDisclosureReturn,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const MobileContent: React.FC<Partial<UseDisclosureReturn>> = ({ isOpen, onToggle }) => (
  <>
    <IconButton colorScheme="gray" backgroundColor={isOpen ? 'white' : 'black'} color={isOpen ? 'black' : 'white'} _hover={{}} aria-label="Toggle Menu" icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />} onClick={onToggle} pos="relative" zIndex={4} />
    {isOpen && (
      <VStack marginInlineStart="0 !important" pos="fixed" p={3} left="0" top="0" paddingTop="100px" bgColor="black" color="white" width="100%" height="100vh" zIndex={3}>
        <h1>Vote Nick</h1>
        <p>Policy</p>
        <p>Endorsements</p>
      </VStack>
    )}
  </>
);

const DesktopContent: React.FC = () => (
  <>
    <p>Policy</p>
    <p>Endorsements</p>
  </>
);

const NavBar: NextPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const MainContent = useBreakpointValue({ base: <MobileContent isOpen={isOpen} onToggle={onToggle} />, md: <DesktopContent /> });
  return (
    <HStack w="100%" p={8}>
      <Heading h1 pos="relative" zIndex={4} color={isOpen ? 'white' : 'black'}>Vote Nick</Heading>
      <Spacer />
      {MainContent}
    </HStack>
  );
};

export default NavBar;
