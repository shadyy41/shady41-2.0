import Image from "next/image"
import Link from "next/link"
export default function Contact() {
  const email = "abhinavjha2512@gmail.com"

  return (
    <div className="flex flex-col h-fit w-full md:w-12/13 items-start justify-start font-ibm-mono text-blue-100 mb-12 lg:mb-24" id="Contact">
      <header className="w-full flex items-center justify-center mb-12">
        <h1 className="text-3xl md:text-4xl text-blue-100 font-medium w-fit after:content-[''] after:bg-blue-600/75 after:w-full after:h-3 after:absolute after:bottom-0 after:left-0 px-1 after:-z-10 hover:after:h-full after:transition-all relative focus:outline-none focus:after:h-3 focus:text-blue-100 hover:text-blue-100">
          Get In Touch
        </h1>
      </header>
      <section className="w-full flex items-center justify-center gap-2">
        <div className="relative aspect-square rounded-lg w-32 overflow-hidden">
          <Image src={"https://i.imgur.com/yAXCpEB.jpg"} layout='fill' priority alt='Cat pic'/>
        </div>
        <aside className="">
          <Link href={'mailto:abhinavjha2512@gmail.com'}>
            <a className="text-lg text-blue-100/75 hover:text-blue-100 transition-colors focus:outline-none focus:text-blue-100">
              <p>{email}</p>
            </a>
          </Link>
        </aside>
      </section>
    </div>
  )
}
