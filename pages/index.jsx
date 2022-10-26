import About from "../components/About"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <main className="flex w-full flex-col md:px-28 gap-0 md:gap-14">
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default Home