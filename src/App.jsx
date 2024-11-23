import ContactForm from "./components/Contact"
import { Network } from "./components/Network"
import { About } from "./components/About"
import { Hero } from "./components/Hero"

function App() {

  return (
      <div className="bg-dark-light min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Network />
        <ContactForm />
      </div>
  )
}

export default App
