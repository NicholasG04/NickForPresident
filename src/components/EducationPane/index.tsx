import {
  Heading, chakra, Image, Text, VStack, HStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import PaneLayout from '../Base/PaneLayout';

const EducationPane: NextPage = () => {
  const { t } = useTranslation('educationPane');
  return (
    <PaneLayout bgColor="blackAlpha.900" color="white">
      <VStack minH="100vh">
        <Heading textTransform="uppercase" size="5xl" width="100%" p={8}>
          {t('titleBlack')}
          <chakra.span color="purple">{t('titlePurple')}</chakra.span>
        </Heading>

        <HStack flexWrap="wrap" p={10} flexGrow={1} spacing={10} justify="center" align="stretch" width="100%">
          <Image src="/education.svg" alt="Generic education vector" minWidth="250px" maxWidth="500px" flexBasis="40%" flexGrow={9999} p={5} />
          <Text size="paneBody" fontWeight="600" flexBasis="50%" maxWidth="100%" flexGrow={1} marginInlineStart="0 !important">
            {t('paneBody')}
          </Text>
        </HStack>
      </VStack>
    </PaneLayout>
  );
};

export default EducationPane;
