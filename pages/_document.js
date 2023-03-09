import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from '../src/loader'
class MyDocument extends Document {
    render() {
      return (
          <Html>
              <Head>
                <style>
                  {loader}
                </style>
              </Head>
              <body className="bg-primary font-ibm-mono">
                <div id={'globalLoader'}>
                  <div className="loader">
                    <div/>
                    <div/>
                  </div>
                </div>
                <Main/>
                <NextScript/>
              </body>
          </Html>
      )
    }
}

export default MyDocument