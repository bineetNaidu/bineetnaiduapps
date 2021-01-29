import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body className="bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
