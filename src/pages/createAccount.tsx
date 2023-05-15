import Head from 'next/head';
import { SidebarFooter } from '@atomic';

import { navItems, footerData } from '../utils/data';
import CreateAccountSection from 'Atomic/Organisms/CreateAcountSection/CreateAccountSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>National Museums Scotland - Create an Account</title>
        <meta
          name='description'
          content='Create account page of National Museums Scotland website.'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <CreateAccountSection />
    </div>
  );
}
