import {
  Heading, VStack, UnorderedList, ListItem,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const EndorsementsPane: NextPage = () => {
  const { t } = useTranslation('endorsementsPane');
  return (
    <PaneLayout bgColor="blackAlpha.900" color="white">
      <VStack minH="100vh">
        <Heading textTransform="uppercase" size="5xl" width="100%" p={3}>
          Endorsements
        </Heading>
        <UnorderedList fontSize="calc(20px + 0.6vw)" pl={12} whiteSpace="pre-line">
          <ListItem>Cheese Skating - Main Sponsor</ListItem>
          <ListItem>J. Murphy - &quot;I trust Nick to put the needs of our students before the needs of himself&quot;</ListItem>
          <ListItem>Mme. Bell - &quot;To me, Nicholas is really an extraordinary student and it&apos;s a pleasure to work with him. I would definitely vote for him&quot;</ListItem>
          <ListItem>{t('kane')}</ListItem>
        </UnorderedList>
      </VStack>
    </PaneLayout>
  );
};

export default EndorsementsPane;
