import About from "../components/About"
import Projects from "../components/Projects"
import Divider from "../components/Divider"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <main className="flex w-full flex-col md:px-28 bg-[url('/mob-back.svg')] md:bg-[url('/back.svg')] bg-contain bg-no-repeat mt-20">
      <About/>
      <Divider/>
      <Projects/>
      <Divider/>
      <Contact/>
      <Divider/>
      <Footer/>
    </main>
  )
}

export default Home