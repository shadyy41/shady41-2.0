const About = () => {
  return (
    <div id="About" className="flex flex-col h-screen w-full md:w-12/13 items-start justify-start pt-20 md:pt-32 gap-4 font-ibm-mono">
      <h2 className="text-xl md:text-2xl text-blue-500">
        👋 Hello, I am
      </h2>
      <h1 className="text-5xl md:text-7xl text-blue-100 font-medium">
        Abhinav Jha.
      </h1>
      <p className="text-lg md:text-xl text-blue-200 w-11/12 lg:w-3/5 mt-4">
       I am a full stack web developer and an engineering undergrad at Netaji Subhas University of Technology.
      </p>
      <a href="#Projects" className="px-1 text-lg md:text-xl text-blue-200 mt-4 after:content-[''] after:bg-blue-600/75 after:w-full after:h-3 after:absolute after:bottom-0 after:left-0 after:-z-50 hover:after:h-full after:transition-all relative focus:outline-none focus:after:h-full focus:text-blue-100 hover:text-blue-100 overflow-ellipsis -z-0">
          &darr; Checkout My Projects &darr;
      </a>
    </div>
  )
}

export default About