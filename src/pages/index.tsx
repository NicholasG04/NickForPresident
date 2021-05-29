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
    const handler = (): void => parallaxController.update();

    window.addEventListener('load', handler);
    Events.scrollEvent.register('end', handler);
    router.events.on('routeChangeEnd', handler);
    const resizeObserver = new ResizeObserver(handler);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('load', handler);
      Events.scrollEvent.remove('end');
      router.events.off('routeChangeEnd', handler);
      resizeObserver.unobserve(document.body);
    };
  }, [parallaxController, router.events]);

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
