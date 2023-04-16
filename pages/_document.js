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
              <body className="bg-primary font-ibm-mono relative before:absolute before:top-0 before:w-full before:h-full before:bg-[url('/top.svg')] before:bg-fit before:bg-no-repeat before:bg-top after:absolute after:top-0 after:w-full after:h-full after:bg-[url('/bottom.svg')] after:bg-fit after:bg-no-repeat after:bg-bottom after:z-[-10] before:z-[-10]">
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