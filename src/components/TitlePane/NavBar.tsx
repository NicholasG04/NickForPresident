import {
  Heading, HStack, VStack, Spacer, useDisclosure, useBreakpointValue, IconButton, UseDisclosureReturn,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import type { NextRouter } from 'next/router';

const MobileContent: React.FC<Partial<UseDisclosureReturn> & { router: NextRouter }> = ({ isOpen, onToggle, router }) => (
  <>
    <IconButton colorScheme="gray" backgroundColor={isOpen ? 'white' : 'black'} color={isOpen ? 'black' : 'white'} _hover={{}} aria-label="Toggle Menu" icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />} onClick={onToggle} pos="relative" zIndex={4} />
    {isOpen && (
      <VStack marginInlineStart="0 !important" pos="fixed" p={3} left="0" top="0" paddingTop="100px" bgColor="black" color="white" width="100%" height="100vh" zIndex={3}>
        <p>Policy</p>
        <p>Endorsements</p>
        <Link href="/" locale={router.locale === 'en' ? 'fr' : 'en'}>
          <a>{router.locale === 'en' ? 'Français' : 'English'}</a>
        </Link>
      </VStack>
    )}
  </>
);

const DesktopContent: React.FC<{ router: NextRouter }> = ({ router }) => (
  <>
    <p>Policy</p>
    <p>Endorsements</p>
    <Link href="/" locale={router.locale === 'en' ? 'fr' : 'en'}>
      <a>{router.locale === 'en' ? 'Français' : 'English'}</a>
    </Link>
  </>
);

const NavBar: NextPage = () => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const MainContent = useBreakpointValue({ base: <MobileContent isOpen={isOpen} onToggle={onToggle} router={router} />, md: <DesktopContent router={router} /> });
  return (
    <HStack w="100%" p={8}>
      <Heading pos="relative" zIndex={4} color={isOpen ? 'white' : 'black'}>Vote Nick</Heading>
      <Spacer />
      {MainContent}
    </HStack>
  );
};

export default NavBar;
