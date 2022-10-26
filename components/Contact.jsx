import SectionHeader from './SectionHeader'
import Link from 'next/link'
import { v4 as uuid } from "uuid"

const Contact = () => {
  const email = "abhinavjha2512@gmail.com"
  const socials = [
    {
      url: 'https://github.com/shadyy41',
      logo: 'GH',
      name: 'Github',
    },
    {
      url: 'https://www.linkedin.com/in/abhinavanand41/',
      logo: 'IN',
      name: 'Linkedin',
    },
  ]
  return (
  <div className="flex flex-col h-fit w-full md:w-12/13 items-center text-blue-100 gap-8 mt-12" id="Contact">
    <SectionHeader text="Contact"/>
    <div className='text-lg md:text-lg w-full flex flex-col gap-5'>
      <Link href={'mailto:abhinavjha2512@gmail.com'}>
        <a className="w-fit link-underline">
          {email}
        </a>
      </Link>
      <div>
        <ul>
          <li>Connect with me on :-</li>
          {socials.map((e, i)=><li key={uuid()}> <Link key={i} href={e.url} passHref>
          <a target="_blank" rel="noopener noreferrer" className="link-underline">
            {e.name}
          </a>
          </Link> </li>)}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Contact