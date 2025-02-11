import Link from 'next/link'
import { v4 as uuid } from 'uuid'

const Sidebar = ({dir}) => {
  const email = "abhinavjha2512@gmail.com"
  const socials = [
    {
      url: 'https://github.com/shadyy41',
      logo: 'GH'
    },
    {
      url: 'https://leetcode.com/shady41/',
      logo: 'LC'
    },
    {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      logo: 'IG'
    },
    {
      url: 'https://auth.geeksforgeeks.org/user/shady41/practice/',
      logo: 'GFG'
    },
    {
      url: 'https://www.linkedin.com/in/abhinavanand41/',
      logo: 'IN'
    },
  ]
  return (
    <aside className={`font-ibm-mono hidden h-screen md:flex flex-col justify-end items-start fixed ${dir ? 'left-16' : 'right-16'} after:content-[''] after:bg-blue-100/75 after:w-px after:h-36 after:bottom-0 after:right-0 after:absolute after:-z-10`}>
      {dir ? 
      <nav className="flex flex-col absolute bottom-56 right-0 -left-2 text-sm gap-5">
        {socials.map((e, i)=><Link key={uuid()} href={e.url} passHref>
          <a target="_blank" rel="noopener noreferrer" className="text-blue-100/75 hover:text-blue-100 transition-colors focus:outline-none focus:text-blue-100 w-fit link-underline">
            {e.logo}
          </a>
        </Link>)}
      </nav> : 
      <Link href={'mailto:abhinavjha2512@gmail.com'}>
        <a className="text-xs text-blue-100/75 hover:text-blue-100 transition-colors focus:outline-none focus:text-blue-100">
          <p className="flex flex-col absolute bottom-96 right-0 -left-2 origin-right rotate-90">{email}</p>
        </a>
      </Link>
        }
    </aside>
  )
}

export default Sidebar