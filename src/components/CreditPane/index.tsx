import {
  Heading, UnorderedList, ListItem, Stack, Box, StackDivider,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const CreditPane: NextPage = () => {
  const { t } = useTranslation('creditPane');
  return (
    <PaneLayout minH="auto" p={1}>
      <Heading pl={4} pb={1} fontSize="calc(30px + 0.2vw)">{t('credits')}</Heading>
      <Stack pl={5} spacing={3} direction="row" divider={<StackDivider />}>
        <Box mr={5}>
          <Heading pb={1} pt={1} fontSize="calc(20px + 0.2vw)" textDecoration="underline" top="5%">{t('campaignTeam')}</Heading>
          <UnorderedList fontSize="calc(14px + 0.2vw)">
            <ListItem>{t('nick')}</ListItem>
            <ListItem>{t('dustin')}</ListItem>
            <ListItem>{t('john')}</ListItem>
            <ListItem>{t('josh')}</ListItem>
            <ListItem>{t('adam')}</ListItem>
            <ListItem>{t('raffi')}</ListItem>
            <ListItem>{t('davo')}</ListItem>
          </UnorderedList>
        </Box>
        <Box ml={5}>
          <Heading pb={1} pt={1} fontSize="calc(20px + 0.2vw)" textDecoration="underline" top="5%">{t('otherSupporters')}</Heading>
          <UnorderedList fontSize="calc(14px + 0.2vw)">
            <ListItem>{t('luke')}</ListItem>
            <ListItem>{t('roch')}</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </PaneLayout>
  );
};

export default CreditPane;
