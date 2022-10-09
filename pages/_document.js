import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
      return (
          <Html className='scroll-smooth'>
            <Head/>
              <body className="bg-primary font-ibm-mono">
                <Main/>
                <NextScript/>
              </body>
          </Html>
      )
    }
}

export default MyDocument