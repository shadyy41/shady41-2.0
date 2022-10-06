import ProjectShowcase from './ProjectShowcase'

export default function Projects() {
  const projects=[
    {
      name: 'CodeShack',
      description: 'CodeShack is a WebRTC based collaborative coding app which also supports peer-to-peer video calling.',
      banner: 'https://i.imgur.com/d3zABwU.png',
      url: 'codeshack.vercel.app',
      tech: ['Next.js', 'React.js', 'SocketIo'],
      isLight: "false",
    },
    {
      name: 'Breeze',
      description: 'Breeze is a music player app similar to Spotify Web, users can perform CRUD operations on playlists, perform a regex based search for songs and artists.',
      banner: 'https://i.imgur.com/7SVifXq.png',
      url: 'breeze41.vercel.app',
      tech: ['Next.js', 'MongoDB', 'React.js'],
      isLight: "false",
    },
    {
      name: 'SnippetShare',
      description: 'SnippetShare is a web app that allows users to create, save, share code snippets. The code editor supports 6 languages.',
      banner: 'https://i.imgur.com/heSSF3r.png',
      url: 'snippetshare41.herokuapp.com',
      tech: ['Express.js', 'MongoDB', 'Bulma'],
      isLight: "true",
    },
  ]
  return (
    <div className="flex flex-col h-fit w-full md:w-12/13 items-start justify-start font-ibm-mono text-blue-100 mb-12 lg:mb-24" id="Projects">
      <header className="w-full flex items-center justify-center mb-12 lg:mb-24">
        <h1 className="text-3xl md:text-4xl text-blue-100 font-medium w-fit after:content-[''] after:bg-blue-600/75 after:w-full after:h-3 after:absolute after:bottom-0 after:left-0 px-1 after:-z-10 hover:after:h-full after:transition-all relative focus:outline-none focus:after:h-3 focus:text-blue-100 hover:text-blue-100">
          Projects
        </h1>
      </header>
      <section className="flex flex-col gap-8 lg:gap-20">
        {projects.map((e, i)=>{
          return <ProjectShowcase data={e} key={i} id={i}/>
        })}
      </section>
    </div>
  )
}
