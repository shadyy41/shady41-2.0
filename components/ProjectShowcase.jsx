import Image from 'next/image'
import Link from 'next/link'
export default function ProjectShowcase({data, id}) {
  return (
    <section className="w-full h-fit flex flex-col lg:flex-row items-center justify-center font-ibm-mono gap-4 lg:gap-8 text-blue-200">
      <aside className={`w-full lg:w-5/12 h-fit lg:aspect-[16/10] text-blue-200 ${id%2==0 ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start"} flex flex-col justify-center gap-2 ${id%2==0 ? "lg:order-last" : "lg:order-0"}`}>
        <Link href={`https://${data.url}`} passHref>
          <a target="_blank" rel="noopener noreferrer" className={`w-fit text-2xl font-medium after:content-[''] after:bg-blue-600/75 after:w-full after:h-3 after:absolute after:bottom-0 after:left-0 px-1 after:-z-10 hover:after:h-full after:transition-all relative focus:outline-none focus:after:h-3 focus:text-blue-100 hover:text-blue-100`}>{data.name}</a>
        </Link>
        <p>{data.description}</p>
        <section className="flex gap-2">
          {data.tech.map((e, i)=><Link key={i} href={'wdaw'} passHref>
            <a target="_blank" rel="noopener noreferrer" className="text-blue-100/75 hover:text-blue-100 transition-colors focus:outline-none focus:text-blue-100 w-fit after:opacity-0 after:content-[''] after:bg-blue-600/75 after:w-full after:h-0 after:absolute after:bottom-0 after:left-1 after:-z-10 hover:after:opacity-100 hover:after:h-3 after:transition-all relative h-full focus:after:opacity-100 focus:after:h-3">
              {e}
            </a>
          </Link>)}
        </section>
      </aside>
      <Link href={`https://${data.url}`} passHref>
        <a target="_blank" rel="noopener noreferrer" className={`relative aspect-[16/10] w-full lg:w-7/12 cursor-pointer showcase-banner rounded-md overflow-hidden text-lg`} url-attr={data.url}>
          <Image src={data.banner} layout='fill' priority alt='Project screenshot'/>
        </a>
      </Link>
    </section>
  )
}
