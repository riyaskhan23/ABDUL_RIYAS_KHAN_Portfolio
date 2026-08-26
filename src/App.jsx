import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Educaion'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen global-grid-bg">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Education />
        <Projects />
      </main>
      <Contact />
    </div>
  )
}