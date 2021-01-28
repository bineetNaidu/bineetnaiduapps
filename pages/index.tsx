import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-purple-400">
      <div className="flex justify-center text-4xl py-4 app">
        <h1>
          Hello 👋👋, I'm
          <a
            className="link ml-2"
            href="https://bineetnaidu-io.web.app"
            target="_black"
            rel="noopener"
          >
            Bineet
          </a>
        </h1>
      </div>

      <Footer />
    </div>
  );
}
