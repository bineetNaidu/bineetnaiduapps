import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="This site is to showcase all projects done by BineetNaidu"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="keywords"
          content="bineetnaidu, bineetnaidu projects, projects, bineetnaidu.io, bineetnaidu project site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Projects | bineetnaidu.io</title>
      </Head>
      <main className="bg-gray-900 app">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
