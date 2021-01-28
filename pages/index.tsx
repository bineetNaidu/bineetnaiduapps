import Head from 'next/head';

export default function Home() {
  return (
    <div className="welcome__board">
      <h1>
        Hello 👋👋, I'm
        <a
          className="link"
          href="https://bineetnaidu-io.web.app"
          target="_black"
          rel="noopener"
        >
          Bineet
        </a>
      </h1>
    </div>
  );
}
