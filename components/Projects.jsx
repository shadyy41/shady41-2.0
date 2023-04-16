import ProjectShowcase from './ProjectShowcase'
import SectionHeader from './SectionHeader'
import Divider from './Divider'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'

const projects=[
  {
    name: 'CodeShack',
    description: 'CodeShack is a WebRTC based collaborative coding app which also supports peer-to-peer video calling.',
    banner: 'https://i.imgur.com/d3zABwU.png',
    url: 'codeshack.vercel.app',
    gh: 'https://github.com/shadyy41/codeshack',
    tech: [{
      name: "Next.js",
      url: "https://nextjs.org/"
    }, {
      name: "Socket.IO",
      url: "https://socket.io/"
    }, {
      name: "Yjs",
      url: "https://docs.yjs.dev/"
    }, ],
  },
  {
    name: 'Breeze',
    description: 'Breeze is a music player app similar to Spotify Web, users can perform CRUD operations on playlists, perform a regex based search for songs and artists.',
    banner: 'https://i.imgur.com/7SVifXq.png',
    url: 'breeze41.vercel.app',
    gh: 'https://github.com/shadyy41/Breeze',
    tech: [{
      name: "Next.js",
      url: "https://nextjs.org/"
    }, {
      name: "MongoDB",
      url: "https://www.mongodb.com/"
    }, {
      name: "NextAuth.js",
      url: "https://next-auth.js.org/"
    }, ],
  },
  {
    name: 'TicTacToe',
    description: 'Online TicTacToe app which supports Auth using JWT. Users can start a game with other users using their email ids. Finished games are stored in MongoDB database.',
    banner: 'https://i.imgur.com/H2Eh8bL.png',
    url: 'tictactoe41.vercel.app',
    gh: 'https://github.com/shadyy41/tic-tac-toe',
    tech: [{
      name: "Next.js",
      url: "https://nextjs.org/"
    }, {
      name: "Socket.IO",
      url: "https://socket.io/"
    }, {
      name: "Express.js",
      url: "https://expressjs.com/"
    }, {
      name: "MongoDB",
      url: "https://www.mongodb.com/"
    }, ],
  },
  {
    name: 'SnippetShare',
    description: 'SnippetShare is a web app that allows users to create, save, share code snippets. The code editor supports 6 languages.',
    banner: 'https://i.imgur.com/heSSF3r.png',
    url: 'snippetshare41.herokuapp.com',
    tech: [{
      name: "Express.js",
      url: "https://expressjs.com/"
    }, {
      name: "MongoDB",
      url: "https://www.mongodb.com/"
    }, {
      name: "Bulma",
      url: "https://bulma.io/"
    }, ],
  },
]
const INIT_LEN = 2

const Projects = () => {
  const [maxLen, setMaxLen] = useState(INIT_LEN)
  const handleMore = ()=>{
    const nava = maxLen===projects.length ? INIT_LEN : projects.length
    setMaxLen(nava)
  }

  return (
    <div className="flex flex-col h-fit w-full md:w-12/13 items-start text-blue-100 gap-10" id="Projects">
      <SectionHeader text="Projects"/>
      <p className="text-lg md:text-xl text-blue-200 w-11/12">
       These are some of the projects I&apos;ve built over the last year.
      </p>
      <section className="flex flex-col w-full">
        {projects.filter((e, i) => i < maxLen).map((e, i)=>{
          return <section key={uuid()}>
            <ProjectShowcase data={e} id={i}/>
            <Divider/>
          </section>
        })}
        <div className="w-full flex items-center justify-center"> 
          <button className="text-blue-200 text-xl md:text-lg link-underline after:left-0" onClick={handleMore}>{maxLen!==projects.length ? 'View more' : 'View less'}</button>  
        </div>
      </section>
    </div>
  )
}

export default Projects