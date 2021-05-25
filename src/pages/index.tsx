import TitlePane from 'components/TitlePane';
import AboutPane from 'components/AboutPane';
import CreditPane from 'components/CreditPane';
import VoicePane from 'components/VoicePane';
import BannerPane from 'components/BannerPane';
import TeamsPane from 'components/TeamsPane';
import EducationPane from 'components/EducationPane';
import EndorsementsPane from 'components/EndorsementsPane';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Element, Events } from 'react-scroll';
import { ParallaxController, withController } from 'react-scroll-parallax';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'titlePane', 'aboutPane', 'voicePane', 'educationPane', 'teamsPane', 'endorsementsPane', 'bannerPane', 'creditPane'])),
  },
});

const Home: NextPage<{ parallaxController: ParallaxController }> = ({ parallaxController }) => {
  const router = useRouter();
  useEffect(() => {
    Events.scrollEvent.register('end', () => {
      parallaxController.update();
    });

    const handleRouteChange = (): void => parallaxController.update();

    router.events.on('routeChangeEnd', handleRouteChange);

    return () => {
      Events.scrollEvent.remove('end');
      router.events.off('routeChangeEnd', handleRouteChange);
    };
  });

  return (
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
};
export default withController(Home);
