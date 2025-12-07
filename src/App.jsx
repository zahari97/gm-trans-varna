import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'gallery', 'contacts']
      const scrollPosition = window.scrollY + 150 // Увеличавам offset за по-добра чувствителност

      let currentSection = 'home'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop } = element
          if (scrollPosition >= offsetTop) {
            currentSection = section
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    // Извикваме веднага за да зададем правилната активна секция
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contacts />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
