import Head from 'next/head';
import { LoginSection } from '@atomic';

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
      <LoginSection />
    </div>
  );
}
