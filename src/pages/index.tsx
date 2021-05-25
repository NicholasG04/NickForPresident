import TitlePane from 'components/TitlePane';
import AboutPane from 'components/AboutPane';
import CreditPane from 'components/CreditPane';
import VoicePane from 'components/VoicePane';
import BannerPane from 'components/BannerPane';
import TeamsPane from 'components/TeamsPane';
import EducationPane from 'components/EducationPane';
import EndorsementsPane from 'components/EndorsementsPane';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Element } from 'react-scroll';
import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'titlePane', 'aboutPane', 'voicePane', 'educationPane', 'teamsPane', 'endorsementsPane', 'bannerPane', 'creditPane'])),
  },
});

const Home: NextPage = () => (
  <>
    <Element name="titlePane">
      <TitlePane />
    </Element>

    <Element name="aboutPane">
      <AboutPane />
    </Element>

    <Element name="voicePane">
      <VoicePane />
    </Element>

    <EducationPane />

    <TeamsPane />

    <Element name="endorsementsPane">
      <EndorsementsPane />
    </Element>

    <BannerPane />

    <CreditPane />
  </>
);

export default Home;
