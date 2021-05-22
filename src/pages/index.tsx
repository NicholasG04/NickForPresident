import TitlePane from 'components/TitlePane';
import CreditPane from 'components/CreditPane';
import VoicePane from 'components/VoicePane';
import BannerPane from 'components/BannerPane';
import TeamsPane from 'components/TeamsPane';
import EducationPane from 'components/EducationPane';
import EndorsementsPane from 'components/EndorsementsPane';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'titlePane', 'voicePane', 'educationPane', 'teamsPane', 'endorsementsPane', 'bannerPane', 'creditPane'])),
  },
});

const Home: NextPage = () => (
  <>
    <TitlePane />

    <VoicePane />

    <EducationPane />

    <TeamsPane />

    <EndorsementsPane />

    <BannerPane />

    <CreditPane />
  </>
);

export default Home;
