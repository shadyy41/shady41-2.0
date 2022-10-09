import ProjectShowcase from './ProjectShowcase'
import SectionHeader from './SectionHeader'

const Projects = () => {
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
      <SectionHeader text="Featured Projects"/>
      <section className="flex flex-col gap-8 lg:gap-20">
        {projects.map((e, i)=>{
          return <ProjectShowcase data={e} key={i} id={i}/>
        })}
      </section>
    </div>
  )
}

export default Projects