import Document, { Html, Head, Main, NextScript , DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='bg-[#12111A]'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument