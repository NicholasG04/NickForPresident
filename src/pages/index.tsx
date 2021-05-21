import TitlePane from 'components/TitlePane';
import CreditPane from 'components/CreditPane';
import VoicePane from 'components/VoicePane';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <TitlePane />
    <VoicePane />
    <CreditPane />
  </>
);

export default Home;
