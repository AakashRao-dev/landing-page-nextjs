import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="keywords" content="web development, programming" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Hero
        heading="Capture Photography"
        message="I capture moments in nature and keep them alive."
      />
    </div>
  );
}
