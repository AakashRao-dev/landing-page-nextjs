import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learning Next.js + TailwindCSS</title>
        <meta name="keywords" content="web development, programming" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <h1 className="text-3xl">
        Hello World! I'm learning Next.js with TailwindCSS
      </h1>
    </div>
  );
}
