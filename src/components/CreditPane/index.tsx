import {
  Heading, UnorderedList, ListItem, Stack, Box, StackDivider,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const CreditPane: NextPage = () => {
  const { t } = useTranslation('creditPane');
  return (
    <PaneLayout minH="auto" p={4}>
      <Heading pl={1} pb={1} size="2xl">{t('credits')}</Heading>
      <Stack pl={1} spacing={3} direction="row" divider={<StackDivider />}>
        <Box mr={2}>
          <Heading py={1} size="md" textDecoration="underline">{t('campaignTeam')}</Heading>
          <UnorderedList size="sm">
            <ListItem>{t('nick')}</ListItem>
            <ListItem>{t('dustin')}</ListItem>
            <ListItem>{t('john')}</ListItem>
            <ListItem>{t('adam')}</ListItem>
            <ListItem>{t('raffi')}</ListItem>
            <ListItem>{t('davo')}</ListItem>
          </UnorderedList>
        </Box>
        <Box ml={2}>
          <Heading py={1} size="md" textDecoration="underline" top="5%">{t('otherSupporters')}</Heading>
          <UnorderedList size="sm">
            <ListItem>{t('luke')}</ListItem>
            <ListItem>{t('roch')}</ListItem>
            <ListItem>{t('leo')}</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </PaneLayout>
  );
};

export default CreditPane;
