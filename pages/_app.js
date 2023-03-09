import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const loader = document.getElementById('globalLoader');
    loader.style.display = 'none';
  }, []);
  return <>
    <Navbar/>
    <main className="flex w-full items-start justify-start cursor-default select-none px-10 md:px-16 bg-[url('/mob-back.svg')] md:bg-[url('/back.svg')] bg-contain bg-no-repeat">
      <Sidebar dir={1}/><Component {...pageProps}/><Sidebar dir={0}/>
    </main>
  </>
}

export default MyApp