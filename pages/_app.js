import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const loader = document.getElementById('globalLoader');
    loader.style.display = 'none';
  }, []);
  return <>
    {/* <div className="bg-[url('/top.svg')] bg-fit bg-no-repeat bg-top absolute top-0 w-full h-full"></div> */}
    {/* <div className="bg-[url('/bottom.svg')] bg-fit bg-no-repeat bg-bottom absolute bottom-0 w-full h-full"></div> */}

    <Navbar/>
    <main className="flex w-full items-start justify-start cursor-default select-none px-10 md:px-16">
      <Sidebar dir={1}/><Component {...pageProps}/><Sidebar dir={0}/>
    </main>
  </>
}

export default MyApp