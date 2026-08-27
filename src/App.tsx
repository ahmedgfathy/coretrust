import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetail from './components/ProjectDetail'
import CTA from './components/CTA'
import Footer from './components/Footer'

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Services />
      <Stats />
      <Timeline />
      <CTA />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a1a]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
