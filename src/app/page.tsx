import * as React from 'react';

import { Header } from '@/components/Header';
import { Greetings } from '@/components/Greetings';
import { Achievments } from '@/components/Achievments';
import { Rating } from '@/components/Rating';
import { Statistics } from '@/components/Statistics';
import { Footer } from '@/components/Footer';

import s from './page.module.scss'

const Page: React.FC = () => (
  <div className={s.wrapper}>
    <Header />
    <Greetings />
    <Rating />
    <Achievments />
    <Statistics />
    <Footer />
  </div>
);

export default Page;
