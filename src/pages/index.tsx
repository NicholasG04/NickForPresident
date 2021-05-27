import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useAnalytics } from '@happykit/analytics'

export default function Home() {

  useAnalytics({ publicKey: 'analytics_pub_60b6210453' });

  const calculateTimeLeft = () => {
    const difference = +new Date('May 29, 2021 15:00:00 GMT+01:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {timeLeft[interval] === 1 ? interval.substring(0, interval.length - 1) : interval}{" "}
      </span>
    );
  });

  const mainStyles = {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Segoe UI, Helvetica, Arial, sans-serif",
    backgroundColor: '#C8C4C4',
    minHeight: '100vh',
    width: '100vw',
    padding: 0,
    margin: 0,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexFlow: "column nowrap",
    alignItems: 'center',
    paddingTop: '10vh',
    paddingBottom: '10vh',
    overflowX: 'hidden',
    boxSizing: 'border-box',
  }

  return (
    <>
      <Head>
        <title>Nick for College President</title>
        <meta name="description" content="Website for Nick's College President Campaign 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={mainStyles as any}>
        <h1 style={{ fontSize: '10vw', marginBottom: '25px' }}>#NickForPresident</h1>
        <h1 style={{width: '70vw'}}>The campaign has almost started, stay tuned for the launch on Saturday 29/05/2021 at 15:00</h1>
        <h3>Follow @VoteNick2021 on Instagram for updates</h3>
        <h2>Time until campaign launch:</h2>
        <div style={{fontSize: 22}}>{timerComponents.length ? timerComponents : <span>Campaign Launched!</span>}</div>
      </div>

    </>
  )
}
