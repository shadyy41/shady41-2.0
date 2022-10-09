import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  const links = ['About', 'Projects', 'Contact']

  const [modal, setModal] = useState(false)
  const toggleModal=()=>{
    setModal(!modal)
  }
  useEffect(()=>{
    if(modal){
      document.body.style.overflow = 'hidden'
    }
    else document.body.style.overflow = 'unset'
  }, [modal])

  return (
    <>
      <nav className="flex flex-row justify-between items-center w-full h-20 top-0 fixed text-base font-ibm-mono text-blue-200 px-10 md:px-16 select-none backdrop-blur-sm z-50">
        <Link href={'/'}>
          <a className="after:content-[''] after:bg-blue-600/75 after:w-full after:absolute after:bottom-0 after:left-0 px-1 after:-z-10 after:h-3 after:transition-all relative hover:after:h-full focus:outline-none focus:after:h-full focus:text-blue-100 hover:text-blue-100">
            <span className="h-full flex items-center font-medium">
              SHADY41
            </span>
          </a>
        </Link>
        <button onClick={toggleModal} className="md:hidden w-fit after:opacity-0 after:content-[''] after:bg-blue-600/75 after:w-full after:h-0 after:absolute after:bottom-7 after:left-2 after:-z-10 hover:after:opacity-100 hover:after:h-3 after:transition-all relative h-full focus:outline-none focus:after:opacity-100 focus:after:h-3 focus:text-blue-100 hover:text-blue-100">
          Menu
        </button>
        <div className="hidden md:flex items-center justify-end w-full h-full flex-wrap gap-5">
          {links.map((link, i)=>{
            return (<Link href={`#${link}`} key={i} passHref>
              <a className="after:opacity-0 after:content-[''] after:bg-blue-600/75 after:w-full after:h-0 after:absolute after:bottom-7 after:left-2 after:-z-10 hover:after:opacity-100 hover:after:h-3 after:transition-all relative h-full focus:outline-none focus:after:opacity-100 focus:after:h-3 focus:text-blue-100 hover:text-blue-100">
                <span className="h-full flex items-center">
                  <span className="mr-1 text-blue-500 font-medium">0{i+1}. </span>{link}
                </span>
              </a>
            </Link>)
          })}
        </div>
      </nav>
      {modal && <dialog className="z-30 h-screen w-full bg-transparent backdrop-blur-sm p-0 m-0 max-w-none max-h-full open:flex justify-center items-center text-lg fixed" open>
        <nav className="flex flex-col bg-primary w-fit sm:w-6/12 h-fit drop-shadow-lg rounded-md border-2 border-solid border-blue-200 text-blue-200 p-8 font-ibm-mono gap-4">
          <button onClick={toggleModal} className="w-fit after:opacity-0 after:content-[''] after:bg-blue-600/75 after:w-full after:h-0 after:absolute after:bottom-1 after:left-2 after:-z-10 hover:after:opacity-100 hover:after:h-3 after:transition-all relative h-full focus:outline-none focus:after:opacity-100 focus:after:h-3 focus:text-blue-100 hover:text-blue-100">
            Close
          </button>
          {links.map((link, i)=>{
            return (<Link href={`#${link}`} key={i}>
              <a className="w-fit after:opacity-0 after:content-[''] after:bg-blue-600/75 after:w-full after:h-0 after:absolute after:bottom-1 after:left-2 after:-z-10 hover:after:opacity-100 hover:after:h-3 after:transition-all relative h-full focus:outline-none focus:after:opacity-100 focus:after:h-3 focus:text-blue-100 hover:text-blue-100">
                <span className="h-full flex items-center">
                  <span className="mr-1 text-blue-500 font-medium">0{i+1}. </span>{link}
                </span>
              </a>
            </Link>)
          })}
        </nav>
      </dialog>}
    </>
  )
}

export default Navbar