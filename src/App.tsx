


import "./App.css"
import { Contact } from "./components/Contact"
import { Testimonials } from "./components/Testimonials"
import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"

function App() {
  

  return (
    <main>
     <Hero />
     <About />
     <Services />
     <Projects />
     <Skills />
     <Testimonials />
     <Contact />

    </main>
  )
}

export default App
