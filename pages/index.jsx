import About from "../components/About"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>shady41</title>
      </Head>
      <main className="flex w-full flex-col md:px-28 gap-0 md:gap-14">
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default Home