import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import Clients from './components/Clients'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetail from './components/ProjectDetail'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { AdminLogin, AdminLayout, AdminDashboard, AdminProjects, AdminContent, AdminImages } from './admin'

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
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
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#0a0a1a]">
          <Routes>
            {/* Admin Routes - No Navbar/Footer */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="projects" element={<AdminProjects />} />
              <Route path="content" element={<AdminContent />} />
              <Route path="images" element={<AdminImages />} />
            </Route>

            {/* Public Routes */}
            <Route path="/*" element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/project/:id" element={<ProjectDetail />} />
                </Routes>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  )
}

export default App
