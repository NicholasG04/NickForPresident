import TitlePane from 'components/TitlePane';
import CreditPane from 'components/CreditPane';
import VoicePane from 'components/VoicePane';
import BannerPane from 'components/BannerPane';
import TeamsPane from 'components/TeamsPane';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <TitlePane />

    <VoicePane />

    <TeamsPane />

    <BannerPane />

    <CreditPane />
  </>
);

export default Home;
