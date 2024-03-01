import * as React from 'react';

import s from './page.module.scss'
import { Header } from '@/components/Header';
import { FirstBanner } from '@/components/FirstBanner';
import { Greetings } from '@/components/Greetings';
import { Achievments } from '@/components/Achievments';

const Page: React.FC = () => (
  <div className={s.wrapper}>
    <Header />
    <FirstBanner />
    <Greetings />
    <Achievments />
  </div>
);

export default Page;
