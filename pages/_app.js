import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }){
  return <>
    <Navbar/>
    <main className="flex w-full items-start justify-start cursor-default select-none px-10 md:px-16">
      <Sidebar dir={1}/><Component {...pageProps}/><Sidebar dir={0}/>
    </main>
  </>
}

export default MyApp
