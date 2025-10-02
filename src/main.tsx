import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import CommandPalette from './components/CommandPalette/CommandPalette'
import Footer from './components/Footer/Footer'
import ErrorBoundary from './lib/ErrorBoundary'

const Home = lazy(() => import('./pages/Home/Home'))
const AboutPage = lazy(() => import('./pages/About/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/Projects/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const SkillsPage = lazy(() => import('./pages/Skills/SkillsPage'))

// REMOVED: The old SkillsPage import
// const SkillsPage = lazy(() => import('./pages/Skills/SkillsPage'))

// ADDED: The new ExperiencePage import
// Note: Adjust the path if your file is located elsewhere (e.g., './pages/SkillsPage/SkillsPage')
const ExperiencePage = lazy(() => import('./pages/Experience/ExperiencePage'))

const el = document.getElementById('root')
if (!el) {
  throw new Error('Root element #root not found')
}

createRoot(el).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <div className="app-shell" style={{minHeight:'100dvh', display:'flex', flexDirection:'column'}}>
          
          <CommandPalette />
          
          <main id="main" style={{flex:1}}>
            <Suspense fallback={<div className="container" style={{padding:'32px'}}>Loading…</div>}>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/projects" element={<ProjectsPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="*" element={<NotFound/>} />

                {/* REMOVED: The old /skills route */}
                <Route path="/skills" element={<SkillsPage/>} />
                
                {/* ADDED: The new /experience route */}
                <Route path="/experience" element={<ExperiencePage />} />

              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)