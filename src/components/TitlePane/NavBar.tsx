import {
  Heading, HStack, VStack, Spacer, useDisclosure, useBreakpointValue, IconButton, UseDisclosureReturn,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';
import { useScrollYPosition } from 'react-use-scroll-position';
import type { NextPage } from 'next';
import type { NextRouter } from 'next/router';

const MobileContent: React.FC<Partial<UseDisclosureReturn> & { router: NextRouter }> = ({
  isOpen, onToggle, onClose, router,
}) => (
  <>
    <IconButton colorScheme="gray" backgroundColor={isOpen ? 'white' : 'black'} color={isOpen ? 'black' : 'white'} _hover={{}} aria-label="Toggle Menu" icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />} onClick={onToggle} zIndex={5} />
    {isOpen && (
      <VStack fontSize={25} spacing={5} justify="center" marginInlineStart="0 !important" p={3} left="0" top="0" bgColor="black" color="white" width="100%" height="100vh" zIndex={4} pos="fixed">
        <ScrollLink offset={-105} style={{ cursor: 'pointer' }} smooth to="voicePane" onClick={onClose}><a>Policy</a></ScrollLink>
        <ScrollLink offset={-105} style={{ cursor: 'pointer' }} smooth to="endorsementsPane" onClick={onClose}><a>Endorsements</a></ScrollLink>
        <Link href="/" locale={router.locale === 'en' ? 'fr' : 'en'}>
          <a>{router.locale === 'en' ? 'Français' : 'English'}</a>
        </Link>
      </VStack>
    )}
  </>
);

const DesktopContent: React.FC<{ router: NextRouter }> = ({ router }) => (
  <HStack>
    <ScrollLink offset={-105} style={{ cursor: 'pointer' }} smooth to="voicePane"><a>Policy</a></ScrollLink>
    <ScrollLink offset={-105} style={{ cursor: 'pointer' }} smooth to="endorsementsPane">Endorsements</ScrollLink>
    <Link href="/" locale={router.locale === 'en' ? 'fr' : 'en'}>
      <a>{router.locale === 'en' ? 'Français' : 'English'}</a>
    </Link>
  </HStack>
);

const NavBar: NextPage = () => {
  const router = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const MainContent = useBreakpointValue({ base: <MobileContent isOpen={isOpen} onToggle={onToggle} onClose={onClose} router={router} />, md: <DesktopContent router={router} /> });
  const scrollY = useScrollYPosition();
  return (
    <HStack w="100%" p={8} pos="fixed" bg={scrollY > 25 ? 'linear-gradient(180deg, #C8C4C4 0%, #DDDDDD 100%);' : ''} borderBottom={scrollY > 25 ? '2px solid #8C8B8B' : ''} zIndex={3}>
      <ScrollLink style={{ cursor: 'pointer' }} smooth to="titlePane" onClick={onClose}>
        <a>
          <Heading pos="relative" zIndex={5} color={isOpen ? 'white' : 'black'}>Vote Nick</Heading>
        </a>
      </ScrollLink>
      <Spacer />
      {MainContent}
    </HStack>
  );
};

export default NavBar;
