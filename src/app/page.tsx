import * as React from 'react';

import s from './page.module.scss'
import { Header } from '@/components/Header';
import { FirstBanner } from '@/components/FirstBanner';
import { Greetings } from '@/components/Greetings';
import { Achievments } from '@/components/Achievments';
import { Rating } from '@/components/Rating';
import { Statistics } from '@/components/Statistics';
import { InterestingFacts } from '@/components/InterestingFacts';
import { Information } from '@/components/Information';
import { Footer } from '@/components/Footer';

const Page: React.FC = () => (
  <div className={s.wrapper}>
    <Header />
    <Rating />
    <Information />
    <Achievments />
    <Statistics />
    <Footer />
  </div>
);

export default Page;
