import TitlePane from 'components/TitlePane';
import CreditPane from 'components/CreditPane';
import VoicePane from 'components/VoicePane';
import BannerPane from 'components/BannerPane';
import TeamsPane from 'components/TeamsPane';
import EducationPane from 'components/EducationPane';
import EndorsementsPane from 'components/EndorsementsPane';
import type { NextPage } from 'next';

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
