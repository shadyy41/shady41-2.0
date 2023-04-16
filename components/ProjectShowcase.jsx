import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'

const ProjectShowcase = ({data, id, imageProps}) => {
  return (
    <section className="w-full h-fit flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
      <aside className={`w-full lg:w-5/12 h-fit lg:aspect-[16/10] ${id%2==0 ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start"} flex flex-col justify-center gap-2 ${id%2==0 ? "lg:order-last" : "lg:order-0"}`}>
        <Link href={`https://${data.url}`} passHref>
          <a target="_blank" rel="noopener noreferrer" className={`text-blue-100 w-fit text-2xl font-medium after:content-[''] after:bg-blue-600/75 after:w-full after:h-3 after:absolute after:bottom-0 after:left-0 px-1 after:-z-10 hover:after:h-full after:transition-all relative focus:outline-none focus:after:h-3`}>{data.name}</a>
        </Link>
        <p className="text-blue-200">{data.description}</p>
        <section className="flex gap-2">
          {data.tech.map(e=><Link key={uuid()} href={e.url} passHref>
            <a target="_blank" rel="noopener noreferrer" className="text-blue-100/75 link-underline">
              {e.name}
            </a>
          </Link>)}
        </section>
        <section className='flex gap-2 text-blue-100/75'>
          <Link href={`https://${data.url}`} passHref>
            <a target="_blank" rel="noopener noreferrer" className="link-underline">
              Visit
            </a>
          </Link>
          {data.gh ? <p>&bull;</p> : ''}
          {data.gh ? <Link href={data.gh} passHref>
            <a target="_blank" rel="noopener noreferrer" className="link-underline">
              View repo
            </a>
          </Link> : ""}
        </section>
      </aside>
      <Link href={`https://${data.url}`} passHref>
        <a target="_blank" rel="noopener noreferrer" className={`relative aspect-[16/10] w-full lg:w-7/12 cursor-pointer showcase-banner rounded-md overflow-hidden text-lg`} url-attr={data.url}>
          <Image src={data.banner} layout='fill' priority alt='Project screenshot' placeholder='blur'/>
        </a>
      </Link>
    </section>
  )
}

export default ProjectShowcase
