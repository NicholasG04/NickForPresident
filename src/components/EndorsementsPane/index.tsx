import {
  Heading, VStack, Grid, GridItem, useBreakpointValue, Text, BoxProps,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { NextPage } from 'next';
import PaneLayout from '../Base/PaneLayout';

const EndorsementsPane: NextPage = () => {
  const { t } = useTranslation('endorsementsPane');

  const Endorsement: React.FC<Partial<BoxProps> & { name: string, content: string }> = ({ name, content, ...boxStyles }) => (
    <VStack textAlign="center" bgColor="rgba(128,0,128,0.5)" borderRadius="10px" m="var(--chakra-space-4) !important" p={3} whiteSpace="pre-line" {...boxStyles}>
      <Heading size="lg">{name}</Heading>
      <Text fontStyle="italic" h="100%" w="100%">{content}</Text>
    </VStack>
  );

  const DesktopGrid: React.FC = () => (
    <Grid templateColumns="6fr 4fr" templateRows="repeat(4, 1fr)" gap="15px" w="100%" h="100%" p={7}>
      <GridItem gridArea="1 / 1 / 4 / 2;"><Endorsement fontSize="2xl" h="100%" name="Mr Kane" content={t('kane')} /></GridItem>
      <GridItem gridArea="1 / 2 / 2 / 3"><Endorsement fontSize="2xl" h="100%" name="Mr Murphy" content={t('murphy')} /></GridItem>
      <GridItem gridArea="2 / 2 / 3 / 3"><Endorsement fontSize="xl" h="100%" name="Mme Elliott" content={t('elliott')} /></GridItem>
      <GridItem gridArea="3 / 2 / 4 / 3"><Endorsement fontSize="2xl" h="100%" name="Mme Bell" content={t('bell')} /></GridItem>
      <GridItem gridArea="4 / 1 / 5 / 3"><Endorsement textAlign="left" fontSize="2xl" h="100%" name="Notable Student Endorsements" content={t('students')} /></GridItem>
    </Grid>
  );

  const MobileFlex: React.FC = () => (
    <VStack>
      <Endorsement w="90%" name="Mr Kane" content={t('kane')} />
      <Endorsement w="90%" name="Mr Murphy" content={t('murphy')} />
      <Endorsement w="90%" name="Mme Elliott" content={t('elliott')} />
      <Endorsement w="90%" name="Mme Bell" content={t('bell')} />
      <Endorsement w="90%" name="Notable Student Endorsements" content={t('students')} />
    </VStack>
  );

  const MainContent = useBreakpointValue({ base: <MobileFlex />, lg: <DesktopGrid /> });

  return (
    <PaneLayout bgColor="blackAlpha.900" color="white">
      <VStack minH="100vh">
        <Heading textTransform="uppercase" size="5xl" width="100%" p={3}>
          Endorsements
        </Heading>
        {MainContent}
      </VStack>
    </PaneLayout>
  );
};

export default EndorsementsPane;
