import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Timeline />
      <Projects />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
